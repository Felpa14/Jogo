var Jogador1;
var Jogador2;

function  Iniciar(){
    document.getElementById("Jogador2").style.display="none";
}
function Escolha1(){
    Jogador1="1";
    document.getElementById("Jogador1").style.display="none";
    document.getElementById("Jogador2").style.display="block";
}
function Escolha2(){
    Jogador1="2";
    document.getElementById("Jogador1").style.display="none";
    document.getElementById("Jogador2").style.display="block";
}
function Escolha3(){
    Jogador1="3";
    document.getElementById("Jogador1").style.display="none";
    document.getElementById("Jogador2").style.display="block";
}
function Escolha4(){
    Jogador2="1";
    document.getElementById("Jogador2").style.display="none";
}
function Escolha5(){
    Jogador2="2";
    document.getElementById("Jogador2").style.display="none";
}
function Escolha6(){
    Jogador2="3";
    document.getElementById("Jogador2").style.display="none";
}

function Resultado(){
    if((Jogador1 == "1")&&(Jogador2 == "1")){
        document.getElementById("txtResultado").value = "Empate";
    }
    else if((Jogador1 == "1")&&(Jogador2 == "2")){
        document.getElementById("txtResultado").value = "Jogador2 Venceu!";
    }
    else if((Jogador1 == "1")&&(Jogador2 == "3")){
        document.getElementById("txtResultado").value = "Jogador1 Venceu!";
    }
    else if((Jogador1 == "2")&&(Jogador2 == "2")){
        document.getElementById("txtResultado").value = "Empate";
    }
    else if((Jogador1 == "2")&&(Jogador2 == "3")){
        document.getElementById("txtResultado").value = "Jogador2 Venceu!";
    }
    else if((Jogador1 == "2")&&(Jogador2 == "1")){
        document.getElementById("txtResultado").value = "Jogador1 Venceu!";
    }
    else if((Jogador1 == "3")&&(Jogador2 == "3")){
        document.getElementById("txtResultado").value = "Empate";
    }
    else if((Jogador1 == "3")&&(Jogador2 == "1")){
        document.getElementById("txtResultado").value = "Jogador2 Venceu!";
    }
    else if((Jogador1 == "3")&&(Jogador2 == "2")){
        document.getElementById("txtResultado").value = "Jogador1 Venceu!";
    }


}


