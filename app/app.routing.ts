import { Routes, RouterModule }   from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {Homepage} from './components/homepage/homepage';


/**
    Routes are enabled with "routing" variable in app.module
    Have to declare components inside module as well
*/

const appRoutes : Routes = [
    { path: '', component: Homepage}
];

export const appRoutingProviders : any[] = [];

export const routing : ModuleWithProviders = RouterModule.forRoot([...appRoutes]);
