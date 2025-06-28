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

  let cityIntervalId;

  function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }

    let sydneyElement = document.querySelector("#sydney");
    let laElement = document.querySelector("#los-angeles");

    if (!cityTimeZone) {
      clearInterval(cityIntervalId);
      cityIntervalId = null;
      document.querySelector("#selected-city-section").innerHTML = "";

      sydneyElement.style.display = "block";
      laElement.style.display = "block";
      return;
    }

    sydneyElement.style.display = "none";
    laElement.style.display = "none";

    clearInterval(cityIntervalId);

    function showCityTime() {
      let cityTime = moment().tz(cityTimeZone);
      let formattedDate = cityTime.format("MMMM Do YYYY");
      let formattedTime =
        cityTime.format("h:mm:ss") +
        " <small>" +
        cityTime.format("A") +
        "</small>";

      let selectedSection = document.querySelector("#selected-city-section");
      selectedSection.innerHTML = "";

      let customCityElement = document.createElement("div");
      customCityElement.id = "custom-city";
      customCityElement.classList.add("city-block");

      let cityName = cityTimeZone.split("/")[1].replace("_", " ");

      customCityElement.innerHTML = `
        <h2>${cityName} 🌍</h2>
        <div class="date">${formattedDate}</div>
        <div class="time">${formattedTime}</div>
      `;

      selectedSection.appendChild(customCityElement);
    }

    showCityTime();
    cityIntervalId = setInterval(showCityTime, 1000);
  }

  updateTimes();
  setInterval(updateTimes, 1000);

  let citiesSelectElement = document.querySelector("#city-select");
  citiesSelectElement.addEventListener("change", updateCity);
});
