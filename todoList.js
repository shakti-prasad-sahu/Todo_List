


// step-3 : getElement by id 

var searchElement = document.getElementById("main-Div")
var TodoCards = document.getElementById("Todo-Div")

// step-4 : create input and submit button and append to main-Div
var inputElement = document.createElement("input")
inputElement.placeholder = "Type-here"
inputElement.className = "input"
var buttonElement = document.createElement("input")
buttonElement.type = "button"
buttonElement.placeholder = "submit"
buttonElement.value = "submit"
buttonElement.className = "submitBotton"

searchElement.appendChild(inputElement)

searchElement.appendChild(buttonElement)

// step-5 : added click event to the submit button

buttonElement.addEventListener("click" , function(){
if(inputElement.value!=""){

 addItem(inputElement.value)

 inputElement.value=""
}else{
    alert("Input-Box is Empty")
}
})
// step-6 : call fuction to store the value inside the todo-cards
function addItem(search){
     

    // step-7 : create a div to store todoDiv
    var TodoDiv = document.createElement("div")
    TodoDiv.className = "todostyle"
     // step-8 : create a para inside todolist 
    var paraDiv = document.createElement("p")
    paraDiv.className = "parastyle"
    // step-10 : create a update input box
    var updateBox = document.createElement("input")
    updateBox.className ="updateBox"
    updateBox.placeholder = "update here"
    // step-10 : create a update button 
    var updateIcon = document.createElement("i")
    updateIcon.className ="far fa-file-edit"
    updateIcon.addEventListener("click" , function(){
      if(updateBox.value!= ""){
      paraDiv.innerText =  updateBox.value
      updateBox.value =""
    }else{
        alert("update-box is empty")
    }

    })
    // step-9 : add delete functionality
    var deleteIcon = document.createElement("i")
    deleteIcon.className = "far fa-trash-alt"
    deleteIcon.onclick = function(){
        TodoDiv.remove()
    }
    
    
    TodoDiv.appendChild(paraDiv)
    // step-10 : create a update input box & append inside the todoDiv
    TodoDiv.appendChild(updateBox)
    // step-10 : create a update button & append inside the todoDiv
    TodoDiv.appendChild(updateIcon)
    // step-9 : add delete functionality & append inside the todoDiv
    TodoDiv.appendChild(deleteIcon)

    // step-6.2 : todoDiv append inside the todocards
    TodoCards.appendChild(TodoDiv)
    // step-6.1 : give paraDiv inner text to search
    paraDiv.innerText = search
    
   
    }
    
 

 

















