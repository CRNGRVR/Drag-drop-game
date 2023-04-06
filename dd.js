//  Игровой объект
let runner = document.querySelector('.runner')
runner.style.position = 'absolute'

let currentDroppable = null

//  Идентификатор заведённого таймера
let mouseDownID = -1


//  Глобальная переменная для событий.
//  Содержит в себе координаты курсора.
//
//  Обновляется при движении мышью с зажатой кнопкой,
//  вызывается для движения объекта и проверки столкновения.
let globalEvent = null


//  Эти два события нужны для получения третьего -
//  события удержания кнопки мыши
function mousedown(event){
    if(mouseDownID == -1) mouseDownID = setInterval(whileMouseDown, 10);
    globalEvent = event
}

function mouseup(event){
    if(mouseDownID != -1){
        clearInterval(mouseDownID)
        mouseDownID = -1
    }
}


function whileMouseDown(){

    //  Не знаю, зачем это здесь
    runner.style.zIndex = 1000
    document.body.append(runner)

    moveAt(globalEvent.pageX, globalEvent.pageY)

    //  Следование объекта за курсором + сдвижение объекта
    //  в середину курсора
    function moveAt(pageX, pageY) {
        runner.style.left = pageX - runner.offsetWidth / 2 + 'px'
        runner.style.top = pageY - runner.offsetHeight / 2 + 'px'
    }

    //  Получение элемента находящегося под объектом
    runner.hidden = true
    let elemBelow = document.elementFromPoint(globalEvent.clientX, globalEvent.clientY)
    runner.hidden = false

    //  Выход, если курсор за окном
    if (!elemBelow) return

    let droppableBelow = elemBelow.closest('.droppable')

    if (currentDroppable != droppableBelow) {

      currentDroppable = droppableBelow

      if (currentDroppable) {
        enterDroppable(currentDroppable)
      }
    }


    function enterDroppable(current){

      //  Попадание в пустую область
      if(current.id == "clear"){
        pass()
      }
      //  Попадание в препядствие
      else if(current.id == "dng"){
        collisionObstacle()
      }
      //  Попадане в элемент перезагрузки
      else if(current.id == "restart"){
        restart()
      }
    }
}


function onmousemove(event){
    //  Если кнопка не нажата, ничего не происходит
    if(mouseDownID == -1) return
    globalEvent = event
}


runner.addEventListener("mousedown", mousedown)
runner.addEventListener("mouseup", mouseup)
document.addEventListener('mousemove', onmousemove)