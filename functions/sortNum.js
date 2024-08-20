function sortNum(numbers) {
    let result = numbers.sort((a, b) => a - b);
    return result;
}

module.exports = sortNum;