// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
function addToZero(array) {
    //iterates through array
    for (let i = 0; i < array.length; i++) {
        //iterates through the array from the current index
        for (let j = i; j < array.length; j++) {
            if (array[i]+array[j] === 0) {
                return true;
            }
        }
    }
    return false;
}

console.log(addToZero(array));

let arv2 = [1,  7, -154, 3, 2];
console.log(addToZero(arv2));