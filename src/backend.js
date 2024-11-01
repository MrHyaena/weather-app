export async function getData(city) {
  let firstPart =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  let lastPart =
    "/next7days?unitGroup=metric&include=hours&key=5EGSHHEJZZXCSVQR6AMZEE5Z7&contentType=json";
  let apiUrl = firstPart + city + lastPart;
  const response = await fetch(apiUrl, { mode: "cors" });

  let data = await response.json();
  return data;
}
