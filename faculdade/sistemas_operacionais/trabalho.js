const fs = require('fs');
const { join } = require('path');
const filename = process.argv[2];

if (process.argv.length < 3) proccess.exit(1);

fs.readFile(filename, 'utf8', (err, data) => { 
    if(err) throw err;
    
    const registerSize = data.split(" ")[0];
    const pages = data.split(" ")[1].split(/\r?\n/)[0];
    const bits = data.split(" ")[1].split(/\r?\n/);
    bits.shift();                             


    let output = bits;
    let final = [];

    for(let i = pages - 1; i >= 0; --i) {
        for(let j = 0; j < registerSize; ++j) {
            final[i] += output[j].charAt(i);
        }
        final[i] = final[i].split("undefined")[1].split("").reverse().join("");
    }

    for(i in final) console.log(final[i]);
});
