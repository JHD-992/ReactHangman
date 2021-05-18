import React from 'react'

//function to render an alert should a previously entered letter be entered again.
function Alert({showAlert}){
    return (
        <div className={`AlertContainer ${showAlert ? 'show' : ''}`}>
            <p>This letter has been entered already</p>            
        </div>
    )
}

export default Alert
