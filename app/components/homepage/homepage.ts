import {Component} from '@angular/core';
import {Title} from './title';

@Component ({
    selector: 'homepage',
    directives: [Title],
    template: `
        <title></title>
    `
})
export class Homepage {
    constructor () {
        
    }
}
