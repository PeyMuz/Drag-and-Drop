const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");
const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("text-input");
const todoList = document.getElementById("list1");
const del = document.querySelectorAll(".del-btn");

//for the delete button
for (const button of del){
button.addEventListener("click",function(){
    this.parentElement.remove();
});
}

//for the input
addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
   
    if (taskText=="") {
      return;
    }

    const newCard = document.createElement("div");

    newCard.classList.add("card");
    newCard.setAttribute("draggable", true);
    newCard.id = "card" + Date.now();
    newCard.textContent = taskText; 
    newCard.innerHTML = `<span>${taskText}</span>
                         <button class="del-btn">Delete</button>`;


    todoList.appendChild(newCard);

    newCard.addEventListener("dragstart", dragStart );
    newCard.addEventListener("dragend", dragEnd);
   
    const del = document.querySelectorAll(".del-btn");

        //for the delete button
        for (const button of del){
        button.addEventListener("click",function(){
            this.parentElement.remove();
        });
        }
   

    taskInput.value="";

}




for (const card of cards) {
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);

}


for(const list of lists) {
   list.addEventListener("dragover",dragOver);
   list.addEventListener("dragenter", dragEnter);
   list.addEventListener("dragleave", dragLeave);
   list.addEventListener("drop", dragDrop);
}

function dragStart(e) {
   // this allows the drop location to know which element is being moved when you release it
   e.dataTransfer.setData("text/plain",this.id)
}

function dragEnd(){

}


function dragOver(e) {
  // this line is important because by default, browsers don't allow you to drop eleelements onto other elements
  e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();

    this.classList.add("over");
}

function dragLeave(e){
    this.classList.remove("over");
}

function dragDrop(e){
    const id = e.dataTransfer.getData("text/plain")

    const card = document.getElementById(id);

    this.appendChild(card);

    this.classList.remove("over");
}