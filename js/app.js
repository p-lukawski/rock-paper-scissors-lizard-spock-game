
document.addEventListener('DOMContentLoaded', function () {


    var arr = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    var imgArr = ['./images/rock.png', './images/paper.png', './images/scissors.png', './images/lizard.png', './images/spock.png'];
    var showRules = document.getElementById('showRules');
    var rulesContainer = document.getElementById('rulesCont');
    var hide = document.getElementById('hide');
    var p1Choiceimg = document.getElementById('p1Choice');
    var p2Choiceimg = document.getElementById('p2Choice');
    var pChoiceTxt = document.getElementById('choiceTxtP');
    var cChoiceTxt = document.getElementById('choiceTxtCom');
    var winner = document.getElementById('winner');
    var playerPts = document.getElementById('pPoints');
    var computerPts = document.getElementById('cPoints');
    var pChoice = '';
    var comChoice = '';
    var buttons = document.querySelectorAll('.btn');
    var reset = document.getElementById('reset');

    for(var i=0; i<buttons.length; i++){
        buttons[i].style.background = 'url' + '(' + imgArr[i] + ') no-repeat center/cover';
    }




    function computerChoice() {
        comChoice = arr[Math.floor(Math.random() * arr.length)];
        return comChoice;
    }
    function game () {
        var winnerVal = '';
        pChoice = this.dataset.id;
        computerChoice();
            var indexOfP = arr.indexOf(pChoice);
            var indexOfC = arr.indexOf(comChoice);
            p1Choiceimg.style.background = 'url' + '(' + imgArr[indexOfP] + ') no-repeat center/cover';
            p2Choiceimg.style.background = 'url' + '(' + imgArr[indexOfC] + ') no-repeat center/cover';
            pChoiceTxt.innerText = pChoice;
            cChoiceTxt.innerText = comChoice;
            if (pChoice == 'rock') {
                if (comChoice == 'rock') {
                    winnerVal = 'Tie! No one wins!';
                } else if (comChoice == 'paper') {
                    winnerVal = 'Computer win!';
                    computerPts.innerText ++
                } else if (comChoice == 'scissors') {
                    winnerVal = "You win!";
                    playerPts.innerText ++
                } else if (comChoice == 'lizard') {
                    winnerVal = 'You win!';
                    playerPts.innerText ++
                } else if (comChoice == 'spock') {
                    winnerVal = "Computer win!";
                    computerPts.innerText ++
                }
            } else if (pChoice == 'paper') {
                if (comChoice == 'rock') {
                    winnerVal = 'You win!';
                    playerPts.innerText ++
                } else if (comChoice == 'paper') {
                    winnerVal = 'Tie! No one wins!';
                } else if (comChoice == 'scissors') {
                    winnerVal = "Computer win!";
                    computerPts.innerText ++
                } else if (comChoice == 'lizard') {
                    winnerVal = 'Computer win!';
                    computerPts.innerText ++
                } else if (comChoice == 'spock') {
                    winnerVal = "You win!";
                    playerPts.innerText ++
                }
            } else if (pChoice == 'scissors') {
                if (comChoice == 'rock') {
                    winnerVal = 'Computer win!';
                    computerPts.innerText ++
                } else if (comChoice == 'paper') {
                    winnerVal = 'You win!';
                    playerPts.innerText ++
                } else if (comChoice == 'scissors') {
                    winnerVal = "Tie! No one wins";
                } else if (comChoice == 'lizard') {
                    winnerVal = 'You win!';
                    playerPts.innerText ++
                } else if (comChoice == 'spock') {
                    winnerVal = "Computer win!";
                    computerPts.innerText ++
                }
            } else if (pChoice == 'lizard') {
                if (comChoice == 'rock') {
                    winnerVal = 'Computer win!';
                    computerPts.innerText ++
                } else if (comChoice == 'paper') {
                    winnerVal = 'You win!';
                    playerPts.innerText ++
                } else if (comChoice == 'scissors') {
                    winnerVal = "Computer win!";
                    computerPts.innerText ++
                } else if (comChoice == 'lizard') {
                    winnerVal = 'Tie! No one wins!';
                } else if (comChoice == 'spock') {
                    winnerVal = "You win!";
                    playerPts.innerText ++
                }
            } else if (pChoice == 'spock') {
                if (comChoice == 'rock') {
                    winnerVal = 'You win!';
                    playerPts.innerText ++
                } else if (comChoice == 'paper') {
                    winnerVal = 'Computer win!';
                    computerPts.innerText ++
                } else if (comChoice == 'scissors') {
                    winnerVal = "You win!";
                    playerPts.innerText ++
                } else if (comChoice == 'lizard') {
                    winnerVal = 'Computer win!';
                    computerPts.innerText ++
                } else if (comChoice == 'spock') {
                    winnerVal = "Tie! No one wins!";
                }
            }


        winner.innerText = winnerVal + ' ';
        pChoice = '';
        comChoice = '';


    }

    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click', game);
    }

    showRules.addEventListener('click', function () {
        rulesContainer.classList.remove('invisible');
        rulesContainer.classList.add('fullScreen');
    })

    hide.addEventListener('click', function () {
        rulesContainer.classList.remove('fullScreen');
        rulesContainer.classList.add('invisible');
    })

    reset.addEventListener('click', function () {
        pChoice = '';
        comChoice = '';
        playerPts.innerText = 0;
        computerPts.innerText = 0;
        p1Choiceimg.style.background = '';
        p2Choiceimg.style.background = '';
        pChoiceTxt.innerText = '';
        cChoiceTxt.innerText = '';
        winner.innerText = '';
    })

});










