


document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Please enter a magical word!")
        
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
         <span id="taskname">
         ${document.querySelector('#list-item-input').value}
         </span>
         
         <button class="delete">
         
         </button>
         
         </div>
         
         `

        let current_tasks = document.querySelectorAll(".delete")
        for (let i = 0; i < current_tasks.length; i++) {
         current_tasks[i].onclick = function(){
             this.parentNode.remove()
    }
}

    }
}






document.getElementsByClassName = ("task").addEventListener("click")


