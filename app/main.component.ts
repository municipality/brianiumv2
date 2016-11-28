import {Component, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Title} from './components/homepage/title';

@Component({
    selector: 'app',
    directives: [Title],
    template: `
        <title></title>
    `
})
export class MainComponent implements AfterViewInit {

    constructor () {

    }

    /**
     *  Loading screen and app are in the same container for fluid movement
     *  Used top animation rather than transform translate for non-fixed image offshifts
     */
    ngAfterViewInit () {
    }


}
