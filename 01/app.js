const randomNumber = Math.round(Math.random() * 20);
console.log(randomNumber);

if(randomNumber < 5) {
    console.log('Wylosowana liczba jest zbyt mała, aby użyć pętli');
}
else if(randomNumber >= 5) {
    for(let l = randomNumber; l <= randomNumber + 5; l++) {
        console.log(l);
    }
}
