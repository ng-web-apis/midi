import {InjectionToken} from '@angular/core';

import MIDIOutput = WebMidi.MIDIOutput;

export const MIDI_OUTPUT = new InjectionToken<Promise<MIDIOutput | undefined>>(
    'MIDIOutput object',
);
