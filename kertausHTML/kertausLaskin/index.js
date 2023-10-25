

const btnEventListener = document.querySelectorAll(".button").addEventListener("click", lisaaLaskimeen);
const clearBtn = document.querySelector("#clear").addEventListener("click", clearLaskin);
const yhtasuuriBtn = document.querySelector("#yhtakuin").addEventListener("click", laskeYhteen);

let laskin = document.querySelector("#laskin");
let laskutoimitus = document.querySelector("#select").value;
//console.log(laskutoimitus);

function lisaaLaskimeen() {
    laskin.innerHTML = btnEventListener.value;
}