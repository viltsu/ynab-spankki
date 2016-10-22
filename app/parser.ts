import { Statements, Statement } from './statement';

export class Parser {
    data: string;
    statements: Statements;
    constructor(statements:Statements) {
        this.statements = statements;
    }
    parse() {
        let rows = this.data.split("\n");
        let parts: string[];
        rows.map((value) => {
            parts = value.split("\t");
            if (parts.length < 4) {
                return;
            }
            let statement = new Statement();
            statement.Date = parts[0].replace('.', '/').replace('.', '/');
            statement.Payee = '"' + parts[4].replace(new RegExp('{','g'), 'ä') + '"';
            let amount = parts[1].substr(1).replace(',','.');
            if (parts[1].indexOf('-') === 0) {
                statement.Outflow = amount;
            } else {
                statement.Inflow = amount;
            }
            this.statements.addStatement(statement);
        });
    }
}
