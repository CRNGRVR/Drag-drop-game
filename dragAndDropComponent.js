let runner = document.querySelector('.runner')
runner.style.position = 'absolute'

let currentDroppable = null

runner.onmousedown = function(event){

  runner.style.zIndex = 1000

  document.body.append(runner)

  moveAt(event.pageX, event.pageY)

  function moveAt(pageX, pageY) {

    runner.style.left = pageX - runner.offsetWidth / 2 + 'px'
    runner.style.top = pageY - runner.offsetHeight / 2 + 'px'
  }

  function onMouseMove(event) {

    moveAt(event.pageX, event.pageY)

    runner.hidden = true
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
    runner.hidden = false

    if (!elemBelow) return

    let droppableBelow = elemBelow.closest('.droppable')

    if (currentDroppable != droppableBelow) {

      currentDroppable = droppableBelow

      if (currentDroppable) {
        enterDroppable(currentDroppable)
      }
    }


    function enterDroppable(current){
      if(current.id == "clear"){
        pass()
      }
      else if(current.id == "dng"){
        collisionObstacle()
      }
      else if(current.id == "restart"){
        restart()
      }
    }

    function collisionObstacle(){
      gameEnd()
    }
  }

  document.addEventListener('mousemove', onMouseMove)

  runner.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove)
    runner.onmouseup = null
  }

}