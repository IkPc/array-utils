const min = require('./functions/min.js');
const max = require('./functions/max.js');
const range = require('./functions/range.js');
const zip = require('./functions/zip.js');
const uniq = require('./functions/uniq.js');
const sortNum = require('./functions/sortNum.js');

//data
const testsData = [
    [1,5,6,3,9],
    [4,7,-5,10,2],
    [7,7,9,7,50],
];
const testRange = [
    [0,10],
    [1,11],
    [0, 30, 5],
];
const testZipData = [
    ["moe", "larry", "curly"],
    [30, 40, 50],
    [true, false, false]
];

//min test
testsData.forEach((tests) => {
    console.log(`min: ${min(tests)}`);
});
console.log('')

//max test
testsData.forEach((tests) => {
    console.log(`max: ${max(tests)}`);
});
console.log('')

//range test
testRange.forEach((tests) => {
    console.log(`range: ${range(tests)}`);
});
console.log('')

//zip test
console.log(`zip: ${zip(...testZipData)}`);
console.log('')

//uniq test
testsData.forEach((tests) => {
    console.log(`uniq: ${uniq(tests)}`);
});
console.log('')

//sortNum test
testsData.forEach((tests) => {
    console.log(`sortNum: ${sortNum(tests)}`);
});