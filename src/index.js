function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = document.querySelector("#london-date");
  let londonTimeElement = document.querySelector("#london-time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML =
    londonTime.format("h:mm:ss") +
    " <small>" +
    londonTime.format("A") +
    "</small>";

  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = document.querySelector("#berlin-date");
  let berlinTimeElement = document.querySelector("#berlin-time");
  let berlinTime = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
  berlinTimeElement.innerHTML =
    berlinTime.format("h:mm:ss") +
    " <small>" +
    berlinTime.format("A") +
    "</small>";

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = document.querySelector("#new-york-date");
  let newYorkTimeElement = document.querySelector("#new-york-time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML =
    newYorkTime.format("h:mm:ss") +
    " <small>" +
    newYorkTime.format("A") +
    "</small>";

  let aucklandElement = document.querySelector("#auckland");
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

updateTime();
setInterval(updateTime, 1000);
