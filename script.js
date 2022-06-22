var number = document.getElementById('number');
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    multiplicacao.innerHTML = '';
    divisao.innerHTML = ''; 
    expoente.innerHTML = '';
    raizQ.innerHTML = '';

    if (number.value === ''){
        alert('Digite um número')
    }else{
        for(var i = 1; i <= 10; i++){
            var numeroEscolhido = number.value;
            multiplicacao.innerHTML += `<strong>${numeroEscolhido}</strong> x ${i} = ${numeroEscolhido * i} <br>`
            divisao.innerHTML +=  `<strong>${numeroEscolhido}</strong> / ${i} = ${(numeroEscolhido / i).toFixed(1)} <br>`
            expoente.innerHTML +=  `<strong>${numeroEscolhido}</strong> ^ ${i} = ${numeroEscolhido ** i} <br>`
        }
        raizQ.innerHTML +=  `<strong>√ ${numeroEscolhido}</strong> = ${Math.sqrt(numeroEscolhido).toFixed(1)} <br>`
    }
    number.value = '';
    number.focus();
})