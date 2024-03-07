let arr = [];
for (i = 0; i < 21; i = i + 2) {
    arr.push(i);
}
console.log(arr);
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
for (let number of arr) {
    console.log(number);
}