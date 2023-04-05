setInterval(spawn, 1000)

setTimeout(sheduleMovement, 5000)



function sheduleMovement(){
    setInterval(move, 10)
}


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
                    <div class="clear"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                </div>
            `
        
        case 1:
            return `
                <div class="obstacle" style="left: ${shift}px">
                    <div class="droppable"></div>
                    <div class="clear"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                </div>
            `

        case 2:
            return `
                <div class="obstacle" style="left: ${shift}px">
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="clear"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                </div>
            `

        case 3:
            return `
                <div class="obstacle" style="left: ${shift}px">
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="clear"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                </div>
            `

        case 4:
            return `
                <div class="obstacle" style="left: ${shift}px">
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="clear"></div>
                    <div class="droppable"></div>
                </div>
            `
        case 5:
            return `
                <div class="obstacle" style="left: ${shift}px">
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="droppable"></div>
                    <div class="clear"></div>
                </div>
            `
    }
}