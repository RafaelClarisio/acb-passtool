const passtest: HTMLElement | null = document.querySelector(".section-1");
const passgen: HTMLElement | null = document.querySelector(".section-2");
const navtest: HTMLElement | null = document.querySelector(".div1");
const navgen: HTMLElement | null = document.querySelector(".div2");

if (navtest && passgen && passtest) {
    navtest.addEventListener("click", function () {
        if (passgen.style.display === "flex") {
            passgen.style.display = "none";
            passtest.style.display = "flex";
        } else {
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
        } else {
            passtest.style.display = "none";
            passgen.style.display = "flex";
        }
    });
}
