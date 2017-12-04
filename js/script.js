var link = document.querySelector(".btn-search");
var popup = document.querySelector(".search-form");

var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var adults = popup.querySelector("[name=adults]");
var kids = popup.querySelector("[name=kids]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("search-form-error");
  popup.classList.toggle("search-form-open");  
});

popup.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adults.value || !kids.value) {       evt.preventDefault();
    popup.classList.remove("search-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("search-form-error");
  }
});