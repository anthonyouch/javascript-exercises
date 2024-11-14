const removeFromArray = function(arr, ...nums) {
    finalArr = [];
    for (val of arr ) {
        let addNum = true;
        for (num of nums) {
            if (val === num) {
                addNum = false;
            }
        }
        if (addNum) {
            finalArr.push(val);
        }
    }
    return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
