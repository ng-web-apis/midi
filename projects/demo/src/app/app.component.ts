import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MIDI_SUPPORT} from '@ng-web-apis/midi';

@Component({
    selector: 'main',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    started = false;

    constructor(@Inject(MIDI_SUPPORT) readonly supported: boolean) {}

    start() {
        this.started = true;
    }
}
