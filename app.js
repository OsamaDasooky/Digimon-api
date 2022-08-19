function Digimon(Name, Level, Image ) {
    this.name = Name;
    this.level = Level;
    this.image = Image;
}
let allData = [];
const nameBtm = document.getElementById("btm-Name");
const nameValue = document.getElementById("valueName");
nameBtm.addEventListener("click", function () {
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${nameValue.value.trim()}`)
        .then(response => response.json())
        .then(data => {
            // console.log(allData);
            for (let i = 0; i < data.length ; i++) {
                const newDigimon = new Digimon(data[i].name, data[i].level, data[i].img);
                allData.push(newDigimon)
                displayData(data[i])//create the card for each element
            }
            console.log(document.getElementsByClassName("card"));
    })
})
const levelBtm = document.getElementById("btm-Level");
const valueLevel = document.getElementById("valueLevel");
levelBtm.addEventListener("click", function () {
    fetch(`https://digimon-api.vercel.app/api/digimon/level/${valueLevel.value.trim()}`)
        .then(response => response.json())
        .then(data => {
            allData.splice(0);
            // console.log(allData);
            for (let i = 0; i < data.length ; i++) {
                const newDigimon = new Digimon(data[i].name, data[i].level, data[i].img);
                allData.push(newDigimon)
                displayData(data[i])//create the card for each element
            }
            console.log(document.getElementsByClassName("card"));
    })
})
const getBtn = document.getElementById("get");
getBtn.addEventListener("click" , getData)
function getData() {
    fetch("https://digimon-api.vercel.app/api/digimon")
        .then(response => response.json())
        .then((data) => {
            for (let i = 0; i < 20; i++) {
                const newDigimon = new Digimon(data[i].name, data[i].level, data[i].img);
                allData.push(newDigimon)
                displayData(data[i])//create the card for each element
            }
        })
    
}
function displayData(data) {
    
    let cardDiv = document.querySelector("main .container");
    let card = document.createElement("div");
    cardDiv.appendChild(card);
    card.classList.add("card");
    
    let cardImg = document.createElement("div");
    cardImg.classList.add("image")
    card.appendChild(cardImg);

    let cardText = document.createElement("div");
    cardText.classList.add("text")
    card.appendChild(cardText);
    
    let img = document.createElement("img");
    img.setAttribute("src", data.img);
    cardImg.appendChild(img);
    
    let nameText = document.createElement("h3");
    nameText.textContent = data.name;
    cardText.appendChild(nameText);
    
    let idText = document.createElement("p");
    idText.textContent = `Level is ${data.level}`
    cardText.appendChild(idText);
}
// async function getData() {
//     const response = await fetch("https://digimon-api.vercel.app/api/digimon");
//     let dataAsJson = response.json();
//     return dataAsJson;
// }   


// getData().then(data => {
//     for (let i = 0; i < 20; i++) {
//         const element = data[i];
//         displayData(element);
//     }
// });
