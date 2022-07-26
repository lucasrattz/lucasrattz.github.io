const fs = require('fs');
const filename = process.argv[2];

if (process.argv.length < 3) proccess.exit(1);

fs.readFile(filename, 'utf8', (err, data) => { 
    if(err) throw err;
    
    const registerSize = data.split(" ")[0];
    const pages = data.split(" ")[1].split(/\r?\n/)[0];
    let bits = data.split(" ")[1].split(/\r?\n/);
    bits.shift();

    let final = [];
    if(bits.length > registerSize) bits.splice(0, bits.length - registerSize);

    for(let i = pages - 1; i >= 0; --i) {
        for(let j = 0; j < registerSize; ++j) {
            final[i] += bits[j].charAt(i);
        }
        final[i] = final[i].split("undefined")[1].split("").reverse().join("");
    }
    
    for(let i = 0; i < final.length - 1; ++i) console.log(final[i]);
    process.stdout.write(final[final.length - 1]);
});
