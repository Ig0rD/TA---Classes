export class ATM {
    constructor(numeroSerie = 0) {
        this._numeroSerie = numeroSerie;
        this._valor = 0;
        this._nota100 = 0;
        this._nota50 = 0;
        this._nota20 = 0;
        this._nota10 = 0;
        this._nota5 = 0;
        this._totalnotas = 0;
    }
    get numeroSerie() {
        return this._numeroSerie;
    }

    get valor() {
        return this._valor;
    }

    abastecer(n, nota) {
        if (nota === 100) {
            this._nota100 += n;
            this._valor += nota*n;
            this._totalnotas += n;
        }
        if (nota === 50) {
            this._nota50 += n;
            this._valor += nota*n;
            this._totalnotas += n;
        }
        if (nota === 20) {
            this._nota20 += n;
            this._valor += nota*n;
            this._totalnotas += n;
        }
        if (nota === 10) {
            this._nota10 += n;
            this._valor += nota*n;
            this._totalnotas += n;
        }
        if (nota === 5) {
            this._nota5 += n;
            this._valor += nota*n;
            this._totalnotas += n;
        }
        console.log(this._totalnotas);
    }
    cedulas(nota) {
        if (nota === 100) {
            return this._nota100;
        }
        if (nota === 50) {
            return this._nota50;
        }
        if (nota === 20) {
            return this._nota20;
        }
        if (nota === 10) {
            return this._nota10;
        }
        if (nota === 5) {
            return this._nota5;
        } else {
            return 0;
        }
    }
    retirar(x) {
        for (let i=0; i<this._totalnotas; i++) {
            if (x >= 100 && this._notas100 > 0) {
                x -= 100;
                this._nota100 -= 1;
            } else if (x >= 50 && x < 100 && this._notas50 > 0) {
                x -= 50;
                this._nota50 -= 1;
                // console.log (x + ' 2');
            } else if (x >= 20 && x < 50 && this._notas20 > 0) {
                x -= 20;
                this._nota20 -= 1;
                // console.log (x + ' 3');
            } else if (x >= 10 && x < 20 && this._notas10 > 0) {
                x -= 10;
                this._nota10 -= 1;
                // console.log (x + ' 4');
            } else if (x >= 5 && x < 10 && this._notas5 > 0) {
                x -= 5;
                this._nota5 -= 1;
                // console.log (x + ' 5');
            }
        }
        this._value = this._nota100 * 100 + this._nota50 * 50 +
         this._nota20 * 20 + this._nota10 * 10 + this._nota5 * 5;
        // console.log(this._value + ' test');
    }
}
