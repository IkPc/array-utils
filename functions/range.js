const min = require('./min.js');
const max = require('./max.js');

function range(numbers) {
    const first = min(numbers);
    const last = max(numbers);
    const add = numbers[2] || 1;
    let rangeNum = [];

    for(let i = first; i < last; i += add){
        rangeNum.push(i);
    }
    return rangeNum;
}

module.exports = range;