export class Statement {
    Date: string;
    Description: string;
    Payee: string;
    Memo: string;
    Outflow: string;
    Inflow: string;
}

const keys: string[] = [
    'Date',
    'Description',
    'Payee',
    'Memo',
    'Outflow',
    'Inflow'
];

export class Statements {
    statements: Statement[];
    constructor() {
        this.statements = [];
    }
    addStatement(statement: Statement) {
        this.statements.push(statement);
    }
    toCSV() {
        let csv: string = keys.join(',') + '\n';
        this.statements.map((value: Statement) => {
            let row: string[] = [
                (<any>value)[keys[0]] || '',
                (<any>value)[keys[1]] || '',
                (<any>value)[keys[2]] || '',
                (<any>value)[keys[3]] || '',
                (<any>value)[keys[4]] || '',
                (<any>value)[keys[5]] || '',
            ];
            csv += row.join(',') + '\n';
        });
        return 'data:text/csv;charset=utf-8,' + csv;
    }
}
