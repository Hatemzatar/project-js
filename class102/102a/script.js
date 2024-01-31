'use strict'

// Part 1
var mark = 0;
for (var trialsNumber1 = 3; trialsNumber1 >= 0; trialsNumber1--) {
    var myName = prompt('What is my name?').toLowerCase();
    if (myName === 'hatem') {
        alert('That was correct! Good luck to the next question!');
        mark++;
        break;
    } else
        alert(`You still have ${trialsNumber1} more chance`);
}


//Part 2
var trialsNumber2 = 3
while (trialsNumber2 >= 0) {
    if (trialsNumber2 == 0) {
        alert('You are out of chanses');
        break;
    }
    var myAge = prompt('How old am I?');

    if (myAge == 23) {
        alert('That was correct! Good luck to the final question!');
        mark++;
        break;
    }
    else if (myAge < 23) {
        alert('Your answer is under the correct age');
        alert(`You still have ${trialsNumber2} more chance`);
        trialsNumber2--


    }
    else if (myAge > 23) {
        alert('Your answer is above the correct age');
        alert(`You still have ${trialsNumber2} more chance`);
        trialsNumber2--

    }
    else {
        alert('Please enter a number!');
    }

}


//Part 3
var favColor = ['black', 'purple', 'gold'];
for (var trialsNumber3 = 3; trialsNumber3 >= 0; trialsNumber3--) {
    var myColor = prompt('Guess my favoriots colors, I have 3 colors :)').toLowerCase();
    var isCorrect = true; //flag to check

    for (var index = 0; index < favColor.length; index++) {
        if (myColor === favColor[index]) {
            isCorrect = true
            break;
        }
        else if (myColor !== favColor[index]) {
            isCorrect = false
        }
    }

    if (isCorrect) {
        alert('Correct');
        mark++
    }
    alert(`You still have ${trialsNumber3} more chance`);

}

//part 4

var favHobbies = ['football', 'swimming', 'gaming'];
for (var trailsNumber4= 3; trailsNumber4 >= 0 ; trailsNumber4--){
    var myHobby = prompt('Guess my favorite hobbies, I have 3 hobbies :)').toLowerCase();
    var isCorrect2= true;

    for(var index2 = 0 ; index2<favHobbies.length ; index2++){

        if (myHobby === favHobbies[index2]) {

            isCorrect2=true;
            break;
        }
        else if (myHobby !== favHobbies[index2]){
            isCorrect2=false;
        }
    }

    if(isCorrect2){
        alert('That was correct!');
        mark++
    }
    alert(`You still have ${trailsNumber4} more chance`);
}


document.write(`<p> You got ${mark}/8  </P>`);


// var userScore = 0;
// var attempts = 4;
// var firstQuestion = "Guess my favoriots colors, I have 3 colors :)";
// var secondQuestion = "Guess my favorite hobbies, I have 3 hobbies :)";
// var firstAnswer = ['black', 'purple', 'gold'];
// var secondAnswer = ['football', 'swimming', 'gaming'];

// questionCheck(firstQuestion, firstAnswer)
// questionCheck(secondQuestion, secondAnswer)

// function questionCheck(question, answer) {

//     for (j = 0; j < attempts; j++) {
//         var inputAnswer = prompt(question)
//         var isnotDone = true;

//         for (let index = 0; index < answer.length; index++) {
//             if (inputAnswer === answer[index]) {
//                 userScore++;
//                 alert('That was correct');
//                 isnotDone = false;
//                 break;
//             }

//         }
//         if (isnotDone) {
//             alert('Not correct, I will give you another try ');

//         } else {
//             break;
//         }
//     }

// }

