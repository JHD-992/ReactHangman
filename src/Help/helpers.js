//create a function that will show and timeout an alert.
export function showAlert (setter) {
    setter(true);

    setTimeout(() => {
        setter(false);
    }, 2000);
}


//external function that will be used to determine if player has won
export function checkStatus(correctLet, wronglet, selectWord) {
    let status = 'win';

    //check win
    selectWord.split('').forEach(letter => {
        if (!correctLet.includes(letter)){
            status = '';
        }
    })

    //check loss
    if (wronglet.length === 6){
        status = 'lose';
    }

    return status;
}