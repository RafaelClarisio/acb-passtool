"use strict";
const passtest = document.querySelector(".section-1");
const passgen = document.querySelector(".section-2");
const navtest = document.querySelector(".div1");
const navgen = document.querySelector(".div2");
if (navtest && passgen && passtest) {
    navtest.addEventListener("click", function () {
        if (passgen.style.display === "flex") {
            passgen.style.display = "none";
            passtest.style.display = "flex";
        }
        else {
            passgen.style.display = "none";
            passtest.style.display = "flex";
        }
    });
}
if (navgen && passtest && passgen) {
    navgen.addEventListener("click", function () {
        if (passtest.style.display === "flex") {
            passtest.style.display = "none";
            passgen.style.display = "flex";
        }
        else {
            passtest.style.display = "none";
            passgen.style.display = "flex";
        }
    });
}
