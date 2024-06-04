const x = 5;
let result = 0;

console.log('TURA Z IF');

for(let l = 1; l <= x; l++) {
    console.log('result = ' + result + " + " + l);
    result = result + l;
}
console.log(result);

console.log('TURA Z WHILE');

var k = 1;
let resultDwa = 0;
while(k <= x) {
    console.log('result = ' + resultDwa + " + " + k);
    resultDwa = resultDwa + k;
    k++;
}
console.log(resultDwa);