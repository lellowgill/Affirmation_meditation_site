// // onclick of that button update text of the <p>
// // maybe add an id to the <p> you want to change
// // then update the text of that id

// let affirmationText = document.getElementById("affirmationText");
// affirmationText.text("the next word")

const affirmationWord = ["grateful.", "thankful.", "thoughtful.", "mindful.", "abundant.", "creative.", 
    "well rested.", "brave.", "enough.", "respuectful.", "bold.", "vivrant.", "healthy.", "wealthy.",
    "a gracious receiver.", "gracious giver."];
const btn = document.getElementById("affirmationBtn");
const text = document.getElementById("affirmationText");
let index = 0;
    btn.addEventListener("click", changeText);
    text.innerHTML = affirmationWord[0];
function changeText(){
    index++;
    index %= affirmationWord.length
    text.innerHTML = affirmationWord[index];
}

//document.getElementById(id).onclick = function (){code}

//let newWord = affirmationWord.length;
    //for (var i = 0; i < newWord; i++) {
    //     console.log(newWord);
    //      return i;
    // }


// new_arr = affirmationWord.length;
// console.log(newWord);






//for (let i = 0; i < affirmationWord.length; i++) {
//    console.log(affirmationWord[i]);
//}

//let affirmationText = document.getElementById("affirmationText");
