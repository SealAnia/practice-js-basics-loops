const x = 10;
let iteration = 0;
let randomNumber = -1;

while(randomNumber != x) {
    randomNumber = Math.round(Math.random() * 20);
    console.log(randomNumber);
    iteration++;
}
console.log('Pętla wywołana ' + iteration + " razy.");