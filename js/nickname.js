let elementNick = document.getElementById("jogadorName");
let nicknamePlayer = prompt("Bota um nick aeh pô");

if(nicknamePlayer === null || nicknamePlayer === undefined){
    elementNick.innerHTML = "Você";
}
else{
    let qtdChar = nicknamePlayer.length
    
    while(qtdChar >= 11 || qtdChar <= 0){
        nicknamePlayer = prompt("Tente de novo (limite 10)");
        qtdChar = nicknamePlayer.length;
    }
    elementNick.innerHTML = nicknamePlayer;
    
}