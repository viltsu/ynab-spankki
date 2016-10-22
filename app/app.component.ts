import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Statements} from "./statement";
import {Parser} from "./parser";

@Component({
  selector: 'hello-world-app',
  templateUrl: 'app.component.html'
})
export class HelloWorldComponent {
  title = 'Budgeter';
  content = '';
  dataUrl: any = '/';

  constructor(private sanitizer: DomSanitizer) {
    console.log('Environment config');
  }

  doDataUrl() {
    let statements = new Statements();
    let parser = new Parser(statements);
    parser.data = this.content;
    parser.parse();
    this.dataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(statements.toCSV());
  }

  download() {
    let statements = new Statements();
    let parser = new Parser(statements);
    parser.data = this.content;
    parser.parse();
    let csv = encodeURI(statements.toCSV());
    window.open(csv, 'tili.csv');
  }
}
