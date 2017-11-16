
document.addEventListener('DOMContentLoaded', function () {


    var arr = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    var imgArr = ['./images/rock.png', './images/paper.png', './images/scissors.png', './images/lizard.png', './images/spock.png']
    var choiceInput = document.getElementById('choice');
    var beginBtn = document.getElementById('begin');
    var p1Choiceimg = document.getElementById('p1Choice');
    var p2Choiceimg = document.getElementById('p2Choice');
    var winner = document.getElementById('winner');
    var pChoice = '';
    var comChoice = '';


    function playerChoice () {
        var indexOf = arr.indexOf(choiceInput.value);
        if(indexOf ==0 || indexOf > 0){
            pChoice = choiceInput.value;
            return pChoice;
        }else {
           return alert("Błędne dane");
        }
    }

    function computerChoice() {
        comChoice = arr[Math.floor(Math.random() * arr.length)];
        return comChoice;
    }
    function game () {
        var winnerVal = '';
        playerChoice();
        computerChoice();
        if(pChoice.length !== 0) {
            var indexOfP = arr.indexOf(pChoice);
            var indexOfC = arr.indexOf(comChoice);
            p1Choiceimg.style.background = 'url' + '(' + imgArr[indexOfP] + ') no-repeat center/cover';
            p2Choiceimg.style.background = 'url' + '(' + imgArr[indexOfC] + ') no-repeat center/cover';
            if (pChoice == 'rock') {
                if (comChoice == 'rock') {
                    winnerVal = 'Tie! No one';
                } else if (comChoice == 'paper') {
                    winnerVal = 'Computer';
                } else if (comChoice == 'scissors') {
                    winnerVal = "Player";
                } else if (comChoice == 'lizard') {
                    winnerVal = 'Player';
                } else if (comChoice == 'spock') {
                    winnerVal = "Computer";
                }
            } else if (pChoice == 'paper') {
                if (comChoice == 'rock') {
                    winnerVal = 'Player';
                } else if (comChoice == 'paper') {
                    winnerVal = 'Tie! No one';
                } else if (comChoice == 'scissors') {
                    winnerVal = "Computer";
                } else if (comChoice == 'lizard') {
                    winnerVal = 'Computer';
                } else if (comChoice == 'spock') {
                    winnerVal = "Player";
                }
            } else if (pChoice == 'scissors') {
                if (comChoice == 'rock') {
                    winnerVal = 'Computer';
                } else if (comChoice == 'paper') {
                    winnerVal = 'Player';
                } else if (comChoice == 'scissors') {
                    winnerVal = "Tie! No one";
                } else if (comChoice == 'lizard') {
                    winnerVal = 'Player';
                } else if (comChoice == 'spock') {
                    winnerVal = "Computer";
                }
            } else if (pChoice == 'lizard') {
                if (comChoice == 'rock') {
                    winnerVal = 'Computer';
                } else if (comChoice == 'paper') {
                    winnerVal = 'Player';
                } else if (comChoice == 'scissors') {
                    winnerVal = "Computer";
                } else if (comChoice == 'lizard') {
                    winnerVal = 'Tie! No one';
                } else if (comChoice == 'spock') {
                    winnerVal = "Player";
                }
            } else if (pChoice == 'spock') {
                if (comChoice == 'rock') {
                    winnerVal = 'Player';
                } else if (comChoice == 'paper') {
                    winnerVal = 'Computer';
                } else if (comChoice == 'scissors') {
                    winnerVal = "Player";
                } else if (comChoice == 'lizard') {
                    winnerVal = 'Computer';
                } else if (comChoice == 'spock') {
                    winnerVal = "Tie! No one";
                }
            }

        }

        winner.innerText = winnerVal + ' ';
        choiceInput.value = '';

    }

    beginBtn.addEventListener('click', game);

});










