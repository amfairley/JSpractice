let startingString = "This is a list of item: apple, cucumber, onion.";
/* Step 1: Find the location of a semicolon indicating a list */
let startOfList = startingString.indexOf(':');
/* Step 2: Find the end of the string, here it is with a period */
let endOfList = startingString.indexOf('.', startOfList + 1);
/* Step 3: Extract the string */
let listString = startingString.substring(startOfList + 1, endOfList);
/* Step 4: Split it into an array */
let listName = listString.split(',');
/* Tidy up the input */
listName.forEach(function (elmnt, indx, arry) {
    arry[indx] = elmnt.trim();
});