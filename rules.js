//  Идентификаторы таймеров спавна преград и движения поля.
//  Нужны для остановки игрового процесса.
let idSpawnInterval = null
let idMoveInterval = null
let idDelay = null

//  Очки, заработанные игроком при прохождении преград
let score = 0
let scoreBoard = document.querySelector('.score')

//  Уровень сложности
let difficulty = 0

let isGameEnded = false

startGame()


//  Отложенный старт движения поля, чтобы фигуры успели заспавниться
function sheduleMovement(){
    idMoveInterval = setInterval(move, difficultyToMS())
}


//  Уровень сложности решает скорость поля
function difficultyToMS(level){

    switch(difficulty){
        case 0: return 10 
        case 1: return 5
        case 2: return 2
    }
}


function startGame(){
    idSpawnInterval = setInterval(spawn, 1000)
    idDelay = setTimeout(sheduleMovement, 5000)

    //  Это должно было быть возвращением объекта на место
    //  но эта шляпа не хочет работать
    runner.style.left = 10
    runner.style.top = 10
}


function restart(){

    endWindow.style.display = "none"
    isGameEnded = false
    startGame()
}



//  Столкновение с препядствием
function collisionObstacle(){
    gameEnd("Причина: столкновение")
}

//  Прохождение препятствия
function pass(){

    score += 1
    scoreBoard.innerHTML = score

    //  Увеличение сложности
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


let endWindow = document.querySelector(".end_window")

function gameEnd(reason){

    isGameEnded = true

    endWindow.style.display = 'block'

    let txt = document.querySelector('.text')
    txt.innerHTML = `Очки: ${score}`

    let descr = document.querySelector('.descr')
    descr.innerHTML = reason

    clearInterval(idSpawnInterval)
    clearInterval(idMoveInterval)
    clearTimeout(idDelay)

    pos = 0
    shift = 0
    board.innerHTML = ""
    score = 0
    difficulty = 0

    scoreBoard.innerHTML = ""
}