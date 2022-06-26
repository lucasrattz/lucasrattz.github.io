let i = 0;
let text = 'Welcome, ';

type = () => {
    if (i > text.length) return;
    document.getElementById("welcome").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
}

link = (link) => {
    window.location = link;
}

window.onload = type;