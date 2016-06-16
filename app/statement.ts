export class Statement {
    Date: string;
    Description: string;
    Payee: string;
    Meno: string;
    Outflow: string;
    Inflow: string;
}

const keys = [
    "Date",
    "Description",
    "Payee",
    "Meno",
    "Outflow",
    "Inflow"
];

export class Statements {
    statements: Statement[];
    constructor() {
        this.statements = [];
    }
    addStatement(stetement:Statement) {
        this.statements.push(stetement);
    }
    toCSV() {
        let csv = keys.join(',') + "\n";
        this.statements.map((value) => {
            let row = [
                value[keys[0]] || '',
                value[keys[1]] || '',
                value[keys[2]] || '',
                value[keys[3]] || '',
                value[keys[4]] || '',
                value[keys[5]] || '',
            ];
            csv += row.join(',') + "\n";
        });
        return "data:text/csv;charset=utf-8," + csv;
    }
}
