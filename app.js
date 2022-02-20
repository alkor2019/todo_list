var todoInInput = document.getElementById('todo-in-input');
var dateInInput = document.getElementById('date-in-input');
var addTodoBtn = document.getElementById('add-todo');

addEventListeners();

const ui = new UI();

function addEventListeners() {
    addTodoBtn.addEventListener("click", addNewTodo)

}

function addNewTodo(e) {




    var todoValue = todoInInput.value.trim();
    var dateValue = dateInInput.value;
    const todo = new Todo(todoValue,dateValue);
    var diff = dateDiff(dateValue);



    //   if(todoValue === "")
    //      alert ('Lütfen Görevinizi Boş Bırakmayınız.')
    //   else if(!diff)
    //      alert('Görevinizi en az bir gün önceden planlamalısınız.')
    //   else{
        ui.showTodoInfo(todo);
      //}
    
    e.preventDefault();
}


  function dateDiff(dateValue) {
        var d = new Date(dateValue.replace('-', ','))
        var s = new Date();
        if(d > s) return true;
        else return false;
    }

