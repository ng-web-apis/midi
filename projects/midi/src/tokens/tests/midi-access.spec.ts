import {TestBed} from '@angular/core/testing';
import {MIDI_ACCESS} from '../midi-access';
import {SYSEX} from '../sysex';

describe('MIDI_ACCESS', () => {
    // TODO: Wait before remote debugging allows midi access
    beforeAll(done => {
        setTimeout(() => {
            done();
        }, 4000);
    });

    it('SYSEX is false by default', done => {
        TestBed.get(MIDI_ACCESS).then((midiAccess: any) => {
            expect(midiAccess.sysexEnabled).toBe(false);
            done();
        });
    });

    it('SYSEX is set to true', done => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: SYSEX,
                    useValue: true,
                },
            ],
        });

        TestBed.get(MIDI_ACCESS).then((midiAccess: any) => {
            expect(midiAccess.sysexEnabled).toBe(true);
            done();
        });
    });
});
