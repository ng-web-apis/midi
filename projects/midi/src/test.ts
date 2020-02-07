// This file is required by karma.conf.js and loads recursively all the .spec and framework files
import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';

import {getTestBed} from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

fetch('http://localhost:9222/json')
    .then(response => response.json())
    .then(response => {
        const socket = new WebSocket(response[0].webSocketDebuggerUrl);

        socket.onopen = () => {
            socket.send(
                JSON.stringify({
                    id: 1,
                    method: 'Browser.grantPermissions',
                    params: {
                        origin: 'http://localhost:9876',
                        permissions: ['midi', 'midiSysex'],
                    },
                }),
            );
        };
    });

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);

// And load the modules.
context.keys().map(context);
