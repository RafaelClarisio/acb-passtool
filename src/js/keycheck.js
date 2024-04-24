"use strict";
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired!");
    let password = document.getElementById("password");
    let power = document.getElementById("power-point");
    if (password && power) {
        password.oninput = function () {
            let point = 0;
            let value = password.value;
            let widthPower = ["1%", "25%", "50%", "75%", "100%"];
            let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];
            if (value.length >= 8) {
                let arrayTest = [
                    /[0-9]/,
                    /[a-z]/,
                    /[A-Z]/,
                    /[^0-9a-zA-Z]/,
                    /(123|234|345|456|567|678|789|890|Teste|teste|test|temp|alterar|Appian@2022|Appian@2023|Appian@2024|321|654|987|Appian)/ // Verifica se há números consecutivos
                ];
                arrayTest.forEach((item, index) => {
                    if (item.test(value)) {
                        if (index === arrayTest.length - 1) {
                            point -= 4; // Penaliza números consecutivos
                        }
                        else {
                            point += 1; // Adiciona ponto para outras condições
                        }
                    }
                });
            }
            if (point < 0) {
                point = 0; // Garante que o ponto não seja negativo
            }
            power.style.width = widthPower[point];
            power.style.backgroundColor = colorPower[point];
        };
    }
});
