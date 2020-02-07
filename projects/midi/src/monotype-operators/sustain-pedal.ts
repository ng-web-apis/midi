import {MonoTypeOperatorFunction} from 'rxjs';
import {filter} from 'rxjs/operators';
import {between} from '../utils/between';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;

/**
 * Filter MIDI messages to sustain pedal changes only
 */
export function sustainPedal(): MonoTypeOperatorFunction<MIDIMessageEvent> {
    return source =>
        source.pipe(filter(({data}) => between(data[0], 176, 191) && data[1] === 64));
}
