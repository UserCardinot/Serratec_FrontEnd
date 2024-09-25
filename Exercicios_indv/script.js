var contador = 0;

document.getElementById("botao1").addEventListener("click", function(){
    document.getElementById("texto1").innerHTML = "Ola mundo";
});

if(document.getElementById("botao2")){
    document.getElementById("botao2").addEventListener("click", function(){
        contador++;
        atualizarContador();
    });
}

if(document.getElementById("botao3")){
    document.getElementById("botao3").addEventListener("click", function(){
        contador--;
        atualizarContador();
    });
}

function atualizarContador() {
    document.getElementById('contador').textContent = contador;
}

document.getElementById('botao4').addEventListener('click', function() {
    alert('Boas-Vindas em um alert!') 
});

document.getElementById('botao5').addEventListener('click', function() {
    document.getElementById('clique').textContent = 'Obrigado por clicar!';
});