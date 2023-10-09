const nome= document.getElementById('nome');
const peso= document.getElementById('peso');
const altura= document.getElementById('altura');
const butao= document.getElementById('button');
const resultado= document.getElementById('resultado');

const resul=(imc)=>{
    if(imc>40) return'obesidade grau III';
    if(imc>35) return'obesidade grau II';
    return'abaixo do peso';
};

const calculo=()=>{

    const vari = (+peso.value/(+altura.value *+altura.value)).toFixed(1);
    
    resultado.textcontent =`${nome} - ${resul(vari)}`;
};



    
    butao.addEventListener("click", calculo());
