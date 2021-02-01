function filterOutOdds(...nums) {
    return nums.filter((num) => {
        return num % 2 === 0;
    });
}

function findMin(...nums) {
    return nums.reduce((total, currNum) => {
        return total > currNum ? total = currNum : total = total;
    });
}

function mergeObjects(obj1, obj2) {
    let newObj = {...obj1, ...obj2};
    return newObj;
}

function doubleAndReturnArgs(val1, val2, ...arr) {
    let newVal1 = val1 * 2;
    let newVal2 = val2 * 2;
    return newArray = [...arr, newVal1, newVal2];
}

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let randomNum = Math.random() * items.length;
    let random = Math.round(randomNum);
    let answer = items.filter((value, i, arr) => {
        if (i != random) {
            return value;
        }
    });
    return answer;
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    let newArr = [...array1, array2];
    return newArr;
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    let newObj = {...obj1, ...obj2};
    return newObj;
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}