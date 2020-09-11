console.log('The house always wins');

let cardId = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');

//console.log(idInput);
//console.log(colorInput);

function setCard(){
    const card = document.getElementById(cardId.value);
    //console.log(card);
    card.style.color = colorInput.value;
}

function reset(){
    // card = document.getElementById('diamonds');
    // card.style.color = null;
    allCard = document.querySelectorAll('section');
    //console.log(allCard[0]);
    for(let i =0; i<allCard.length; i++){
        allCard[i].style.color = null;
       // console.log(allCard[i].style.color);
    }
    //allCard.style.color = null;
}
