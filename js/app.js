'use strict' 
var wrong = 0;
var right = 0;

var UserName = prompt("What is your name?");
alert(`Wellcome to my Website ${UserName}`);

var ArrTrue = ['Do you think that I Like Coffee ??', "Do you think that I whatched 'Lacasa De Papel' ??", "Do you think that I can solve Robik's Cube in 2 Minites ??"];
var ArrFalse = ['Do you think that I Watch animations stuff ??', 'Do you think that I Watched GOT ??'];

for (let index = 0; index < ArrTrue.length; index++) {
    var Q = prompt(ArrTrue[index]);
    // console.log(Q);
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
    // console.log(Q);
    if (Q.toLowerCase() == 'y' || Q.toLowerCase() == 'yes') {
        alert(`No ${UserName} grow up it's for kids`)
        wrong = wrong + 1;
    } else {
        alert(`Yeah ${UserName} That is right`)
        right = right + 1;
    }

}


// var Q1 = prompt("Do you think that I Like Coffee ??");
// console.log(Q1);
// if (Q1.toLowerCase() == 'y' || Q1.toLowerCase() == 'yes') {
//     alert(`Yeah ${UserName} that is right I love Coffee`)
//     right = right + 1;
// } else {
//     alert(`Sorry ${UserName} That is Wrong`)
//     wrong = wrong + 1;
// }
// // /********************************************************** */
// var Q2 = prompt("Do you think that I whatched 'Lacasa De Papel' ??");
// console.log(Q2);
// if (Q2.toLowerCase() == 'y' || Q2.toLowerCase() == 'yes') {
//     alert(`Yeah ${UserName} that is right`)
//     right = right + 1;
// } else {
//     alert(`Sorry ${UserName} That is Wrong`)
//     wrong = wrong + 1;
// }
// // /********************************************************** */
// var Q3 = prompt("Do you think that I can solve Robik's Cube in 2 Minites ??");
// console.log(Q3);
// if (Q3.toLowerCase() == 'y' || Q3.toLowerCase() == 'yes') {
//     alert(`Yeah ${UserName} that is right `)
//     right = right + 1;
// } else {
//     alert(`Sorry ${UserName} That is Wrong`)
//     wrong = wrong + 1;
// }
// // /********************************************************** */
// var Q4 = prompt("Do you think that I Watch animations stuff ??");
// console.log(Q4);
// if (Q4.toLowerCase() == 'y' || Q4.toLowerCase() == 'yes') {
//     alert(`No ${UserName} grow up it's for kids`)
//     wrong = wrong + 1;
// } else {
//     alert(`Yeah ${UserName} That is right`)
//     right = right + 1;
// }
// // /********************************************************** */
// var Q5 = prompt("Do you think that I Watched GOT ??");
// console.log(Q5);
// if (Q5.toLowerCase() == 'y' || Q5.toLowerCase() == 'yes') {
//     alert(`No ${UserName} I Didn't and I wont`)
//     wrong = wrong + 1;
// } else {
//     alert(`Ofcourse I didn't ${UserName} That is right`)
//     right = right + 1;
// }
/************************************************************* */
var attempt = 0;
do {
    attempt = attempt + 1;
    // console.log(attempt)
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
    // switch(X){
    //     case '0':
    //         alert("That is right");
    //         right = right + 1 ;
    //     case '1':
    //         alert("you a little bet higher");
    //     case '-1':
    //         alert("you a little bet lower");
    //     case (X > 1):
    //         alert("No it is that is high");
    //     case (X < 1):
    //         alert("No it is that is low");
    //     default:
    //         alert("NO");
    // }
} while (GuisQ != '23');

/*************************************************************** */
// var food = [
//     'Shaowerma',
//     'mansaf',
//     'mulukhia',
//     'oives',
//     'lazanui'
// ];
// console.log(`right is ${right}`);
// console.log(`wrong is ${wrong}`);
// var done = false
// for (var index = 0; index < 6; index++) {
//     if (done == false) {
//         var FoodQ = prompt("What is my favorit food ?");
//       function 
//         for (var i = 0; i < food.length; i++) {
//             if (FoodQ.toLowerCase() == food[i]) {
//                 alert(`${FoodQ} is right`);
//                 right = right + 1;
//                 done = true;

//             }
//         }
//     }
// }
// if (done == false) {
//     wrong = wrong + 1;
// }
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
