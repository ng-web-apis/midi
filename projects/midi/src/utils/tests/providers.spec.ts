import {TestBed} from '@angular/core/testing';
import {MIDI_ACCESS} from '../../tokens/midi-access';
import {MIDI_INPUT} from '../../tokens/midi-input';
import {MIDI_OUTPUT} from '../../tokens/midi-output';
import {inputById} from '../input-by-id';
import {inputByName} from '../input-by-name';
import {outputById} from '../output-by-id';
import {outputByName} from '../output-by-name';

describe('inputById', () => {
    const midiInput1 = {
        id: 'input-0',
        name: 'Yamaha',
    };
    const midiInput2 = {
        id: 'input-1',
        name: 'Roland',
    };
    const midiOutput1 = {
        id: 'output-0',
        name: 'Yamaha',
    };
    const midiOutput2 = {
        id: 'output-1',
        name: 'Roland',
    };

    const midiAccessMock = {
        inputs: new Map([[midiInput1.id, midiInput1], [midiInput2.id, midiInput2]]),
        outputs: new Map([[midiOutput1.id, midiOutput1], [midiOutput2.id, midiOutput2]]),
    };

    it('gets MIDIInput by id', done => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: MIDI_ACCESS,
                    useValue: Promise.resolve(midiAccessMock),
                },
                inputById('input-0'),
            ],
        });

        TestBed.get(MIDI_INPUT).then((input: any) => {
            expect(input).toBe(midiInput1);
            done();
        });
    });

    it('gets MIDIInput by name', done => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: MIDI_ACCESS,
                    useValue: Promise.resolve(midiAccessMock),
                },
                inputByName('Roland'),
            ],
        });

        TestBed.get(MIDI_INPUT).then((input: any) => {
            expect(input).toBe(midiInput2);
            done();
        });
    });

    it('gets MIDIOutput by id', done => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: MIDI_ACCESS,
                    useValue: Promise.resolve(midiAccessMock),
                },
                outputById('output-0'),
            ],
        });

        TestBed.get(MIDI_OUTPUT).then((input: any) => {
            expect(input).toBe(midiOutput1);
            done();
        });
    });

    it('gets MIDIOutput by name', done => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: MIDI_ACCESS,
                    useValue: Promise.resolve(midiAccessMock),
                },
                outputByName('Roland'),
            ],
        });

        TestBed.get(MIDI_OUTPUT).then((input: any) => {
            expect(input).toBe(midiOutput2);
            done();
        });
    });
});
