///<reference path="./_references.d.ts"/>
import 'bootstrap';
import "bootstrap/css/bootstrap.css!"
import "reflect-metadata"

import {
    Component,
    View,
    bootstrap
} from "angular2/angular2";

@Component({
    selector: 'myapp'
})
@View({
    template: `
<div class="container">
  <h1>Simple Angular 2.0 App + JSPM + TS</h1>
  <div class="well well-lg">{{title}}</div>
</div>
`
})
class Main {
    title:string;

    constructor() {
        this.title = 'My Appl';
    }
}

bootstrap(Main);

console.log('Loaded');
