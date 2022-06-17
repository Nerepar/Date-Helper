class DateHelper {
    constructor(date = new Date()) {
        if (date instanceof String) {
            this.date = new Date(date);
        } else if (date instanceof Date) {
            this.date = date;
        } else {
            console.error('Данный тип не поддерживается');
        }
    }

    getFirstDayinYear() {
        return new Date(this.date.getFullYear(), 0, 1);
    }

    getLastDayinYear() {
        return new Date(this.date.getFullYear(), 12, 0)
    }

    getFirstDayinMonth() {
        return new Date(this.date.getFullYear(), this.date.getMonth(), 1)
    }

    getLastDayinMonth() {
        return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0)
    }
}

const dh = new DateHelper();
console.log(dh.getFirstDayinYear());
console.log(dh.getLastDayinYear());
console.log(dh.getFirstDayinMonth());
console.log(dh.getLastDayinMonth());