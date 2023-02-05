


function calcular(){

    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    var resultado = (peso / (altura * altura));

    var resultado_final = resultado.toFixed(1);

    if(resultado_final < 18.5){
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado_final + " Classificação: magreza";
    }
    if(resultado_final > 18.5 && resultado_final < 24.9) {
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado_final + " Classificação: normal";
    }
    if(resultado_final > 25.0 && resultado_final < 29.9) {
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado_final + " Classificação: sobrepeso";
    }
    if(resultado_final > 30.0 && resultado_final < 39.9) {
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado_final + " Classificação: obesidade";
    }
    if(resultado_final > 40.0) {
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado_final + " Classificação: obesidade grave";
    }

    //document.getElementById("resultado").innerHTML = "Resultado: " + resultado_final;

}