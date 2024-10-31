import "./styles.css";

async function getData() {
  let city = "London";
  let firstPart =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  let lastPart =
    "/next7days?unitGroup=metric&include=hours&key=5EGSHHEJZZXCSVQR6AMZEE5Z7&contentType=json";
  let apiUrl = firstPart + city + lastPart;
  const response = await fetch(apiUrl, { mode: "cors" });
  const dataJson = await response.json();
  console.log(dataJson);
}

getData();
