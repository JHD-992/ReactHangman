import React from 'react'

//use a function that keeps track of letters entered that are not present in the word and allow them for display.
function WrongLetter ({wrongLet}){
    return (
        <div className="containWrongLetter">
            <div>
                {wrongLet.length > 0 && <p>Wrong</p>}
                {wrongLet
                    .map((letter, i) => <span key={i}>{letter}</span>)
                    .reduce((prev, current) => prev === null ? [current] : [prev, ', ', current], null)}
            </div>
        </div>
    )
}

export default WrongLetter
