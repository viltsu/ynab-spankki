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
  }

  doDataUrl() {
    let statements = new Statements();
    let parser = new Parser(statements);
    parser.data = this.content;
    parser.parse();
    this.dataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(statements.toCSV());
  }
}
