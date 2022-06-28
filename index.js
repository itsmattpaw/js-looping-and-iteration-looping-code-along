// Code your solutions in this file

function writeCards(a, b) {
    let messages = [];
    for (let i = 0; i < a.length; i++){
        messages.push(`Thank you, ${a[i]}, for the wonderful ${b} gift!`);
    }
    return messages;
}

function countDown(number){
    while(number >= 0){
        console.log(number);
        number--;
    }
}