
let gameBoard = [];
// let clickSpot = document.getElementById(clickSpot);
let clickedID = undefined;
function play(clickedID){
    //console.log(clickedID);
    playerTurn = document.getElementById('player');
    //console.log(playerTurn.innerText);
    clickedElement = document.getElementById(clickedID);
    //console.log(clickedElement.innerText);

    if(gameBoard[clickedID]!== undefined){
        
        alert ('pick a different square');

    }else if(playerTurn.innerText === 'X'){
        playerTurn.innerText = 'O';
        clickedElement.innerText = 'X';
        gameBoard[clickedID] = 'X';
    }else {
        playerTurn.innerText = 'X'
        clickedElement.innerText = 'O';
        gameBoard[clickedID] = 'O';
    }

    
    // if(playerTurn.innerText === 'X'){
    //     playerTurn.innerText = 'O';
    //     clickedElement.innerText = 'X';
    //     gameBoard[clickedID] = 'X'
    // } else {
    //     playerTurn.innerText = 'X';
    //     clickedElement.innerText = 'O';
    //     gameBoard[clickedID] = 'O';
    // }
    //console.log(playerTurn.value);
    console.log(gameBoard);

    let topLeft = gameBoard[0];
    let topMiddle = gameBoard[1];
    let topRight = gameBoard[2];
    let middleLeft = gameBoard[3];
    let middleMiddle = gameBoard[4];
    let middleRight = gameBoard[5];
    let bottomLeft = gameBoard[6];
    let bottomMiddle = gameBoard[7];
    let bottomeRight = gameBoard[8];

    if(topLeft !== undefined && topLeft === topMiddle && topLeft === topRight){
        alert(`${topLeft} is the winner`);
       return;
    }
    if(middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight){
        alert (`${middleLeft} is the Winner!`);
        return;
    }
    if(bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomeRight){
        alert (`${bottomLeft} is the Winner!`);
        return;
    }
    if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        alert (`${topLeft} is the Winner!`);
        return;
    }
    if(topMiddle !== undefined && topMiddle === middleMiddle && topMiddle === bottomMiddle){
        alert (`${topMiddle} is the Winner!`);
        return;
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomeRight){
        alert (`${topRight} is the Winner`);
        return;
    }
    if(topLeft !== undefined && topLeft === middleMiddle && topLeft === bottomeRight){
        alert (`${topLeft} is the Winner!`);
        return;
    }
    if(bottomLeft !== undefined && bottomLeft === middleMiddle && bottomLeft === topRight){
        alert (`${bottomLeft} is the Winner!`);
        return;
    }

    //is board full
    let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (gameBoard[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }
}

function reset(){
    resetElement = document.getElementById(clickedID);
    
    for(let i = 0; i<=8; i++){
        gameBoard[i] = undefined;
        allSquares = document.getElementById(i);
        console.log(allSquares.innerText);
        allSquares.innerText = null;

    }
}