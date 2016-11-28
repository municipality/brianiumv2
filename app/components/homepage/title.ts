import {Component} from '@angular/core';

@Component ({
    selector : 'title-text',
    template : `
        <div class="first-line">
            Brianium
        </div>
        <div class="second-line">

        </div>
    `
})

export class TitleText {

}

@Component ({
    selector : 'title',
    directives : [TitleText],
    template : `
        <title-text></title-text>
    `
})

export class Title {

}
