const button = document.querySelector("#painike").addEventListener("click", painikefunc);
const paivat = ["Sunnuntai", "Maanatai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"];



function painikefunc() {
    const text = document.querySelector("#viikonpaiva");
    let paiva = new Date().getDay();
    //console.log(paivat);
    text.innerHTML = "Tänään on " + paivat[paiva];
};