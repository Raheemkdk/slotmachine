//Understand
//Slot machine that has a total of 5 symbols that can picked at random after a button is pressed
//Can only bet within $5 - $50
// Need an intial wallet to get money from

//Plan
//Need to select the button to enter amount, add a click event and perform a function
//Get the amount from the input box next to the button. Add an if condition for the minimal and maximum amount
// Need to select the spin button, add a click event and perform a function
// Have a string array of the 5 symbols I selected
// Used a method to pick them at random and store it in variable for each reel
// When 3 reels are equal in value, show an alert you won and multiply initial bet by .5x
// Store that in variable called let so it can be incremented/changed and show in the dom
// else if when 3 reels are not equal in value, show an alert "you suck at betting" and take away bet 

//Implementing
let wallets = 2000
const min = 5
const max = 50

let maxbet = document.getElementById('max')
let minbet = document.getElementById('min')
const symbols = ['👑','🍑','🍒','🍉','🍌']

function betting(bet){
    let reels = document.querySelectorAll('.slotScreens')
    console.log(reels)
    let outputMessage = document.getElementById('outputText')
    console.log(outputMessage)

    if(bet > wallets){
        outputMessage.innerText = 'YOU ARE BROKEEEEE!!'
    }
    else {
        wallets -= bet
        let first = symbols[Math.floor(Math.random() * symbols.length)];
        let second = symbols[Math.floor(Math.random() * symbols.length)];
        let third = symbols[Math.floor(Math.random() * symbols.length)];

        reels[0].innerText = first
        reels[1].innerText = second
        reels[2].innerText = third

            if(first === second && second === third){
                let win = bet * 3
                wallets += win
                outputMessage.innerText = `You won ${win}`
            }
            else{
                outputMessage.innerText = 'You lost'
            }
        document.querySelector('#wallet').innerText = wallets
    }
}
maxbet.addEventListener('click', function(){
    betting(50)
})
minbet.addEventListener('click', function(){
    betting(5)
})
























//Still working on this different way to solve the project

// document.querySelector('#bet').addEventListener('click',betting)
// document.querySelector('#spinButton').addEventListener('click',spinning)
// const symbols = ['👑','🍑','🍒','🍉','🍌']
// function betting(){
//     const money = document.getElementById('money').value
//     console.log(money)
//     if(money < 5){
//         alert('Your betting less than 5')
//     }
//     else if(money > 50){
//         alert('Your betting more than 50')
//     }
// }
// function spinning(){
// const randoms = 

// }
