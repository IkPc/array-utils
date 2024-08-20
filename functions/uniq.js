function uniq(numbers) {
    const unique = [];
    numbers.forEach(i => {
        if(!unique.includes(i)){
            unique.push(i);
        }
    });
    return unique;
};

module.exports = uniq;