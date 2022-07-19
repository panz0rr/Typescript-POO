// Example from https://github.com/typeorm/typeorm

// An interface it's a contract of the structure
// a class that implements it must have
// Everything it's public in an interface.

export interface Driver {
    database: string;
    password: string;
    port: number;

    connect(): void;

    disconnect(): void;
    
    isConnected(name: string): boolean;
}

class PostgresDriver implements Driver {
    constructor(
        public database: string,
        public password: string,
        public port: number) {}

    connect() {
        console.log('me conecto');
    }

    disconnect(): void {
        throw new Error("Method not implemented.");
    }
    isConnected(name: string): boolean {
        throw new Error("Method not implemented.");
    }
    
}

class OracleDriver implements Driver {
constructor(
        public database: string,
        public password: string,
        public port: number,
        private _host: number) {}

    connect() {
        console.log('me conecto');
    }
    
    disconnect(): void {
        throw new Error("Method not implemented.");
    }
    isConnected(name: string): boolean {
        throw new Error("Method not implemented.");
    }
}