fibonacci = (num) => {
    let j = 0, k = 1, l = 0;
    for (let i = 0; i <= num; i++){
        l = j, j = k, k = l+k;
        console.log(j);
    }
}

fibonacci(100);