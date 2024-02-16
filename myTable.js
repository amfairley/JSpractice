let myTable = [];
let rows = 6;
let columns = 5;
let counter = 0;
for (let y = 0; y < rows; y++) {
    let tempTable = [];
    for (let x = 0; x < columns; x++) {
        counter++;
        tempTable.push(counter);
    }
    myTable.push(tempTable);
}