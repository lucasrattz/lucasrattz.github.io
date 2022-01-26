primos = () => {
    for (let i = 2; i <= 1000; i++){
        if (primo(i)) console.log(i);
    }
}

primo = (num) => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    if (num === 0 || num === 1) return false;
    return true;
}

primos();