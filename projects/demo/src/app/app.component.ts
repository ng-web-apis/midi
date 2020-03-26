import {ChangeDetectionStrategy, Component, HostListener, Inject} from '@angular/core';
import {MIDI_MESSAGES, MIDI_SUPPORT, notes, toData, toFrequency} from '@ng-web-apis/midi';
import {EMPTY, merge, Observable, Subject} from 'rxjs';
import {catchError, map, scan, startWith, switchMap} from 'rxjs/operators';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

@Component({
    selector: 'main',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    started = false;

    readonly octaves = Array.from({length: 24}, (_, i) => i + 48);

    readonly notes$: Observable<Map<number, number | null>>;

    readonly mousedown$ = new Subject<number>();

    readonly mouseup$ = new Subject<void>();

    readonly silent$ = new Subject<number>();

    constructor(
        @Inject(MIDI_SUPPORT) readonly supported: boolean,
        @Inject(MIDI_MESSAGES) messages$: Observable<MIDIMessageEvent>,
    ) {
        const mouseInitiated$ = this.mousedown$.pipe(
            switchMap(down =>
                this.mouseup$.pipe(
                    map(() => [0, down, 0]),
                    startWith([0, down, 64]),
                ),
            ),
        );

        this.notes$ = merge(
            messages$.pipe(
                catchError(() => EMPTY),
                notes(),
                toData(),
            ),
            mouseInitiated$,
        ).pipe(
            scan((map, [_, note, volume]) => map.set(note, volume / 512), new Map()),
            switchMap(notes =>
                this.silent$.pipe(
                    map(key => notes.set(key, null)),
                    startWith(notes),
                ),
            ),
            startWith(new Map()),
        );
    }

    start() {
        this.started = true;
    }

    noteKey({key}: {key: number}): number {
        return key;
    }

    toFrequency(note: number): number {
        return toFrequency(note);
    }

    getClass(notes: Map<number, number>, note: number): string {
        const className = !notes.get(note) ? '' : '_active';
        const key = note - 47;

        return `${className} key-${key % 12 || 12}`;
    }

    onQuiet(key: number) {
        this.silent$.next(key);
    }

    onMouseDown(note: number) {
        this.mousedown$.next(note);
    }

    @HostListener('document:mouseup')
    @HostListener('document:touchend')
    onMouseUp() {
        this.mouseup$.next();
    }
}
