function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value) // Convertendo para metros
    const genero = document.querySelector('input[name="genero"]:checked');

    if (!peso || !altura || !genero) {
        alert("Preencha todos os campos!");
        return;
    }

    const imc = peso / (altura * altura);

    let resultado = "";

    if (imc < 18.5) {
        resultado = "Seu IMC é: " + imc.toFixed(2) + ". Você está abaixo do peso";
    } else if (imc < 24.9) {
        resultado = "Seu IMC é: " + imc.toFixed(2) + ". Você está com o peso normal";
    } else if (imc < 29.9) {
        resultado = "Seu IMC é: " + imc.toFixed(2) + ". Você está com sobrepeso";
    } else if (imc < 34.9) {
        resultado = "Seu IMC é: " + imc.toFixed(2) + ". Você está com obesidade grau I";
    } else if (imc < 39.9) {
        resultado = "Seu IMC é: " + imc.toFixed(2) + ". Você está com obesidade grau II";
    } else {
        resultado = "Seu IMC é: " + imc.toFixed(2) + ". Você está com obesidade grau III";
        
    }

    document.getElementById("resultado").textContent = resultado;
}