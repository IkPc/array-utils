function max(numbers)  {
    maxNum = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > maxNum) {
            maxNum = numbers[i];
        } else {
            continue;
        }
    }
    return maxNum;
}

module.exports = max;