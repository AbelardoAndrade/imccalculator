
const sobre = document.getElementById("sobre")
const breve = document.getElementById("breve")

function about() {
    alert('Este desafio foi criado através de alguns estudos baseados em JavaScript puro (Vanilla JS) e foi utilizado para aprendizado e treinamento da linguagem JavaScript. Visite meu GitHub ou o meu Portifólio para ver mais trabalhos meus! Obrigado por visitar esta página, seu apoio é muito importante!');
}

function comming() {
    alert('Em breve este link estará disponível!');
    }


const calculaImc = () => {

   const altura = document.imcForm.elements["altura"].value;
   const peso = document.imcForm.elements["peso"].value;

   const imc = peso / (altura * altura);

    if(imc < 19) {
        alert('Você está abaixo do peso!');

    }
    else if(imc >= 19 && imc <25){
        alert("Seu peso está normal!");
    }
    else if(imc >= 25 && imc <30){
        alert("Você está com sobrepeso!");
}
else if(imc >= 30 && imc <40){
    alert("Você esta com obesidade!");
}
else if (imc >= 40){
    alert("Você esta com obesidade grave!");


}

}

sobre.addEventListener("click", about);
breve.addEventListener('click', comming);