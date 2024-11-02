import { getData } from "./backend";

export function createDom() {
  const showCity = document.querySelector("#showCity");
  const city = document.querySelector("#city");
  let cityValue = "Prague";
  city.value = "Prague";
  wholeProcess(cityValue);

  showCity.addEventListener("click", () => {
    cityValue = city.value;
    wholeProcess(cityValue);
  });
}

function wholeProcess(cityValue) {
  getData(cityValue)
    .then((data) => changeDomData(data))
    .then((data) => changeDomDay(data));
}

async function changeDomData(data) {
  // Data for each day

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
}
