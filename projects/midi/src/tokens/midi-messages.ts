import {inject, InjectionToken} from '@angular/core';
import {from, fromEvent, merge, Observable, throwError} from 'rxjs';
import {FromEventTarget} from 'rxjs/internal/observable/fromEvent';
import {share, startWith, switchMap} from 'rxjs/operators';
import {MIDI_ACCESS} from './midi-access';

import MIDIMessageEvent = WebMidi.MIDIMessageEvent;
import MIDIConnectionEvent = WebMidi.MIDIConnectionEvent;

export const MIDI_MESSAGES = new InjectionToken<Observable<MIDIMessageEvent>>(
    'All incoming MIDI messages stream',
    {
        providedIn: 'root',
        factory: () =>
            from(inject(MIDI_ACCESS).catch((e: Error) => e)).pipe(
                switchMap(access =>
                    access instanceof Error
                        ? throwError(access)
                        : fromEvent(
                              access as FromEventTarget<MIDIConnectionEvent>,
                              'statechange',
                          ).pipe(
                              startWith(null),
                              switchMap(() =>
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
                ),
                share(),
            ),
    },
);
