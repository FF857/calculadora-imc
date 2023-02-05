


function calcular(){

    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    var resultado = (peso / (altura * altura));

    var resultado_final = resultado.toFixed(1);

    var texto = document.getElementById("resultado");

    if(resultado_final < 18.5){
        texto.innerHTML = "Resultado: " + resultado_final + " Classificação: Magreza";
    }

    else if(resultado_final > 18.5 && resultado_final < 24.9) {
        texto.innerHTML = "Resultado: " + resultado_final + " Classificação: Normal";
    }

    else if(resultado_final > 25.0 && resultado_final < 29.9) {
        texto.innerHTML = "Resultado: " + resultado_final + " Classificação: Sobrepeso";
    }

    else if(resultado_final > 30.0 && resultado_final < 39.9) {
        texto.innerHTML = "Resultado: " + resultado_final + " Classificação: Obesidade";
    }

    else { //(resultado_final > 40.0);
        texto.innerHTML = "Resultado: " + resultado_final + " Classificação: Obesidade grave";
    }

}