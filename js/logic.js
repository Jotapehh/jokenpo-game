// PEGA O ID DOS ELEMENTOS DE SAÍDA
let msg = document.getElementById("msg");
let pP = document.getElementById("pontosPlayer");
let pE = document.getElementById("pontosEnemy");

// PEGA AS IMAGENS DE JOGADAS DO PLAYER
let imgPPapel = document.getElementById("papelP-img");
let imgPPedra = document.getElementById("pedraP-img");
let imgPTesoura = document.getElementById("tesouraP-img");

// PEGA AS IMAGENS DE JOGADAS DO INIMIGO
let imgEPapel = document.getElementById("papelE-img");
let imgEPedra = document.getElementById("pedraE-img");
let imgETesoura = document.getElementById("tesouraE-img");

// DECLARA ESCOLHAS E PONTOS
let escPapel = false;
let escPedra = false;
let escTesoura = false;
let escEnemy = ["Pedra", "Papel", "Tesoura"];
let pontosPlayer = 0;
let pontosEnemy = 0;
let escolhaPlayer;

imgPPapel.addEventListener("click", function(){imgPPapel.style.opacity = "100%"; imgPPedra.style.opacity = "50%"; imgPTesoura.style.opacity = "50%"; escolhaPlayer = "Papel"});
imgPPedra.addEventListener("click", function(){imgPPapel.style.opacity = "50%"; imgPPedra.style.opacity = "100%"; imgPTesoura.style.opacity = "50%"; escolhaPlayer = "Pedra"});
imgPTesoura.addEventListener("click", function(){imgPPapel.style.opacity = "50%"; imgPPedra.style.opacity = "50%"; imgPTesoura.style.opacity = "100%"; escolhaPlayer = "Tesoura"});

// QUANDO O BOTÃO FOR CLICADO
function rodar(){
    let nickPayer = document.getElementById("jogadorName").innerHTML;

    if(escolhaPlayer === undefined){
        msg.innerHTML = "Escolha um para jogar"
    }

    else{
        // ESCOLHA DO INIMIGO
        let randomInimigo = Math.floor(Math.random() * escEnemy.length);
        let escolhaEnemy = escEnemy[randomInimigo];

        // MOSTRANDO O ESCOLHIDO(INIMIGO)
        if(escolhaEnemy === "Papel"){
            imgEPapel.style.opacity = "100%";
            imgEPedra.style.opacity = "50%";
            imgETesoura.style.opacity = "50%";
        }

        if(escolhaEnemy === "Pedra"){
            imgEPapel.style.opacity = "50%";
            imgEPedra.style.opacity = "100%";
            imgETesoura.style.opacity = "50%";
        }

        if(escolhaEnemy === "Tesoura"){
            imgEPapel.style.opacity = "50%";
            imgEPedra.style.opacity = "50%";
            imgETesoura.style.opacity = "100%";
        }

        // POSSIBILIDADES DO PLAYER VENCER
        if(escolhaPlayer === "Pedra" && escolhaEnemy === "Tesoura" || escolhaPlayer === "Papel" && escolhaEnemy === "Pedra" || escolhaPlayer === "Tesoura" && escolhaEnemy === "Papel"){
            msg.innerHTML = `${nickPayer} Ganhou`;
            // DECLARAÇÃO DE PONTOS
            pontosPlayer += 1;
            pP.innerHTML = pontosPlayer;
        }

        // POSSIBILIDADES DE  EMPATE
        else if(escolhaPlayer === escolhaEnemy){
            msg.innerHTML = "Empate";
        }

        // PRECISO NEM DIZER NÉ FIH
        else{
            msg.innerHTML = `${nickPayer} Perdeu`;
            //DECLARAÇÃO DE PONTOS
            pontosEnemy += 1;
            pE.innerHTML = pontosEnemy;
        }
    }

    
}

