fatorial = (num) => {
    if (num === 0 || num === 1) console.log('1');
    if (num < 0){
        console.log('Valor inválido');
        return;
    }
    for (let i = num - 1; i > 0; i--) {
        num *= i;
    }
    console.log(num);
}

fatorial(12);