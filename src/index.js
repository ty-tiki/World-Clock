function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = document.querySelector("#london-date");
    let londonTimeElement = document.querySelector("#london-time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML =
      londonTime.format("h:mm:ss") +
      " <small>" +
      londonTime.format("A") +
      "</small>";
  }

  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = document.querySelector("#berlin-date");
    let berlinTimeElement = document.querySelector("#berlin-time");
    let berlinTime = moment().tz("Europe/Berlin");

    berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
    berlinTimeElement.innerHTML =
      berlinTime.format("h:mm:ss") +
      " <small>" +
      berlinTime.format("A") +
      "</small>";
  }

  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = document.querySelector("#new-york-date");
    let newYorkTimeElement = document.querySelector("#new-york-time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML =
      newYorkTime.format("h:mm:ss") +
      " <small>" +
      newYorkTime.format("A") +
      "</small>";
  }
  let aucklandElement = document.querySelector("#auckland");
  if (aucklandElement) {
    let aucklandDateElement = document.querySelector("#auckland-date");
    let aucklandTimeElement = document.querySelector("#auckland-time");
    let aucklandTime = moment().tz("Pacific/Auckland");

    aucklandDateElement.innerHTML = aucklandTime.format("MMMM Do YYYY");
    aucklandTimeElement.innerHTML =
      aucklandTime.format("h:mm:ss") +
      " <small>" +
      aucklandTime.format("A") +
      "</small>";
  }
}

function changeCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let allCitiesElement = document.querySelector("#all-cities");
  allCitiesElement.innerHTML = `
  <div class="city-place-time">
  <div>
  <div class="city">${cityName}</div>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", changeCity);
