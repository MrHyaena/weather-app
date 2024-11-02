import { getData } from "./backend";

export function createDom() {
  const showCity = document.querySelector("#showCity");
  const city = document.querySelector("#city");
  let cityValue = "Prague";
  city.value = "Prague";
  let elementIndex = 0;
  setTemperature(cityValue);

  showCity.addEventListener("click", () => {
    elementIndex = 0;
    cityValue = city.value;
    setTemperature(cityValue);
  });

  const tempBtn = document.querySelector("#temp");
  const windBtn = document.querySelector("#wind");
  const wetBtn = document.querySelector("#wet");
  const pressBtn = document.querySelector("#press");

  tempBtn.addEventListener("click", () => {
    elementIndex = 0;
    setTemperature(cityValue);
  });

  windBtn.addEventListener("click", () => {
    elementIndex = 1;
    setWind(cityValue);
  });

  wetBtn.addEventListener("click", () => {
    elementIndex = 2;
    setHum(cityValue);
  });

  pressBtn.addEventListener("click", () => {
    elementIndex = 3;
    setPress(cityValue);
  });
}

function setTemperature(cityValue) {
  getData(cityValue)
    .then((data) => changeDisplayData(data))
    .then((data) => changeDomDay(data))
    .then((data) => changeDaysDataTemp(data));
}

function setWind(cityValue) {
  getData(cityValue)
    .then((data) => changeDisplayData(data))
    .then((data) => changeDomDay(data))
    .then((data) => changeDaysDataWind(data));
}

function setHum(cityValue) {
  getData(cityValue)
    .then((data) => changeDisplayData(data))
    .then((data) => changeDomDay(data))
    .then((data) => changeDaysDataHum(data));
}
function setPress(cityValue) {
  getData(cityValue)
    .then((data) => changeDisplayData(data))
    .then((data) => changeDomDay(data))
    .then((data) => changeDaysDataPress(data));
}

async function changeDaysDataTemp(data) {
  // TEMP Data for each day

  let daysSymbol = document.getElementsByClassName("symbol");
  console.log(daysSymbol);

  for (let i = 0; i < 7; i++) {
    daysSymbol[i].textContent = " c";
  }

  const dataOne = document.querySelector("#dataOne");
  dataOne.textContent = data.days[0].temp;

  const dataTwo = document.querySelector("#dataTwo");
  dataTwo.textContent = data.days[1].temp;

  const dataThree = document.querySelector("#dataThree");
  dataThree.textContent = data.days[2].temp;

  const dataFour = document.querySelector("#dataFour");
  dataFour.textContent = data.days[3].temp;

  const dataFive = document.querySelector("#dataFive");
  dataFive.textContent = data.days[4].temp;

  const dataSix = document.querySelector("#dataSix");
  dataSix.textContent = data.days[5].temp;

  const dataSeven = document.querySelector("#dataSeven");
  dataSeven.textContent = data.days[6].temp;

  return data;
}

async function changeDaysDataWind(data) {
  // WIND Data for each day

  let daysSymbol = document.getElementsByClassName("symbol");
  console.log(daysSymbol);

  for (let i = 0; i < 7; i++) {
    daysSymbol[i].textContent = " m/s";
  }

  const dataOne = document.querySelector("#dataOne");
  dataOne.textContent = data.days[0].windspeed;

  const dataTwo = document.querySelector("#dataTwo");
  dataTwo.textContent = data.days[1].windspeed;

  const dataThree = document.querySelector("#dataThree");
  dataThree.textContent = data.days[2].windspeed;

  const dataFour = document.querySelector("#dataFour");
  dataFour.textContent = data.days[3].windspeed;

  const dataFive = document.querySelector("#dataFive");
  dataFive.textContent = data.days[4].windspeed;

  const dataSix = document.querySelector("#dataSix");
  dataSix.textContent = data.days[5].windspeed;

  const dataSeven = document.querySelector("#dataSeven");
  dataSeven.textContent = data.days[6].windspeed;

  return data;
}

