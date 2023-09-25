let maiorDeIdade = 17;
let AcompadoDosPais = false;
let compraBilhete = true;

const podeViajar = (maiorDeIdade >= 18 || AcompadoDosPais) && compraBilhete;

console.log(`Pode viajar ${podeViajar}`);

if(!compraBilhete){ // Usando a negação " ! " 
 console.log(`Não comprou bilhete`);
}else{
    if(maiorDeIdade >= 18){
        console.log('É maior de idade, pode viajar !');
    }else{

        console.log(`Não é maior de idade, por isso não pode viajar!`);
    }
}