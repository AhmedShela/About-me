var wrong = 0;
var right = 0;
function Quastion(mystring) {
    var Q = prompt(mystring);
    console.log(Q);
    if (Q.toLowerCase() == 'y' || Q.toLowerCase() == 'yes') {
        console.log(right);
        right = right + 1;
        return true;
    } else {
        console.log(wrong);
        wrong = wrong + 1;
        return false;
    }
}

var UserName = prompt("What is your name?");
alert(`Wellcome to my Website ${UserName}`);

if (Quastion("Do you think that I Like Coffee ??") == true) {
    alert(`Yeah ${UserName} that is right I love Coffee`)
} else {
    alert(`Sorry ${UserName} That is Wrong`)
}
/********************************************************** */
if (Quastion("Do you think that I Watched GOT ??") == true) {
    alert(`No ${UserName} I Didn't and I wont`)
} else {
    alert(`Ofcourse I didn't ${UserName} That is right`)
}
/********************************************************** */
if (Quastion("Do you think that I whatched 'Lacasa De Papel' ??") == true) {
    alert(`Yeah ${UserName} that is right`)
} else {
    alert(`Sorry ${UserName} That is Wrong`)
}
/********************************************************** */
if (Quastion("Do you think that I can solve Robik's Cube in 2 Minites ??") == true) {
    alert(`Yeah ${UserName} that is right`)
} else {
    alert(`Sorry ${UserName} That is Wrong`)
}
/********************************************************** */
if (Quastion("Do you think that I Watch animations stuff ??") == true) {
    alert(`No ${UserName} grow up it's for kids`)
} else {
    alert(`Yeah ${UserName} That is right`)
}
/********************************************************** */

document.getElementById('UserName').textContent = `Thank you for visiting my web ${UserName}`
document.getElementById("result").textContent = `${right} of your answer was right and ${wrong} was worng`
