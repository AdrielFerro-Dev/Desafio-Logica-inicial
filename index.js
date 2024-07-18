let Nomeheroi = "Sucrilhos";

let xp = 0;

let classfic = ""



do{


    if (xp <= 0 ){
        console.log("Heroi não possui experiencia suficiente para ser classificado")
    console.log("Por favor insira um valor maior que 0")
    break;
    }
    
    
    if(xp <= 1000){
        classfic = "Ferro"
    }
    else if(xp <= 2000){
        classfic = "Bronze"
    }
    else if(xp <= 5000){
        classfic = "Prata"
    }
    else if(xp <= 7000){
        classfic = "Ouro"
    }
    else if(xp <= 8000){
        classfic = "Platina"
    }
    else if(xp <= 9000){
        classfic = "Ascendente"
    }
    else if(xp <= 10000){
        classfic = "imortal"
    }
    else{
        classfic = "Radiante"
    }
    console.log("O herói de nome " + Nomeheroi + " está no nível de " + classfic)
}while( xp < 0)
