function Digimon(Name, Level, Image ) {
    this.name = Name;
    this.level = Level;
    this.image = Image;
}

async function getData() {
    const response = await fetch("https://digimon-api.vercel.app/api/digimon");
    let dataAsJson = response.json();
    return dataAsJson;
}   

let allData = [];
getData().then(data => {
    for (let i = 0; i < 20; i++) {
        const element = data[i];
        displayData(element);
    }
});

function displayData(data) {
    
    let cardDiv = document.querySelector("main .container");
    let card = document.createElement("div");
    cardDiv.appendChild(card);
    card.classList.add("card")

    let cardImg = document.createElement("div");
    cardImg.classList.add("image")
    card.appendChild(cardImg);

    let cardText = document.createElement("div");
    cardText.classList.add("text")
    card.appendChild(cardText);

    let img = document.createElement("img");
    img.setAttribute("src", data.img);
    cardImg.appendChild(img);
    console.log(cardImg);

    let nameText = document.createElement("h3");
    nameText.textContent = data.name;
    cardText.appendChild(nameText);

    let idText = document.createElement("p");
    idText.textContent = `Level is ${data.level}`
    cardText.appendChild(idText);
}