async function changeDaysDataHum(data) {
  // WET Data for each day

  let daysSymbol = document.getElementsByClassName("symbol");
  console.log(daysSymbol);

  for (let i = 0; i < 7; i++) {
    daysSymbol[i].textContent = " %";
  }

  const dataOne = document.querySelector("#dataOne");
  dataOne.textContent = data.days[0].humidity;

  const dataTwo = document.querySelector("#dataTwo");
  dataTwo.textContent = data.days[1].humidity;

  const dataThree = document.querySelector("#dataThree");
  dataThree.textContent = data.days[2].humidity;

  const dataFour = document.querySelector("#dataFour");
  dataFour.textContent = data.days[3].humidity;

  const dataFive = document.querySelector("#dataFive");
  dataFive.textContent = data.days[4].humidity;

  const dataSix = document.querySelector("#dataSix");
  dataSix.textContent = data.days[5].humidity;

  const dataSeven = document.querySelector("#dataSeven");
  dataSeven.textContent = data.days[6].humidity;

  return data;
}

async function changeDaysDataPress(data) {
  // PRESS Data for each day

  let daysSymbol = document.getElementsByClassName("symbol");
  console.log(daysSymbol);

  for (let i = 0; i < 7; i++) {
    daysSymbol[i].textContent = " hPa";
  }

  const dataOne = document.querySelector("#dataOne");
  dataOne.textContent = data.days[0].pressure;

  const dataTwo = document.querySelector("#dataTwo");
  dataTwo.textContent = data.days[1].pressure;

  const dataThree = document.querySelector("#dataThree");
  dataThree.textContent = data.days[2].pressure;

  const dataFour = document.querySelector("#dataFour");
  dataFour.textContent = data.days[3].pressure;

  const dataFive = document.querySelector("#dataFive");
  dataFive.textContent = data.days[4].pressure;

  const dataSix = document.querySelector("#dataSix");
  dataSix.textContent = data.days[5].pressure;

  const dataSeven = document.querySelector("#dataSeven");
  dataSeven.textContent = data.days[6].pressure;

  return data;
}

async function changeDisplayData(data) {
  // Data in the display

  const tempLow = document.querySelector("#tempLow");
  tempLow.textContent = "Low: " + data.days[0].tempmin;

  const tempHigh = document.querySelector("#tempHigh");
  tempHigh.textContent = "High: " + data.days[0].tempmax;

  const windData = document.querySelector("#windData");
  windData.textContent = data.days[0].windspeed + " m/s";

  const wetData = document.querySelector("#wetData");
  wetData.textContent = data.days[0].humidity + " %";

  const pressData = document.querySelector("#pressData");
  pressData.textContent = data.days[0].pressure;

  console.log(data);
  return data;
}

async function changeDomDay(data) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentWeekday = [];
  let date = new Date(); // Here is index of first day
  let indexDay = date.getDay();

  for (let i = 0; i < 7; i++) {
    if (indexDay < 7) {
      currentWeekday.splice(
        currentWeekday.length,
        0,
        weekday[indexDay].slice(0, 3)
      );
      indexDay = indexDay + 1;
    } else if (indexDay == 7) {
      indexDay = 0;
      currentWeekday.splice(
        currentWeekday.length,
        0,
        weekday[indexDay].slice(0, 3)
      );
      indexDay = indexDay + 1;
    }
  }

  console.log(currentWeekday);
  console.log(currentWeekday[0]);

  const nameOne = document.querySelector("#nameOne");
  nameOne.textContent = currentWeekday[0];

  const nameTwo = document.querySelector("#nameTwo");
  nameTwo.textContent = currentWeekday[1];

  const nameThree = document.querySelector("#nameThree");
  nameThree.textContent = currentWeekday[2];

  const nameFour = document.querySelector("#nameFour");
  nameFour.textContent = currentWeekday[3];

  const nameFive = document.querySelector("#nameFive");
  nameFive.textContent = currentWeekday[4];

  const nameSix = document.querySelector("#nameSix");
  nameSix.textContent = currentWeekday[5];

  const nameSeven = document.querySelector("#nameSeven");
  nameSeven.textContent = currentWeekday[6];

  const disHeader = document.querySelector("#disHeader");
  disHeader.textContent = "Today is: " + weekday[date.getDay()];

  return data;
}
