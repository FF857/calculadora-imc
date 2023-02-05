


function calcular(){

    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    var resultado = (peso / (altura * altura));

    var resultado_final = resultado.toFixed(2);

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado_final;

}