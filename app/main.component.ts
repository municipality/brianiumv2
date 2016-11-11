import {Component, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app',
    template: `
        <div>Hello World</div>
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
