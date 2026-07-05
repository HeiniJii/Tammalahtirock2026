// ==============================
// TAMMALAHTIROCK
// script.js
// ==============================

// ------------------------------
// Sivujen navigointi
// ------------------------------
function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const page = document.getElementById(pageId);

    if(page){
        page.classList.add("active");
    }

}

// ------------------------------
// Kartan infolaatikko
// ------------------------------
function showInfo(title, text){

    const info = document.getElementById("mapInfo");

    if(!info) return;

    info.innerHTML = `
        <h3>${title}</h3>
        <p>${text}</p>
    `;

}

// ------------------------------
// Festarinimen generointi
// ------------------------------

const firstWords = [

    "DJ",
    "Kapteeni",
    "Lady",
    "Tohtori",
    "Herra",
    "Glitter",
    "Disko",
    "Metsän",
    "Yövuoron",
    "Kuningas"

];

const secondWords = [

    "Crocs",
    "Keisari",
    "Noita",
    "Velho",
    "Hyttynen",
    "Kimallus",
    "Tölkki",
    "Makkara",
    "Ninja",
    "Basso"

];

function randomFestivalName(){

    const first =
        firstWords[Math.floor(Math.random()*firstWords.length)];

    const second =
        secondWords[Math.floor(Math.random()*secondWords.length)];

    return first + " " + second;

}

// ------------------------------
// Passin luonti
// ------------------------------

function createPassport(){

    const input = document.getElementById("playerName");

    if(!input){

        return;

    }

    const realName = input.value.trim();

    if(realName === ""){

        alert("Kirjoita etunimesi.");

        return;

    }

    let passport = {

        realName: realName,

        festivalName: randomFestivalName(),

        id: Math.floor(100 + Math.random()*900),

        stamps: []

    };

    localStorage.setItem(
        "tammalahtirock-passport",
        JSON.stringify(passport)
    );

    renderPassport();

}

// ------------------------------
// Passin näyttäminen
// ------------------------------

function renderPassport(){

    const holder =
        document.getElementById("passportCard");

    if(!holder){

        return;

    }

    const saved =
        localStorage.getItem("tammalahtirock-passport");

    if(saved === null){

        holder.innerHTML =
        "<p>Passia ei ole vielä luotu.</p>";

        return;

    }

    const passport = JSON.parse(saved);

    let stampsHTML = "";

    if(passport.stamps.length === 0){

        stampsHTML =
        "<p>Ei vielä leimoja.</p>";

    }

    else{

        passport.stamps.forEach(stamp=>{

            stampsHTML += `
                <li>${stamp}</li>
            `;

        });

        stampsHTML =
        `<ul>${stampsHTML}</ul>`;

    }

    holder.innerHTML = `

        <div class="card">

            <h2>${passport.festivalName}</h2>

            <p>
                <strong>Nimi:</strong>
                ${passport.realName}
            </p>

            <p>
                <strong>Festarinumero:</strong>
                #${passport.id}
            </p>

            <hr>

            <h3>Leimat</h3>

            ${stampsHTML}

        </div>

    `;

}

// ------------------------------
// Leiman lisääminen
// ------------------------------

function addStamp(stamp){

    const saved =
        localStorage.getItem("tammalahtirock-passport");

    if(saved === null){

        return;

    }

    const passport = JSON.parse(saved);

    if(!passport.stamps.includes(stamp)){

        passport.stamps.push(stamp);

    }

    localStorage.setItem(

        "tammalahtirock-passport",

        JSON.stringify(passport)

    );

    renderPassport();

}

// ------------------------------
// QR-parametrin tarkistus
// ------------------------------

function checkStampFromURL(){

    const params =
        new URLSearchParams(window.location.search);

    const stamp =
        params.get("stamp");

    if(!stamp){

        return;

    }

    switch(stamp){

        case "kuva":

            addStamp("📸 Valokuvakoju");

            break;

        case "glitter":

            addStamp("✨ Glitteri- & tatuointipaja");

            break;

        case "kohtalo":

            addStamp("🎲 Kohtalon Koju");

            break;

    }

    history.replaceState(
        {},
        "",
        window.location.pathname
    );

}

// ------------------------------
// Käynnistys
// ------------------------------

document.addEventListener("DOMContentLoaded", () => {

    renderPassport();

    checkStampFromURL();

});