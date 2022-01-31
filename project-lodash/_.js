const _ = {

// Implement _.clamp()
clamp(number,lower,upper) {
    let low = Math.max(number,lower);
    let high = Math.min(low,upper);
    return high
},

// Implement .inRange()
inRange(number,start,end) {
    let startVal = start;
    let endVal = end;
    if (endVal === undefined) {
        endVal = startVal;
        startVal = 0;
    } else if (startVal > endVal) {
        let temp = startVal;
        startVal = endVal;
        endVal = temp;
    };
    if (number < startVal || number >= endVal) {
        return false;
    } else if (number >= startVal && number < endVal) {
        return true;
    }; 
},

// Implement .words()
words(string) {
    let array = string.split(' ');
    return array;
},

// Implement .pad()
pad(string,length) {
    if (string.length >= length) {
        return string;
    };
    let start = Math.floor((length - string.length) / 2);
    let end = length - string.length - start;
    let newString = ' '.repeat(start) + string + ' '.repeat(end);
    return newString;
},

// Implement _.has()
has(obj,key) {
    let keyTest = obj[key];
    if (keyTest === undefined) {
        return false; 
    } else {
        return true;
    }
},

// Implement _.invert()
invert(obj) {
    let swapped = {};
    let values = Object.keys(obj);
    let keys = Object.values(obj);
    for (let i = 0; i < keys.length; i++) {
        swapped[keys[i]] = values[i];
    };
    return swapped;
},

// Implement _.findKey()
findKey(obj,predicate) {
    for (let key in obj) {
        let value = obj[key];
        let pred = predicate(value);
        if (pred) {
            return key
        };
    };
return undefined
},

// Implement _.drop()
drop(array,num) {
    if (num === undefined) {
        array.splice(0,1);
        return array;
    } else {
        while (array.length > num) {
            array.splice(0,num);
            return array;
        }
    };
},

// Implement _.dropWhile()
dropWhile(array,predicate) {
    for (let i in array) {
        let counter = 1;
        while (predicate(array,i,true)) {
            counter += 1;
            break;
        };
    this.drop(array,counter);
    return array;
    };
}, 

// Implement _.chunk()
chunk(array,size) {
    let truffleShuffle = [];
    let count = size; // 2
    if (count === undefined || count === 0) {
        count = 1;
    };
    truffleShuffle.push(array.splice(0, count));
    if (array.length > count) {
        truffleShuffle.push(array.splice(0, count));
    };
    truffleShuffle.push(array); // Goonies never say die! 
    return truffleShuffle;
} 

}; //end of object - no touchie!

// Do not write or modify code below this line.
module.exports = _;