/* ================================================= */
/* TAMMALAHTIROCK v3 */
/* SCRIPT.JS */
/* ================================================= */

/* ================================================ */
/* SIVUJEN VAIHTO */
/* ================================================ */

function showPage(pageId){

    const pages=document.querySelectorAll(".page");

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    document
        .getElementById(pageId)
        .classList.add("active");

}

/* ================================================ */
/* FESTARINIMET */
/* ================================================ */

const festivalNames=[

    "DJ Hyttyskeisari",
    "Lady Glitter",
    "Kapteeni Crocs",
    "Metsädisko",
    "MC Makkara",
    "DJ Nuotio",
    "Sähköorava",
    "Rokkikauris",
    "Bassikarhu",
    "Diskopeura",
    "Glitter-Guru",
    "Hyttysvelho",
    "Saunashamaani",
    "Metsäbasso",
    "Rumpukarhu",
    "DJ Tammilahti"

];

/* ================================================ */
/* LEIMAT */
/* ================================================ */

const defaultStamps=[

    "📸",
    "🎲",
    "✨"

];

/* ================================================ */
/* PASSIN LUONTI */
/* ================================================ */

function createPassport(){

    const input=document.getElementById("playerName");

    const realName=input.value.trim();

    if(realName===""){

        alert("Kirjoita etunimesi.");

        return;

    }

    const festivalName=

        festivalNames[
            Math.floor(
                Math.random()*festivalNames.length
            )
        ];

    const id=

        Math.floor(
            100+
            Math.random()*900
        );

    const passport={

        realName,

        festivalName,

        id,

        stamps:defaultStamps

    };

    localStorage.setItem(

        "tammalahtiPassport",

        JSON.stringify(passport)

    );

    renderPassport();

}

/* ================================================ */
/* PASSIN PIIRTO */
/* ================================================ */

function renderPassport(){

    const card=

        document.getElementById("passportCard");

    const saved=

        localStorage.getItem(

            "tammalahtiPassport"

        );

    if(!saved){

        card.innerHTML="";

        return;

    }

    const passport=

        JSON.parse(saved);

    let stampHTML="";

    passport.stamps.forEach(stamp=>{

        stampHTML+=`

            <div class="stamp">

                ${stamp}

            </div>

        `;

    });

    card.innerHTML=`

        <div class="passport">

            <h3>

                ${passport.festivalName}

            </h3>

            <p>

                ${passport.realName}

            </p>

            <div class="passport-id">

                Festaripassi #${passport.id}

            </div>

            <div class="stamp-container">

                ${stampHTML}

            </div>

        </div>

    `;

    document.getElementById(

        "welcomeMessage"

    ).innerHTML=

        "Tervetuloa takaisin, <strong>"+

        passport.festivalName+

        "</strong>!";

}
/* ================================================= */
/* ALUEKARTTA */
/* ================================================= */

const locations = {

    stage: {

        title: "🎤 Päälava",

        text:
            "Illan pääesiintyjä aloittaa klo 20.00."

    },

    photo: {

        title: "📸 Valokuvakoju",

        text:
            "Ota kuva kavereiden kanssa. Kuvat ilmestyvät myöhemmin galleriaan."

    },

    glitter: {

        title: "✨ Glitter- & tatuointipaja",

        text:
            "Koristele kasvosi glitterillä tai ota väliaikainen festaritatuointi."

    },

    destiny: {

        title: "🎲 Kohtalon Koju",

        text:
            "Paina nappia ja kohtalo määrää seuraavan tehtäväsi."

    }

};

function showLocation(id){

    const info=document.getElementById("mapInfo");

    if(!locations[id]){

        info.innerHTML="Valitse kohde.";

        return;

    }

    info.innerHTML=

        "<h3>"+locations[id].title+"</h3>" +

        "<p>"+locations[id].text+"</p>";

}

/* ================================================= */
/* FEIKKIUUTISET */
/* ================================================= */

