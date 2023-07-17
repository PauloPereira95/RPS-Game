let pcVic = 0;
let playerVic = 0;
let choisePC, choisePlayer;

const divRes = document.getElementById("div-resultado");
const divR = document.getElementById("div-rounds");
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper")
const btnScissors = document.querySelector(".scissors");
let divScore = document.querySelector('.score');
let divChoicePc = document.querySelector('.choice-pc');
const btnReset = document.querySelector('.btnReset')

function getComputerChoice() {
    let nChoise = Math.floor(Math.random() * 3);
    switch (nChoise) {
        case 0:
            choisePC = 'rock';
            divChoicePc.innerHTML = '<button class="class-button rock"><img src="./img/rock.png" alt="image of one rock"srcset = "" ></button>';
            break;
        case 1:
            choisePC = 'paper';
            divChoicePc.innerHTML = '<button class="class-button rock"><img src="./img/paper.png" alt="image of one rock"srcset = "" ></button>';

            break;
        default:
            choisePC = 'scissors';
            divChoicePc.innerHTML = '<button class="class-button rock"><img src="./img/scissors.png" alt="image of one rock"srcset = "" ></button>';

            break;
    }

    console.log('Escolha pc ->' + choisePC)
    return choisePC;
}

function playRound(choisePC, choisePlayer) {

    let victoryRound;
    cPC = choisePC.toLowerCase();
    cPlayer = choisePlayer.toLowerCase();

    if (cPlayer === 'rock' || cPlayer === 'scissors' || cPlayer === 'paper') {
        switch (cPlayer) {
            case 'rock':
                //console.log('passou r');
                if (cPC === 'paper') {
                    victoryRound = 'PC Won!';
                    divR.innerHTML = 'PC Won ! <br>Paper beats Rock'
                    pcVic++;
                }
                if (cPC === 'scissors') {
                    victoryRound = ' Player Won! ';
                    divR.innerHTML = 'Player Won! <br>Rock beats Scissors'

                    playerVic++;

                }
                if (cPC === 'rock') {
                    victoryRound = 'Draw!';
                    divR.innerHTML = 'DRAW!';

                }
                break;
            case 'paper':
                //console.log('passou p');

                if (cPC === 'rock') {
                    victoryRound = 'Player Won!';
                    divR.innerHTML = 'Player Won ! <br>Paper beats Rock'

                    playerVic++;

                }
                if (cPC === 'scissors') {
                    victoryRound = ' PC Won!';
                    divR.innerHTML = 'PC Won ! <br>Scissors beats Paper'

                    pcVic++;
                }
                if (cPC === 'paper') {
                    victoryRound = 'Draw!';
                    divR.innerHTML = 'DRAW !';

                }
                break;
            case 'scissors':
                //console.log('passou s');

                if (cPC === 'rock') {
                    victoryRound = 'PC Won!';
                    divR.innerHTML = 'PC Won ! <br>Rock beats Scissors';
                    pcVic++;

                }
                if (cPC === 'scissors') {
                    victoryRound = 'Draw!';
                    divR.innerHTML = 'DRAW!';
                }
                if (cPC === 'paper') {
                    victoryRound = 'Player Won!';
                    divR.innerHTML = 'PC Won ! <br>Scissors beats Paper';
                    playerVic++;
                }
                break;
            default:
                victoryRound = 'Erro!';
                break;
        }
        divScore.innerText = `${playerVic} - ${pcVic}`;
        return victoryRound, pcVic, playerVic;
    } else {
        divR.innerHTML += victoryRound = 'Rodada Invalida! <br>';
        console.log(victoryRound);
        return victoryRound;
    }
}
function game(choisePlayer) {
    if (isGameOver()) {
        msgWin();
        return;
    }
    choisePC = getComputerChoice();
    playRound(choisePC, choisePlayer);
    msgWin();
    

}
function isGameOver() {
    if (playerVic === 5 || pcVic === 5) {
        btnReset.style.display = 'block';
        return true;
    } else {
        return false;
    }
    

}

function msgWin() {
    if (playerVic === 5) {
        return divRes.innerText = 'Player Won !';
    } else if (pcVic === 5) {
        return divRes.innerText = 'PC WON !';
    }

}
function refresh() {
    document.location.reload()
}

btnReset.style.display = 'none';
btnReset.addEventListener('click', () => (refresh()));
btnRock.addEventListener('click', () => game('rock'));
btnPaper.addEventListener('click', () => game('paper'));
btnScissors.addEventListener('click', () => game('scissors'));

