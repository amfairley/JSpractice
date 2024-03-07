let arrayOne = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];
let newArray = [];
let i = 0;
do {
    let indexNumber = arrayOne.indexOf(1, i);
    if (indexNumber >= 0) {
        newArray.push(arrayOne[indexNumber]);
    }
    i = indexNumber;
} while (i !== -1);
console.log(newArray);