const newsList=[

"🦟 Hyttyset julistivat VIP-alueen omakseen.",

"🎸 Bändi lupasi vielä yhden ylimääräisen kappaleen.",

"🔥 Nuotiolla epäillään syntyneen uusi makkaranpaistoennätys.",

"✨ Glitterivarasto pienenee huolestuttavaa vauhtia.",

"📸 Valokuvakoju etsii illan parasta poseerausta.",

"🎲 Kohtalon Koju raportoi poikkeuksellisen rohkeita osallistujia.",

"🌲 Metsä hyväksyi tämän vuoden festarit virallisesti.",

"🎤 Soundcheck kuului naapurikuntaan asti.",

"🥳 Tunnelma nousi juuri uudelle tasolle.",

"🍺 Kadonnut juomatölkki löytyi nuotion vierestä.",

"🕺 Ilmakitarakilpailun taso yllätti tuomariston.",

"🎶 Yleisö lauloi mukana jo ennen ensimmäistä kappaletta.",

"🍔 Grillimestari pyysi työrauhaa.",

"🦉 Pöllö seurasi keikkaa eturivistä.",

"🌧️ Sää päätti olla festarien puolella."

];

let currentNews=0;

function rotateNews(){

    const box=

        document.getElementById("newsContainer");

    if(!box) return;

    box.innerHTML=newsList[currentNews];

    currentNews++;

    if(currentNews>=newsList.length){

        currentNews=0;

    }

}

/* ================================================= */
/* AUTOMAATTINEN UUTISKIERTO */
/* ================================================= */

setInterval(

    rotateNews,

    30000

);

/* ================================================= */
/* ENSIMMÄINEN UUTINEN */
/* ================================================= */

rotateNews();
/* ================================================= */
/* KOHTALON KOJU */
/* ================================================= */

const destinyTasks = [

"📸 Ota selfie lähimmän festarikaverin kanssa.",
"🌲 Käy halaamassa puuta.",
"🎸 Soita 15 sekunnin ilmakitarasoolo.",
"😂 Kerro huonoin vitsisi kolmelle ihmiselle.",
"✨ Käy hakemassa glitteriä.",
"👏 Anna aplodit ensimmäiselle vastaantulijalle.",
"🍔 Käy tervehtimässä grillimestaria.",
"🎤 Laula kertosäettä seuraavasta biisistä.",
"🤘 Tee rockmerkki seuraavaan valokuvaan.",
"😁 Hymyile seuraavat kaksi minuuttia.",
"🕺 Tanssi 30 sekuntia.",
"🧍 Seiso kuin turvamies 20 sekuntia.",
"🎩 Kävele kuin rocktähti seuraavaan kojuun.",
"🤝 Esittäydy ihmiselle, jota et vielä tunne.",
"🎲 Pyydä jotakuta arpomaan kohtalo puolestasi.",
"🔥 Käy nuotiolla.",
"📸 Ota maisemakuva festarialueesta.",
"🎵 Arvaa seuraavan kappaleen nimi.",
"🍻 Kilistä juomaa jonkun kanssa.",
"🦟 Hätistele kuvitteellisia hyttysiä 10 sekuntia."

];

let previousTask = -1;

function drawDestiny(){

    let index;

    do{

        index = Math.floor(Math.random()*destinyTasks.length);

    }while(index===previousTask && destinyTasks.length>1);

    previousTask=index;

    document.getElementById("destinyCard").innerHTML=

        "<strong>"+destinyTasks[index]+"</strong>";

}

/* ================================================= */
/* GALLERIAN VALMIUS */
/* ================================================= */

function loadGallery(){

    const gallery=document.getElementById("galleryGrid");

    if(!gallery) return;

    const photos=JSON.parse(localStorage.getItem("gallery") || "[]");

    if(photos.length===0){

        return;

    }

    gallery.innerHTML="";

    photos.forEach(photo=>{

        const img=document.createElement("img");

        img.src=photo;

        img.className="gallery-image";

        gallery.appendChild(img);

    });

}

/* ================================================= */
/* LEIMAT */
/* ================================================= */

function addStamp(icon){

    const saved=localStorage.getItem("tammalahtiPassport");

    if(!saved) return;

    const passport=JSON.parse(saved);

    if(!passport.stamps.includes(icon)){

        passport.stamps.push(icon);

    }

    localStorage.setItem(

        "tammalahtiPassport",

        JSON.stringify(passport)

    );

    renderPassport();

}

/* ================================================= */
/* SOVELLUKSEN KÄYNNISTYS */
/* ================================================= */

document.addEventListener("DOMContentLoaded",()=>{

    renderPassport();

    loadGallery();

    showPage("home");

});
