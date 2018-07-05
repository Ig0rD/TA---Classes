export class Conta {
    constructor(agencia = 0, numero = 0, saldo = 500.00) {
        this._agencia = agencia;
        this._numero = numero;
        this._saldo = saldo;
    }
    get agencia() {
        return this._agencia;
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    toString() {
        return ('ag ' + this._agencia + ' cc ' +
            this._numero + ' saldo ' + this._saldo.toFixed(2));
    }
    sacar(x) {
        if (x <= this._saldo) {
            this._saldo -= x;
        }
    }
    depositarEmDinheiro(x) {
        if (x <= 1000) {
            this._saldo += x;
        }
    }
    depositarEmCheque(x) {
        if (x <= 10000) {
            this._saldo += x;
        }
    }
}
