import {InjectionToken} from '@angular/core';

import MIDIInput = WebMidi.MIDIInput;

export const MIDI_INPUT = new InjectionToken<Promise<MIDIInput | undefined>>(
    'MIDIInput object',
);
