exercicio1 = () => {
    let string = document.getElementById("exec1").value;
    let result = string.split("").reverse().join("");

    document.getElementById("result1").innerHTML = result;
}

exercicio2 = () => {
    let string = document.getElementById("exec2").value;
    let result = string.replace(/[aeiou]/gi, (char) => {
        return char.bold();
    });

    document.getElementById("result2").innerHTML = result;
}

exercicio3 = (string = document.getElementById("exec3").value) => {
    let parsedString = string.replace(/[!"#$%&'()*+,-./:;<=>?@0123456789]/g, "");
    parsedString = parsedString.toLowerCase();
    let words = parsedString.split(" ").filter(function(value, index, arr){
        return value !== "";
    });
    let table = words.reduce(function(obj, b) {
        obj[b] = ++obj[b] || 1;
        return obj;
    }, {});
    return table;
}

exercicio3b = () => {
    let string = document.getElementById("exec3").value;
    table = exercicio3(string);
    console.table(table);
    document.getElementById("result3").innerHTML = "Tabela no console";
}

exercicio4 = () => {
    let string = document.getElementById("exec4").value;
    var table = Object.entries(exercicio3(string));
    let control = 0;
    let result = "";
    for(let i = 0; i < table.length; i++){
        if (table[i][1] > control) {
            control = table[i][1];
            result = table[i][0];
        }
    }
    console.table(table);
    document.getElementById("result4").innerHTML = "Palavra de maior ocorrência: " + result + " Vezes: " + control;
}

exercicio5 = () => {
    let string = document.getElementById("exec5t1").value;
    let search = document.getElementById("exec5t2").value;
    let replace = document.getElementById("exec5t3").value;

    let result = string.replace(search, replace);
    document.getElementById("result5").innerHTML = result;
}

exercicio6 = () => {
    let date = new Date(document.getElementById("exec6").value);
    let now = new Date();
    let result = now.getTime() - date.getTime();
    result = Math.ceil(result / (1000 * 3600 * 24)) - 1;

    document.getElementById("result6").innerHTML = result + " dias";
}

exercicio7 = () => {
    let dateString = document.getElementById("exec7").value;
    let array = dateString.split("/"), day = array[0], month = array[1], year = array[2];
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", 
    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let result = day + " de " + months[month-1] + " de " + year;

    document.getElementById("result7").innerHTML = result;
}

exercicio8 = () => {
    let date1 = new Date(document.getElementById("exec8d1").value);
    let date2 = new Date(document.getElementById("exec8d2").value);
    let result = date2.getTime() - date1.getTime();
    result = Math.ceil(result / (1000 * 3600 * 24)) / 7;

    document.getElementById("result8").innerHTML = result + " semanas";
}

exercicio9 = () => {
    let string = document.getElementById("exec9").value;
    let grade = "";
    if (string.match(/[a-z]+/i)) {
        grade = "FRACA";
        if (string.match(/[0-9]+/)) {
            grade = "MODERADA";
            if (string.match(/[!"#$%&'()*+,-./:;<=>?@]+/)) grade = "FORTE";
        }
    }
    document.getElementById("result9").innerHTML = grade;
    if (grade === "FORTE") {
        document.getElementById("result9").style.color = "green";
    }
    if (grade === "MODERADA") {
        document.getElementById("result9").style.color = "orange";
    }
    else {
        document.getElementById("result9").style.color = "red";
    }
    if(document.getElementById("result9").innerHTML === "FORTE"){
        document.getElementById("result9").style.color = "green";
    }
}

exercicio10 = () => {
    let string = document.getElementById("exec10").value;
    const tenis = ["t", "e", "n", "i", "s"];
    const polar = ["p", "o", "l", "a", "r"];
    let result = string.replace(/[tenispolar]/gi, (char) => {
        if(tenis.includes(char)) return polar[tenis.indexOf(char)];
        if(polar.includes(char)) return tenis[polar.indexOf(char)];
    });

    document.getElementById("result10").innerHTML = result;
}