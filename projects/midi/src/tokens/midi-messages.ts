import {inject, InjectionToken} from '@angular/core';
import {from, fromEvent, merge, Observable} from 'rxjs';
import {FromEventTarget} from 'rxjs/internal/observable/fromEvent';
import {switchMap} from 'rxjs/operators';
import {MIDI_ACCESS} from './midi-access';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

export const MIDI_MESSAGES = new InjectionToken<Observable<MIDIMessageEvent>>(
    'All incoming MIDI messages stream',
    {
        providedIn: 'root',
        factory: () =>
            from(inject(MIDI_ACCESS)).pipe(
                switchMap(access =>
                    merge(
                        ...Array.from(access.inputs).map(([_, input]) =>
                            fromEvent(
                                input as FromEventTarget<MIDIMessageEvent>,
                                'midimessage',
                            ),
                        ),
                    ),
                ),
            ),
    },
);
