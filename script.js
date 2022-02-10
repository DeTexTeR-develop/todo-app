const submit = document.querySelector("#form")
const todoInput = document.querySelector("#inputInTodo");


submit.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(todoInput.value);
    todoInput.value = "";
}) 


