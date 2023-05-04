const depositar = document.getElementById("depositar");
const meuInput = document.getElementById("valor");

document.addEventListener('DOMContentLoaded', function() {  
    const cincoreais = document.getElementById('5reais');
    const dezreais = document.getElementById('10reais');
    const vintereais = document.getElementById('20reais');
    const cinquentareais = document.getElementById('50reais');
    const cemreais = document.getElementById('100reais');
    const duzentosreais = document.getElementById('200reais');
    let senha = document.getElementById('senha')

    depositar.addEventListener('click', function() {
        alert(`Você irá depositar ${meuInput.value}`);
        senha.innerHTML += `saldo adicionado  ${meuInput.value} <br>`
        
        
    });

    cincoreais.addEventListener("click", function() {
        meuInput.value = 5; 
    });
  
    dezreais.addEventListener("click", function() {
        meuInput.value = 10;
    });
  
    vintereais.addEventListener("click", function() {
        meuInput.value = 20;
    });
  
    cinquentareais.addEventListener("click", function() {
        meuInput.value = 50;
    });
  
    cemreais.addEventListener("click", function() {
        meuInput.value = 100;
    });
  
    duzentosreais.addEventListener("click", function() {
        meuInput.value = 200;
    });
});

