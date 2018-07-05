export class HP {
    constructor(maxhp = 100, shield = 20) {
        this._shield = shield;
        this._alive = true;
        this._maxhp = maxhp;
        this._hp = this._maxhp;
    }
    get maxhp() {
        return this._maxhp;
    }
    get shield() {
        return this._shield;
    }
    get hp() {
        return this._hp;
    }
    get alive() {
        return this._alive;
    }

    damage(x) {
        const hplost = (this._hp + this._shield) - x;
        if (this._alive === false || x <= 0) {
            return null;
        }
        if (hplost <= 0) {
            this._alive = false;
            this._shield = 0;
            this._hp = 0;
            // console.log(this._hp + ' 1');
            return null;
        }
        if (x <= this._shield) {
            this._shield -= x;
            // console.log(this._hp + ' 2');
            return null;
        }
        if (x > this._shield) {
            this._hp = hplost;
            this._shield = 0;
            // console.log(this._hp + ' 3');
            return null;
        }
    }

    rechargeShield(x) {
        if (this._alive === false || x < 0) {
            return null;
        }
        this._shield += x;
    }

    heal(x) {
        if (this._alive === false || x <= 0) {
            return null;
        }
        if (x + this._hp > this._maxhp) {
            this._hp = this.maxhp;
        }
        if (x + this._hp <= this._maxhp) {
            this._hp += x;
        }
    }
}
