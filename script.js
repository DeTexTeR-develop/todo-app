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
                    <div class="checkmark">
                        <img src="./assets/icon-check.svg" alt="Icon for check">
                    </div>
                </div>
                <div class="todoText">
                    ${item.Text}
                </div>
            </div>
        
        `
    })
    document.querySelector(".todoItems").innerHTML = itemsHTML;
}

getItems();

