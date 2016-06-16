import { Component } from '@angular/core';
import { Parser } from './parser'
import { Statements } from './statement'

@Component({
    selector: 'budgeter-app',
    template: `
        <h1>{{title}}</h1>
        <textarea [(ngModel)]="parser.data" placeholder="paste data here"></textarea><br>
        <button (click)="download()">download</button>
`
})
export class AppComponent {
    statements = new Statements();
    title = 'Budgeter';
    parser = new Parser(this.statements);
    download = () => {
        this.parser.parse();
        let csv = encodeURI(this.statements.toCSV());
        window.open(csv);
    }
}
