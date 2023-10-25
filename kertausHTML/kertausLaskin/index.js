

const nappaimet = document.querySelectorAll(".button");

let laskin = document.querySelector("#laskin");
let laskutoimitus = document.querySelector("#select");

let ekaNumero = "";
let tokaNumero = "";
let state = false;
let laskutoimitusText = "";

laskutoimitus.onchange = function() {
    if (state) {
        return;
    }
    laskutoimitusText = laskutoimitus.options[laskutoimitus.selectedIndex].text;
    ekaNumero = laskin.value;
    //console.log(laskutoimitusText);
    laskin.value = laskin.value + laskutoimitusText;
    //console.log(ekaNumero);
    state = true;
};

nappaimet.forEach(e => {
    e.addEventListener("click", lisaaLaskimee);
});

function lisaaLaskimee() {
    if (this.innerText == "C") {
        laskin.value = "";
        ekaNumero = "";
        tokaNumero = "";
        state = false;
    } else if (this.innerText == "=") {
        laske()
    } else {
        if (state) {
            tokaNumero += this.innerText;
        }
        laskin.value = laskin.value + this.innerText;
    }
    //console.log(nappaimet)
};

function laske() {
    let ekaNumeroLaskin = Number(ekaNumero);
    let tokaNumeroLaskin = Number(tokaNumero);
    switch (laskutoimitusText) {
        case "+":
            laskin.value = ekaNumeroLaskin + tokaNumeroLaskin;
            break;
        case "-":
            laskin.value = ekaNumeroLaskin - tokaNumeroLaskin;
            break;
        case "/":
            laskin.value = ekaNumeroLaskin / tokaNumeroLaskin;
            break;
        case "*":
            laskin.value = ekaNumeroLaskin * tokaNumeroLaskin;    
    }
}


//console.log(laskutoimitus);

