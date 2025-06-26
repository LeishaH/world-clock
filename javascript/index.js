document.addEventListener("DOMContentLoaded", function () {
  function updateTimes() {
    // Sydney
    let sydneyElement = document.querySelector("#sydney");
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");

    let nowSydney = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = nowSydney.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML =
      nowSydney.format("h:mm:ss") +
      " <small>" +
      nowSydney.format("A") +
      "</small>";

    // Los Angeles
    let laElement = document.querySelector("#los-angeles");
    let laDateElement = laElement.querySelector(".date");
    let laTimeElement = laElement.querySelector(".time");

    let nowLA = moment().tz("America/Los_Angeles");
    laDateElement.innerHTML = nowLA.format("MMMM Do YYYY");
    laTimeElement.innerHTML =
      nowLA.format("h:mm:ss") + " <small>" + nowLA.format("A") + "</small>";
  }
  updateTimes();
  setInterval(updateTimes, 1000);
});
