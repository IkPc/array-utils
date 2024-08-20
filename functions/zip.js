function zip(names, ages, booleans) {
    let obj = [];
    
    for(let i = 0; i < ages.length; i++) {
        let objChild = [];

        objChild.push(names[i]);
        objChild.push(ages[i]);
        booleans != null ? objChild.push(booleans[i]) : null;
        obj.push(objChild);
    }
    return obj;
}

console.log();

module.exports = zip;