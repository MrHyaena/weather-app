import { getData } from "./backend";

export function createDom() {
  const showCity = document.querySelector("#showCity");

  showCity.addEventListener("click", () => {
    const city = document.querySelector("#city");
    let cityValue = city.value;
    getData(cityValue).then((data) => changeDom(data));
  });
}

async function changeDom(data) {
  console.log(data);
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
}
