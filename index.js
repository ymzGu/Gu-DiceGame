
window.onload = function(){

    var player1Name = prompt("enter name 1");
    var player2Name = prompt("enter name 2");
    var nameText =  document.querySelectorAll(".container p");

    if (player1Name === "" || player1Name == null){
        nameText[0] = "player 1";
    } else {
        nameText[0].innerText = player1Name;        
    }
    if (player2Name ==="" || player2Name == null){
        nameText[1]= "player 2";
    } else {
        nameText[1].innerText = player2Name;
    }

    var clickPlace = document.getElementsByTagName("h2");
    clickPlace[0].classList.add("unselectable");
    clickPlace[0].onclick = function(){
    var diceeNum1 = Math.floor(Math.random()*6)+1;
    var diceeNum2 = Math.floor(Math.random()*6)+1;

    var player1Src = document.querySelector(".img1");
    var player2Src = document.querySelector(".img2");
//2个random如果是onclick的话必须放function里面，因为每次点击才能刷新random数，
// 而onload的话，放里外都行

switch (diceeNum1) {
    case 1:
        player1Src.src="./images/dice1.png";
        break;
    case 2:
        player1Src.src="./images/dice2.png";
        break;
    case 3:
        player1Src.src="./images/dice3.png";
        break;
    case 4:
        player1Src.src="./images/dice4.png";
        break;
    case 5:
        player1Src.src="./images/dice5.png";
        break;    
    default:
        player1Src.src="./images/dice6.png";
}

switch (diceeNum2) {
    case 1:
        player2Src.src="./images/dice1.png";
        break;
    case 2:
        player2Src.src="./images/dice2.png";
        break;
    case 3:
        player2Src.src="./images/dice3.png";
        break;
    case 4:
        player2Src.src="./images/dice4.png";
        break;
    case 5:
        player2Src.src="./images/dice5.png";
        break;    
    default:
        player2Src.src="./images/dice6.png";
}
    
    if(diceeNum1>diceeNum2){
        document.querySelector("h1").innerText = nameText[0].innerText+" wins";
    }else if(diceeNum2>diceeNum1){
        document.querySelector("h1").innerText = nameText[1].innerText+" wins";
    } else {
        document.querySelector("h1").innerText = "Oh,you both win!";
    }
}
}
