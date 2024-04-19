// document.addEventListener("DOMContentLoaded", function() {
//     console.log("DOMContentLoaded event fired!");
//     let password = document.getElementById("password"); 
//     let power = document.getElementById("power-point"); 
//     password.oninput = function () {
//         let point = 0;
//         let value = password.value;
//         let widthPower = ["1%", "25%", "50%", "75%", "100%"];
//         let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];
    
//         if (value.length >= 8) {
//             let arrayTest = [
//                 /[0-9]/, 
//                 /[a-z]/, 
//                 /[A-Z]/, 
//                 /[^0-9a-zA-Z]/,
//                 /(123|234|345|456|567|678|789|890|Teste|teste|test|temp|alterar)/ // Verifica se há números consecutivos
//             ];
//             arrayTest.forEach((item, index) => {
//                 if (item.test(value)) {
//                     if (index === arrayTest.length - 1) {
//                         point -= 3; // Penaliza números consecutivos
//                     } else {
//                         point += 1; // Adiciona ponto para outras condições
//                     }
//                 }
//             });
//         }
//         if (point < 0) {
//             point = 0; // Garante que o ponto não seja negativo
//         }
//         power.style.width = widthPower[point];
//         power.style.backgroundColor = colorPower[point];
//     };
// });


document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired!");
    let password = document.getElementById("password"); 
    let power = document.getElementById("power-point"); 
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
                    } else {
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
});

let passtest = document.querySelector(".section-1");
let passgen = document.querySelector(".section-2");
let navtest = document.querySelector(".div1");
let navgen = document.querySelector(".div2");

navtest.addEventListener("click", function(){
    if(passgen.style.display = "flex") {
        passgen.style.display = "none";
        passtest.style.display = "flex"
    } else {
        passgen.style.display = "none";
        passtest.style.display = "flex"
    }
})

navgen.addEventListener("click", function(){
    if(passtest.style.display = "flex") {
        passtest.style.display = "none";
        passgen.style.display = "flex";
    } else {
        passtest.style.display = "none";
        passgen.style.display = "flex";
    }
})


function gerarSenha(tamanho) {
    const caracteresMinusculos = 'abcdefghijklmnopqrstuvwxyz';
    const caracteresMaiusculos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '1234567890';
    const simbolos = '!@#$%^&*()_+{}[]|;:,.<>?';
    let senha = '';

    // Adiciona pelo menos um de cada tipo
    senha += caracteresMinusculos.charAt(Math.floor(Math.random() * caracteresMinusculos.length));
    senha += caracteresMaiusculos.charAt(Math.floor(Math.random() * caracteresMaiusculos.length));
    senha += numeros.charAt(Math.floor(Math.random() * numeros.length));
    senha += simbolos.charAt(Math.floor(Math.random() * simbolos.length));

    // Completa o restante da senha
    const caracteresRestantes = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+{}[]|;:,.<>?';
    for (let i = 0; i < tamanho - 4; i++) {
        senha += caracteresRestantes.charAt(Math.floor(Math.random() * caracteresRestantes.length));
    }

    // Embaralha a senha
    senha = senha.split('').sort(function(){return 0.5-Math.random()}).join('');

    return senha;
}

  document.getElementById('gerar').addEventListener('click', function() {
      const tamanho = document.getElementById('tamanho').value;
      const senhaGerada = gerarSenha(tamanho);
      document.getElementById('senha').value = senhaGerada;
  });
