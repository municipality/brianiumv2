import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';
import {HttpModule, JsonpModule} from '@angular/http';
import {MainComponent} from './main.component';
import {Homepage} from './components/homepage/homepage';

/**
    Routes are enabled with "routing" variable in app.module
    Have to declare components inside module as well
*/

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        MainComponent,
        Homepage
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [MainComponent]
})
export class AppModule {
}
