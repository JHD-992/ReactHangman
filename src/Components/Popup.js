import React, {useEffect} from 'react'
import {checkStatus} from '../Help/helpers'

//function to create a popup based on results passed to it by other components
function Popup({correctLet, wrongLet, selectWord, setPlay, reset}) {
    let finalMsg = '';
    let finalMsgShow = '';
    let play = true;

    //if the check status check returns true, set final message
    if (checkStatus(correctLet, wrongLet, selectWord ) === 'win') {
        finalMsg = "Congrats! You Win!";
        play = false;
    }
    else if (checkStatus(correctLet, wrongLet, selectWord ) === 'lose') {
        finalMsg = "Unlucky! You Lost!";
        finalMsgShow = `The word was: ${selectWord}`
        play = false;
    }

    //use effect to set playable status once message has been displayed
    useEffect (() => setPlay(play));

    //return a view to the user showcasing a win or loss message if a message has been set.
    return (
        <div className="ContainPopup" style={finalMsg !== '' ? {display: 'flex'} : {}}>
            <div className="popup">
                <h2>{finalMsg}</h2>
                <h3>{finalMsgShow}</h3>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Popup
