document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#game-board');
    const startButton = document.getElementById('start-game');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

const cardArray = [
        { name: 'card1', img: 'image/distracted.jpg' },
        { name: 'card2', img: 'image/drake.png' },
        { name: 'card3', img: 'image/drake2.jpg' },
        { name: 'card4', img: 'image/ned.jpg' },
        { name: 'card5', img: 'image/oppa.jpg' },
        { name: 'card6', img: 'image/fine.png' },
        { name: 'card7', img: 'image/yay.png' },
        { name: 'card8', img: 'image/smart.jpg' },
        { name: 'card9', img: 'image/success.png' },
        { name: 'card10', img: 'image/surprised.jpg' },
        { name: 'card11', img: 'image/simpsons.jpg' },
        { name: 'card12', img: 'image/yuno.jpg' },
        { name: 'card1', img: 'image/distracted.jpg' },
        { name: 'card2', img: 'image/drake.png' },
        { name: 'card3', img: 'image/drake2.jpg' },
        { name: 'card4', img: 'image/ned.jpg' },
        { name: 'card5', img: 'image/oppa.jpg' },
        { name: 'card6', img: 'image/fine.png' },
        { name: 'card7', img: 'image/yay.png' },
        { name: 'card8', img: 'image/smart.jpg' },
        { name: 'card9', img: 'image/success.png' },
        { name: 'card10', img: 'image/surprised.jpg' },
        { name: 'card11', img: 'image/simpsons.jpg' },
        { name: 'card12', img: 'image/yuno.jpg' }
    ];

    function shuffle(array) {
        array.sort(() => 0.5 - Math.random());
    }

    function createBoard() {
        shuffle(cardArray);
        grid.innerHTML = '';
        cardsWon = [];

        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        if (!cardsChosenId.includes(cardId)) {
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('#game-board img');
        const firstCardId = cardsChosenId[0];
        const secondCardId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1] && firstCardId !== secondCardId) {
            cards[firstCardId].style.visibility = 'hidden';
            cards[secondCardId].style.visibility = 'hidden';
            cards[firstCardId].removeEventListener('click', flipCard);
            cards[secondCardId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[firstCardId].setAttribute('src', 'image/blank.png');
            cards[secondCardId].setAttribute('src', 'image/blank.png');
        }

        cardsChosen = [];
        cardsChosenId = [];

        if (cardsWon.length === cardArray.length / 2) {
            alert('Congratulations! You found them all!');
        }
    }

    startButton.addEventListener('click', createBoard);
});
