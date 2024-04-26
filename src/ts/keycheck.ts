// document.addEventListener("DOMContentLoaded", function() {
//     console.log("DOMContentLoaded event fired!");
//     let password: HTMLInputElement | null = document.getElementById("password") as HTMLInputElement;
//     let power: HTMLElement | null = document.getElementById("power-point");

//     if (password && power) {
//         password.oninput = function () {
//             let point: number = 0;
//             let value: string = password.value;
//             let widthPower: string[] = ["1%", "25%", "50%", "75%", "100%"];
//             let colorPower: string[] = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

//             if (value.length >= 8) {
//                 let arrayTest: RegExp[] = [
//                     /[0-9]/,
//                     /[a-z]/,
//                     /[A-Z]/,
//                     /[^0-9a-zA-Z]/,
//                     /(123|234|345|456|567|678|789|890|Teste|teste|test|temp|alterar|Appian@2022|Appian@2023|Appian@2024|321|654|987|Appian)/ // Verifica se há números consecutivos
//                 ];
//                 arrayTest.forEach((item, index) => {
//                     if (item.test(value)) {
//                         if (index === arrayTest.length - 1) {
//                             point -= 4; // Penaliza números consecutivos
//                         } else {
//                             point += 1; // Adiciona ponto para outras condições
//                         }
//                     }
//                 });
//             }
//             if (point < 0) {
//                 point = 0; // Garante que o ponto não seja negativo
//             }
//             power.style.width = widthPower[point];
//             power.style.backgroundColor = colorPower[point];
//         };
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired!");
    let password: HTMLInputElement | null = document.getElementById("password") as HTMLInputElement;
    let power: HTMLElement | null = document.getElementById("power-point");
    let chk1: HTMLElement | null = document.querySelector(".chk1");
    let chk2: HTMLElement | null = document.querySelector(".chk2");
    let chk3: HTMLElement | null = document.querySelector(".chk3");
    let chk4: HTMLElement | null = document.querySelector(".chk4");
    let chk5: HTMLElement | null = document.querySelector(".chk5");
    let chk6: HTMLElement | null = document.querySelector(".chk6");
    let chk7: HTMLElement | null = document.querySelector(".chk7");

    if (password && power && chk1 && chk2 && chk3 && chk4 && chk5 && chk6 && chk7) {
        password.oninput = function () {
            let point: number = 0;
            let value: string = password.value;
            let widthPower: string[] = ["1%", "25%", "50%", "75%", "100%"];
            let colorPower: string[] = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

            chk1.style.display = "none";
            chk2.style.display = "none";
            chk3.style.display = "none";
            chk4.style.display = "none";
            chk5.style.display = "none";
            chk6.style.display = "none";
            chk7.style.display = "none";

            if (value.length >= 8) {
                let arrayTest: RegExp[] = [
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
                        } else {
                            point += 1; // Adiciona ponto para outras condições
                        }
                    } else {
                        switch (index) {
                            case 0:
                                chk5.style.display = "block";
                                break;
                            case 1:
                                chk4.style.display = "block";
                                break;
                            case 2:
                                chk3.style.display = "block";
                                break;
                            case 3:
                                chk6.style.display = "block";
                                break;
                            case 4:
                                chk2.style.display = "none";
                                break;
                            case 5:
                                chk1.style.display = "block";
                                break;
                        }
                    }
                });
            } else {
                chk7.style.display = "block";
            }

            if (point < 0) {
                point = 0; // Garante que o ponto não seja negativo
            }
            power.style.width = widthPower[point];
            power.style.backgroundColor = colorPower[point];
        };
    }
});
