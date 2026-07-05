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

const defaultStamps=[];

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
/* ================================================= */
/* QR-LEIMAT */
/* ================================================= */

function handleQRStamp(){

    const params = new URLSearchParams(window.location.search);

    const stamp = params.get("stamp");

    if(!stamp) return;

    const icons = {

        photo: "📸",

        glitter: "✨",

        destiny: "🎲"

    };

    if(icons[stamp]){

        addStamp(icons[stamp]);

        alert("Leima lisätty festaripassiin!");

    }

    window.history.replaceState({}, document.title, window.location.pathname);

}

handleQRStamp();
/* ================================================= */
/* VALOKUVAKOJU */
/* ================================================= */

let cameraStream = null;
let capturedImage = null;

async function startCamera() {

    try {

        cameraStream = await navigator.mediaDevices.getUserMedia({

            video: {
                facingMode: "environment"
            },

            audio: false

        });

        const video = document.getElementById("camera");

        video.srcObject = cameraStream;

        video.play();

    } catch (err) {

        alert("Kameran käynnistäminen epäonnistui.");

        console.error(err);

    }

}

function takePhoto() {

    const video = document.getElementById("camera");

    const canvas = document.getElementById("photoCanvas");

    const preview = document.getElementById("photoPreview");

    canvas.width = video.videoWidth;

    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(video, 0, 0);

    capturedImage = canvas.toDataURL("image/jpeg", 0.9);

    preview.src = capturedImage;

    preview.style.display = "block";

}

async function uploadPhoto() {

    if (!capturedImage) {

        alert("Ota ensin kuva.");

        return;

    }

    const blob = await (await fetch(capturedImage)).blob();

    const formData = new FormData();

    formData.append("file", blob);

    formData.append("upload_preset", "Tammalahtirock");

    try {

        const response = await fetch(

            "https://api.cloudinary.com/v1_1/ytv9w3o4/image/upload",

            {

                method: "POST",

                body: formData

            }

        );

        const result = await response.json();

        if (result.secure_url) {

            alert("📸 Kuva ladattu onnistuneesti!");

            savePhotoToGallery(result.secure_url);

        } else {

            alert("Lataus epäonnistui.");

            console.log(result);

        }

    } catch (err) {

        console.error(err);

        alert("Virhe kuvan lähettämisessä.");

    }

}

function savePhotoToGallery(url) {

    let gallery = JSON.parse(

        localStorage.getItem("gallery") || "[]"

    );

    gallery.unshift(url);

    localStorage.setItem(

        "gallery",

        JSON.stringify(gallery)

    );

    loadGallery();

}
