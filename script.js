let houses = 0;
let stores = 0;
let money = 100000;
let population = 0;
let framecount = 0;
let maxpopulation = 0;
let maxpopulationmultiplier = 3;
let economymultiplier = 1;
let levelofhouse = 1;
let houseprice = 500;
let storeprice = 800;
let factprice = 1200;
let levelofeconomy = 1;
let leveloftech = 1;
let pricetoupgradehousing = 30000;
let pricetoupgradeeconomy = 40000;
let pricetoupgradetech = 35000;
let factories = 0;

const moneyEl = document.getElementById("money");
const storesEl = document.getElementById("stores");
const housesEl = document.getElementById("houses");
const populatonEl = document.getElementById("population");
const maxpopulationEl = document.getElementById("boliger");
const dawg = document.getElementById("zawg");
const housepriceEl = document.getElementById("houseprice");
const factoriesEl = document.getElementById("factory");
const storepriceEl = document.getElementById("storeprice");
const factpriceEl = document.getElementById("factprice");
const citynameEl = document.getElementById("namecity");

function saveCity() {
  const cityname = document.getElementById("citynameinput").value.trim();
  if (cityname) {
    localStorage.setItem("cityname", cityname);
  }
}

function buyhouse() {
  if (money > 500) {
    houses++;
    money = money - 500;
    maxpopulation = maxpopulation + maxpopulationmultiplier;
  }

  maxpopulationEl.textContent = maxpopulation;
  moneyEl.textContent = money;
  housesEl.textContent = houses;
}

function sellhouse() {
  if (houses > 0) {
    houses--;
    money = money + houseprice / 2;
    maxpopulation = maxpopulation - maxpopulationmultiplier;
  }

  maxpopulationEl.textContent = maxpopulation;
  moneyEl.textContent = money;
  housesEl.textContent = houses;
}

function buystore() {
  if (money > 800) {
    money = money - 800;
    stores++;
    storesEl.textContent = stores;
  }
}

function sellstore() {
  if (stores > 0) {
    stores--;
    money = money + 400;
  }

  storesEl.textContent = stores;
}

function buyfactory() {
  if (money > 1200) {
    money = money - 1200;
    factories++;
    factoriesEl.textContent = factories;
  }
}

function sellfactory() {
  if (factories > 0) {
    factories--;
    money = money + 800;
  }

  factoriesEl.textContent = factories;
}

function upgradehousing() {
  if (money > pricetoupgradehousing && levelofhouse < 4) {
    document.getElementById("upgrade2").style.backgroundColor = "#78d0ff";
    maxpopulationmultiplier = maxpopulationmultiplier + 1;
    levelofhouse++;
    money = money - 30000;
    slime.textContent = levelofhouse;
    pricetoupgradehousing = pricetoupgradehousing * 1.4;
    document.getElementById("price2").textContent = pricetoupgradehousing;
  } else {
    document.getElementById("upgrade2").style.backgroundColor = "#31586dff";
  }
}

function upgradeeconomy() {
  if (money > pricetoupgradeeconomy && levelofeconomy < 8) {
    economymultiplier = economymultiplier + 1.5;
    money = money - pricetoupgradeeconomy;
    levelofeconomy++;
    document.getElementById("phant").textContent = levelofeconomy;
    pricetoupgradeeconomy = pricetoupgradeeconomy * 1.4;
    document.getElementById("price1").textContent = pricetoupgradeeconomy;
  }
}

function upgradetech() {
  if (money > pricetoupgradetech && leveloftech < 6) {
    houseprice = houseprice - 50;
    storeprice = storeprice - 60;
    factprice = factprice - 60;
    money = money - pricetoupgradetech;
    leveloftech++;
    document.getElementById("telipeni").textContent = leveloftech;
    pricetoupgradetech = pricetoupgradetech * 1.4;
    document.getElementById("price3").textContent = pricetoupgradetech;
  }
}

function melding(text) {
  const messages = document.getElementById("messages");
  const msg = document.createElement("p");
  msg.textContent = "> " + text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function update() {
  framecount++;
  moneyEl.textContent = money;
  housesEl.textContent = houses;
  housepriceEl.textContent = houseprice;
  storepriceEl.textContent = storeprice;
  factpriceEl.textContent = factprice;

  if (money > pricetoupgradehousing && levelofhouse < 4) {
    document.getElementById("upgrade2").style.backgroundColor = "#78d0ff";
  } else {
    document.getElementById("upgrade2").style.backgroundColor = "#31586dff";
  }

  if (money > pricetoupgradeeconomy && levelofeconomy < 8) {
    document.getElementById("upgrade1").style.backgroundColor = "#78d0ff";
  } else {
    document.getElementById("upgrade1").style.backgroundColor = "#31586dff";
  }

  if (money > pricetoupgradetech && leveloftech < 8) {
    document.getElementById("upgrade3").style.backgroundColor = "#78d0ff";
  } else {
    document.getElementById("upgrade3").style.backgroundColor = "#31586dff";
  }

  if (levelofhouse == 4) {
    slime.textContent = "MAX";
  }

  if (levelofeconomy == 8) {
    document.getElementById("phant").textContent = "MAX";
  }

  if (population > maxpopulation) {
    populatonEl.style.color = "#ff0000ff";
  } else {
    populatonEl.style.color = "#1aff00ff";
  }

  if (framecount % 60 == 0) {
    population++;
    populatonEl.textContent = population;
    if (population > maxpopulation * 2) {
      money = money - population;
      population--;
    }
  }

  if (framecount % 1800 == 0) {
    let news = Math.floor(Math.random() * 9);
    if (news == 1) {
      melding("Du får økt budsjett fra staten");
      money = money * 1.7;
    }
    if (news == 2) {
      melding("Terror angrep, befolkning minsker med 10");
      population = population - 10;
    }
    if (news == 3) {
      melding("Økonomi-crash");
      money = money - money / 2;
    }
    if (news == 4) {
      melding("Økonomi-boom");
      money = money * 2;
    }
    if (news == 5) {
      melding("Et hus brenner ned");
      houses = houses - 1;
      maxpopulation = maxpopulation - maxpopulationmultiplier;
    }
    if (news == 6) {
      melding("Du må bygge en ny vei som tar 10% av pengene");
      money = money - money / 10;
    }
    if (news == 7) {
      melding("Flere innvandrere bosetter seg i byen, befolkning øker");
      population = population + 40;
    }
    if (news == 8) {
      melding("En butikk går konkurs");
      population = population - 1;
    }
    if (news == 9) {
      melding("Folk har mer sex, befolkning øker");
      population = population + 20;
    }
  }

  if (framecount % 30 == 0) {
    if (stores > 0) {
      money = money + stores * 40 * economymultiplier;
    }

    if (factories > 0) {
      money = money + factories * 80 * economymultiplier;
    }
  }

  requestAnimationFrame(update);
}

requestAnimationFrame(update);
