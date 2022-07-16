const submit = document.querySelector("#form")
const todoInput = document.querySelector("#inputInTodo");

submit.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(todos.status);
}) 


function getItems(){
    db.collection("todo-items").onSnapshot((snapshot)=>{
        console.log(snapshot);
        let items = [];
        snapshot.docs.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data()
            })
        });
        generateItems(items);
    })
}


function generateItems(items){

    let itemsHTML = "";
    items.forEach((item) => {
        console.log(item);
        itemsHTML += `
            <div class="todoItem" >
                <div class="check">
                    <div data-id = "${item.id}" class="checkmark ${item.status == "completed" ? "checked" : ""}">
                        <img src="./assets/icon-check.svg" alt="Icon for check">
                    </div>
                </div>
                <div class="todoText ${item.status == "completed" ? "checked" : ""}">
                    ${item.Text}
                </div>
            </div>
        
        `
    })
    document.querySelector(".todoItems").innerHTML = itemsHTML;
    createEventListeners();
}


function createEventListeners(){
    let todoCheckMarks = document.querySelectorAll(".todoItem .checkmark")
    todoCheckMarks.forEach((checkmark)=>{
        checkmark.addEventListener('click', function(){
            markCompleted(checkmark.dataset.id);
        })
    })
}


function markCompleted(id){
    // coming from a database
   let itemDb = db.collection("todo-items").doc(id)
    itemDb.get().then(function(doc){
        if(doc.exists){
            let status = doc.data().status;
            if(status == "active"){
                itemDb.update({
                    status:"completed"
                })
            }else if(status == "completed"){
                itemDb.update({
                    status: "active"
                })
            }
        }
    })
}
getItems();

