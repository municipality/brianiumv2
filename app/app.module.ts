import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';
import {HttpModule, JsonpModule} from '@angular/http';
import {MainComponent} from './main.component';

@NgModule({
    imports: [
        BrowserModule,
        // routing,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        MainComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [MainComponent]
})
export class AppModule {
}
