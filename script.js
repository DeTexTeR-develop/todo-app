const submit = document.querySelector("#form")
const todoInput = document.querySelector("#inputInTodo");
const todoItemList  = document.querySelector("#todoItems");


submit.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(todoInput.value);
    db.collection("todo-items").add({
        Text: todoInput.value,
        status : "active"
    })
    todoInput.value = "";
    
}) 


