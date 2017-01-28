class GuessingGame {
    constructor() {
        this._max = 0;
        this._min = 0;
        this._current = 0;
    }

    /*set the range*/
    setRange(min, max) {

        if (min > max) {
            /*****swap*****/
            min = min ^ max;
            max = min ^ max;
            min = min ^ max;
            /**************/
        }

        this._min = min;
        this._max = max;
    }

    /*mid-range (suggestion)*/
    guess() {
        this._current = Math.round(this._min + (this._max - this._min) / 2);
        return this._current;
    }

    /*if the number is less*/
    lower() {
        this._max = this._current;
    }

    /*if the number is greater*/
    greater() {
        this._min = this._current;
    }
}

module.exports = GuessingGame;
