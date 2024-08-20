function min(numbers) {
    minNum = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] < minNum){
            minNum = numbers[i];
        } else {
            continue;
        }
    }
    return minNum;
}

module.exports = min;