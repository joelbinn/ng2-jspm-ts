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
  <h1>Simple Angular 2.0 App + JSPM + TS</h1>
  `
})
class App {
    title:string;

    constructor() {
        this.title = 'My Appl';
    }
}

bootstrap(App);

console.log('Loaded');
