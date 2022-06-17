// class DateHelper {
//     constructor(date = new Date()) {
//         if (date instanceof String) {
//             this.date = new Date(date);
//         } else if (date instanceof Date) {
//             this.date = date;
//         } else {
//             console.error('Данный тип не поддерживается');
//         }
//     }
//
//     getFirstDayinYear() {
//         return new Date(this.date.getFullYear(), 0, 1);
//     }
//
//     getLastDayinYear() {
//         return new Date(this.date.getFullYear(), 12, 0)
//     }
//
//     getFirstDayinMonth() {
//         return new Date(this.date.getFullYear(), this.date.getMonth(), 1)
//     }
//
//     getLastDayinMonth() {
//         return new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0)
//     }
// }
//
// const dh = new DateHelper();
// console.log(dh.getFirstDayinYear());
// console.log(dh.getLastDayinYear());
// console.log(dh.getFirstDayinMonth());
// console.log(dh.getLastDayinMonth());

// function fibonachi(digitCount = 0) {
//     const fibArr = [];
//     for (let i = 0; i < digitCount; i++) {
//         if (i === 0 || i === 1) {
//             fibArr.push(i);
//         } else {
//             fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
//         }
//     }
//     return fibArr;
// }
//
// console.log(fibonachi(15));



// function OddDigit(arr) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 !== 0){
//             return false;
//         }
//     }
//     return true;
// }
//
// const arr = [2, 3, 6, 8];
// console.log(OddDigit(arr));

function getNewArray(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 == 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const array = [1,5,10,12,15];

console.log(getNewArray(array));
