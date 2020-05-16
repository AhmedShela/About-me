'use strict' 
var wrong = 0;
var right = 0;

var UserName = prompt("What is your name?");
alert(`Wellcome to my Website ${UserName}`);

var ArrTrue = ['Do you think that I Like Coffee ??', "Do you think that I whatched 'Lacasa De Papel' ??", "Do you think that I can solve Robik's Cube in 2 Minites ??"];
var ArrFalse = ['Do you think that I Watch animations stuff ??', 'Do you think that I Watched GOT ??'];

for (let index = 0; index < ArrTrue.length; index++) {
    var Q = prompt(ArrTrue[index]);
    if (Q.toLowerCase() == 'y' || Q.toLowerCase() == 'yes') {
        alert(`Yeah ${UserName} that is right `)
        right = right + 1;
    } else {
        alert(`Sorry ${UserName} That is Wrong`)
        wrong = wrong + 1;
    }
}
for (let index = 0; index < ArrFalse.length; index++) {
    var Q = prompt(ArrFalse[index]);
    if (Q.toLowerCase() == 'y' || Q.toLowerCase() == 'yes') {
        alert(`No ${UserName} grow up it's for kids`)
        wrong = wrong + 1;
    } else {
        alert(`Yeah ${UserName} That is right`)
        right = right + 1;
    }

}

var attempt = 0;
do {
    attempt = attempt + 1;
    if (attempt > 4) {
        wrong = wrong + 1;
        break;
    }
    
    var GuisQ = prompt("What is my Age?!")
    var X = GuisQ - 23
    if (GuisQ - 23 == 0) {
        alert("That is right");
        right = right + 1;
    } else if (GuisQ - 23 == 1) {
        alert("you a little bet higher");
    } else if (GuisQ - 23 == -1) {
        alert("you a little bet lower");
    } else if (GuisQ - 23 > 1) {
        alert("No that is high");
    } else if (GuisQ - 23 < -1) {
        alert("No that is low");
    } else {
        alert("NO");
    }
} while (GuisQ != '23');

function questionSeven() {
    var userFavFruit = ['apple', 'strawberry', 'orange', 'grape', 'watermelon'];

    for (var i = 0; i < 6; i++) {
        var userAnsw = prompt('Can you guess my favorite fruit?');
        var guess = userAnsw.toLowerCase();

        for (var j = 0; j < userFavFruit.length; j++){
            if (guess === userFavFruit[j]) {
                alert('Congrats you got it right!!!');
                score++;
                i = 6;
                break;
            }
        }
        if (i !==6){
            alert('Sorry wrong answer, try again');
        }
    }
}

questionSeven();

document.getElementById('UserName').textContent = `Thank you for visiting my web ${UserName}`
document.getElementById("result").textContent = `${right} of your answer was right and ${wrong} was worng`
