import React, {useState, useEffect} from 'react';
import Header from './Components/Header'
import Hangman from './Components/Hangman'
import Word from './Components/Word'
import WrongLetter from './Components/WrongLetter'
import Popup from './Components/Popup'
import Alert from './Components/Alert'

//import single function under alternative name from the helper file
import {showAlert as show} from './Help/helpers'

//import the styling used for entire project
import './App.css'

//for this excersise, set a fixed list of words to select from.
const words = ['hyperion', 'development', 'application', 'bootcamp', 'programming', 'review', 'mentor'];
let selectWord = words[Math.floor(Math.random() * words.length)];

function App() {
  //set a play state to use to keep game running by default
  const [play, setPlay] = useState(true);
  //set a correct letter state that will collect all letters present in selected word
  const [correctLet, setCorrectLet] = useState([]);
  //set a wrong letter state that will collect all letters not present in selected word
  const [wrongLet, setWrongLet] = useState([]);
  //set a state that will be used to show an alert if a letter has already been entered
  const [showAlert, setShowAlert] = useState(false);

  //use of useEffect to avoid the "pile-up" of event listeners on each render of the page.
  useEffect(() => {
    //set up the event to be reactive to a button press of any letter on the user's keyboard.
    const handleInput = event => {
      const { key, keyCode } = event;
      if (play && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectWord.includes(letter)) {
          if (!correctLet.includes(letter)) {
            setCorrectLet(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowAlert);
          }
        } 
        else {
          if (!wrongLet.includes(letter)) {
            setWrongLet(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowAlert);
          }
        }
      }
    }
    window.addEventListener('keydown', handleInput);

    return () => window.removeEventListener('keydown', handleInput);
    //set dependencies so as to only trigger the above funtion when they are updated.
  }, [correctLet, wrongLet, play]);

  //create a reset function to re-initialise the game if play again is clicked
  function reset() {
    //set play status to true
    setPlay (true);

    //reset arrays
    setCorrectLet([]);
    setWrongLet([]);

    //select a new word at random
    const random = Math.floor(Math.random() * words.length);
    selectWord = words[random];
  }


  //return all components with the necessary states etc passed as props
  return (
    <div id="App">
      <Header />
      <div className="hangmanGame">
        <Hangman wrongLet={wrongLet} /> 
        <WrongLetter wrongLet={wrongLet} />
        <Word selectWord={selectWord} correctLet={correctLet} />
      </div>
      <Popup correctLet={correctLet} wrongLet={wrongLet} selectWord={selectWord} setPlay={setPlay} reset={reset}/>
      <Alert showAlert={showAlert} />
    </div>
  );
}

export default App;