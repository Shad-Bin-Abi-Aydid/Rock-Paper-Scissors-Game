const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")
const choiceBtns = document.querySelectorAll(".choiceBtn")
const winnerText = document.querySelector("#winnerText")

let player
let computer
let result
let plrRes = 0
let comRes = 0

choiceBtns.forEach(button => button.addEventListener("click",() => {
    player = button.textContent;
    computerTurn()

    winnerText.textContent = `Game Result`
    playerText.textContent = `Player: ${player}`
    computerText.textContent = `Computer: ${computer}`
    resultText.textContent = checkPoint();

    if(plrRes == 5 || comRes == 5){
        winnerText.textContent = `Game Over! Result is Player: ${plrRes} and Computer: ${comRes}`
        plrRes = 0
        comRes = 0
        
    }
}))

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1

    switch(randNum){
        case 1:
            computer = "ROCK"
            break
        case 2:
            computer = "PAPER"
            break
        case 3:
            computer = "SCISSORS"
            break
    }
}
function checkPoint(){
    if(player == computer){
        return "No Point"
    }
    else if(computer == "ROCK"){
        if(player == "PAPER"){
            plrRes += 1
            return "Player Get 1 Point"
        }
        else{
            comRes += 1
            return "Computer Get 1 Point"
        }
    }
    else if(computer == "PAPER"){
        if(player == "SCISSORS"){
            plrRes += 1
            return "Player Get 1 Point"
        }
        else{
            comRes += 1
            return "Computer Get 1 Point"
        }
    }
    else if(computer == "SCISSORS"){
        if(player == "ROCK"){
            plrRes += 1
            return "Player Get 1 Point"
        }
        else{
            comRes += 1
            return "Computer Get 1 Point"
        }
    }
}

// function checkWinner(){
//     if(player == computer){
//         return "Draw!"
//     }
//     else if(computer == "ROCK"){
//         return (player == "PAPER") ? (("Player Get 1 Point")(plrRes += 1)) : (("Computer Get 1 Point")(comRes +=1))
//     }
//     else if(computer == "PAPER"){
//         return (player == "SCISSORS") ? (("Player Get 1 Point")(plrRes += 1)) : (("Computer Get 1 Point")(comRes +=1))
//     }
//     else if(computer == "SCISSORS"){
//         return (player == "ROCK") ? (("Player Get 1 Point")(plrRes += 1))  : (("Computer Get 1 Point")(comRes +=1))
//     }

// }