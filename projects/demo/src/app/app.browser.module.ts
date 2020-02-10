import {
    APP_BASE_HREF,
    CommonModule,
    LocationStrategy,
    PathLocationStrategy,
} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {WebAudioModule} from '@ng-web-apis/audio';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule.withServerTransition({appId: 'demo'}),
        AppRoutingModule,
        WebAudioModule,
    ],
    declarations: [AppComponent],
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
