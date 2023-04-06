//  Поле, включает только преграды
let board = document.querySelector('.gameboard')
board.style.position = 'absolute'

//  Смещение всего игрового поля влево.
//  Увеличивается каждый момент времени.
let pos = 0

//  Смещение преграды относительно начала координат.
//  Увеличивается с появлением каждой новой преграды.
let shift = 0

function spawn(){
    board.innerHTML += getObstacle()
}

function move(){

    board.style.left = `${pos}px`
    pos -= 1
}

//  Функция возвращает линию преград с пропуском в случайном месте
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