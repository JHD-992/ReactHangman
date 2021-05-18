import React from 'react'

//a function that records and display correct letters when entered. Also displays them in the correct positions.
function Word({selectWord, correctLet}) {
    return (
        <div className="word">
            {selectWord.split('').map( (letter, i) => {
                return  (
                    <span className="letter" key={i}>
                        {correctLet.includes(letter) ? letter : ''}
                    </span>
                    )
                }
            )}
        </div>
    )
}

export default Word
