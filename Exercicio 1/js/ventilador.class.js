export class Ventilator {
    constructor(watts = 0, brand = '', minRPM = 0, maxRPM = 0,
        on = false, off = true, rpm = 0, velocity = 0) {
        this._watts = watts;
        this._minRPM = minRPM;
        this._maxRPM = maxRPM;
        this._brand = brand;
        this._on = on;
        this._off = off;
        this._rpm = rpm;
        this._velocity = velocity;
    }

    get watts() {
        return this._watts;
    }

    get brand() {
        return this._brand;
    }

    get minRPM() {
        return this._minRPM;
    }

    get maxRPM() {
        return this._maxRPM;
    }

    get off() {
        return this._off;
    }

    get on() {
        return this._on;
    }

    get rpm() {
        return this._rpm;
    }

    get velocity() {
        return this._velocity;
    }
    speedUp() {
        this._on = true;
        this._off = false;
        const intervalo = (this._maxRPM - this._minRPM)/2;
        if (this._rpm !== this._maxRPM) {
            if (this._rpm === 0) {
                this._rpm = this._minRPM;
            } else {
                this._rpm += intervalo;
            }
            this._velocity += 1;
        }
    }
    slowDown() {
        const intervalo = (this._maxRPM - this._minRPM)/2;
        if (this._rpm === this._minRPM) {
            this._rpm = 0;
            this._on = false;
            this._off = true;
            this._velocity = 0;
        } else if (this._rpm === this._maxRPM) {
            this._rpm = this._maxRPM - intervalo;
            this._on = true;
            this._off = false;
            this._velocity = 2;
        } else if (this._rpm === this._maxRPM - intervalo) {
            this._rpm = this._minRPM;
            this._velocity = 1;
            this._on = true;
            this._off = false;
        }
    }
    turnOff() {
        this._on = false;
        this._off = true;
        this._rpm = 0;
        this._velocity = 0;
    }
}
