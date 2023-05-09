"use strict";

function validateForm() {
  var name = document.forms["ContactUs"]["name"].value;
  var phone = document.forms["ContactUs"]["phone"].value;
  var phoneRegex = /^(\+)?[0-9]{10,}$/; 

  if (name == "" || name.length <= 3 && name.length >= 30) {
    alert("Будь ласка, введіть коректне ім'я");
    return false;
  }

  if (!phoneRegex.test(phone)) {
    alert("Будь ласка, введіть дійсний номер телефону в форматі 10 цифр");
    return false;
  }

  return true;
}
