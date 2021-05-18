import React from 'react'

//function to render a header component with title, blurb and help section
function Header() {

    //function that will show additional help information when a button is clicked.
    function showHelp() {
        let help = document.getElementById("help");

        if (help.style.display === "block"){
            help.style.display = "none";
        }
        else {
            help.style.display = "block";
        }
    }

    //return a view with the page header, addtional guidance and a initially hidden help area.
    return (
        <div id="header">
            <h1>Hangman</h1>
            <p>Try to guess the word - type a letter using your keyboard</p>
            <button onClick={showHelp}>HELP</button>             

            <p id="help">
                You have been assigned a random word. You should try to determine the word by guessing it one letter at
                a time. Should you guess a letter that is present in the word, it will be placed in the correct position
                and you will be given an opportunity to guess another letter. Should you chose an incorrect letter, you
                will add a stage to the "hangman". After a stage is added you will be given another opportunity to guess
                a letter. This will continue until you have the full word (in which case you win) or untill the "hangman"
                is completed (in which case you lose.) 
            </p>
        </div>
    )
}

export default Header
