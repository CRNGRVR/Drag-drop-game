let idSpawnInterval = null
let idMoveInterval = null

let score = 0

let difficulty = 0

function startGame(){
    idSpawnInterval = setInterval(spawn, 1000)
    setTimeout(sheduleMovement, 5000)

    runner.style.left = 10
    runner.style.top = 10
}

function sheduleMovement(){
    idMoveInterval = setInterval(move, difficultyToMS())
}

startGame()

let obstacles = document.querySelectorAll('.obstacle')
let board = document.querySelector('.gameboard')
board.style.position = 'absolute'

let pos = 0
let shift = 0

function spawn(){
    board.innerHTML += getObstacle()

    obstacles = document.querySelectorAll('.obstacle')
}


function move(){

    board.style.left = `${pos}px`
    pos -= 1
}



function getObstacle(){

    let currentVariant = Math.floor(Math.random() * 6)

    shift += 200

    switch(currentVariant){
        case 0:
            return `
                <div class="obstacle" style="left: ${shift}px">
                    <div class="droppable" id="clear"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                </div>
            `
        
        case 1:
            return `
                <div class="obstacle" style="left: ${shift}px">
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="clear"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                </div>
            `

        case 2:
            return `
                <div class="obstacle" style="left: ${shift}px">
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="clear"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                </div>
            `

        case 3:
            return `
                <div class="obstacle" style="left: ${shift}px">
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="clear"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                </div>
            `

        case 4:
            return `
                <div class="obstacle" style="left: ${shift}px">
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="clear"></div>
                    <div class="droppable" id="dng"></div>
                </div>
            `
        case 5:
            return `
                <div class="obstacle" style="left: ${shift}px">
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="dng"></div>
                    <div class="droppable" id="clear"></div>
                </div>
            `
    }
}


let endWindow = document.querySelector(".end_window")

function gameEnd(){

    endWindow.style.display = 'block'

    let txt = document.querySelector('.text')
    txt.innerHTML = `Очки: ${score}`


    clearInterval(idSpawnInterval)
    clearInterval(idMoveInterval)

    pos = 0
    shift = 0
    obstacles = []
    board.innerHTML = ""
    score = 0
    difficulty = 0

    scoreBoard.innerHTML = ""
}

function restart(){

    endWindow.style.display = "none"
    startGame()
}

let scoreBoard = document.querySelector('.score')

function pass(){
    score += 1
    scoreBoard.innerHTML = score

    if(score == 10){
        difficulty += 1
        clearInterval(idMoveInterval)
        idMoveInterval = setInterval(move, difficultyToMS())
    }
    else if(score == 20){
        difficulty += 1
        clearInterval(idMoveInterval)
        idMoveInterval = setInterval(move, difficultyToMS())
    }
    else if(score == 30){
        difficulty += 1
        clearInterval(idMoveInterval)
        idMoveInterval = setInterval(move, difficultyToMS())
    }
}

function difficultyToMS(level){

    switch(difficulty){
        case 0: return 10 
        case 1: return 5
        case 2: return 2
    }
}