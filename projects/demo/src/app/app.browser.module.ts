import {
    APP_BASE_HREF,
    CommonModule,
    LocationStrategy,
    PathLocationStrategy,
} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {WebAudioModule} from '@ng-web-apis/audio/fesm2015/ng-web-apis-audio';
import {FrequencyPipeModule} from '@ng-web-apis/midi';
import {AdsrPipe} from './adsr.pipe';
import {AppComponent} from './app.component';
import {DemoComponent} from './demo/demo.component';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        WebAudioModule,
        FrequencyPipeModule,
    ],
    declarations: [AppComponent, DemoComponent, AdsrPipe],
    providers: [
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
        {
            provide: APP_BASE_HREF,
            useValue: '',
        },
    ],
})
export class AppBrowserModule {}
