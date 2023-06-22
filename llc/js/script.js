function openWhatsApp() {
  var phoneNumber = "+38348409221"; // Replace with your actual phone number
  var message = "Hello, I have a question."; // Replace with your desired default message
  var encodedMessage = encodeURIComponent(message);
  var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodedMessage;
  window.open(url);
}
'use strict';

/**
 * navbar variables
 */
const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

menuToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar); });




/**
 * go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});