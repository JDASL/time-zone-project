function showSelectedCity(event) {
  if (event.target.value.length > 0) {
    if (event.target.value === "tokyo") {
      alert(`It is ${tokyoTime} in Asia/Tokyo`);
    }
    if (event.target.value === "paris") {
      alert(`It is ${parisTime} in Europe/Paris`);
    }
    if (event.target.value === "sydney") {
      alert(`It is ${sydneyTime} in Australia/Sydney`);
    }
  }
}

let parisTime = moment().tz("Europe/Paris").format("dddd, MMMM D, YYYY h:mm A");
let parisTimeElement = document.querySelector("#paris");

let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY h:mm A");
let tokyoTimeElement = document.querySelector("tokyo");

let sydneyTime = moment()
  .tz("Australia/Sydney")
  .format("dddd, MMMM D, YYYY h:mm A");
let sydneyTimeElement = document.querySelector("#sydney");

let citySelectedElement = document.querySelector("#cities");
citySelectedElement.addEventListener("change", showSelectedCity);
