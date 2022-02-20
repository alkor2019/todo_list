class UI
{
    constructor()
    {
         this.todoList = document.getElementById('todo-list');

    }

    dateDiff(dateValue) {
        var d = new Date(dateValue)
        var s = new Date();
        if(d  > s) return true;
        else return false;
    }

    returnStringMessage(value)
    {
        var dateDiff = this.dateDiff(value);
        var result;
        var clr = "success";
        if(dateDiff) {
            result = "Beklemede";
            clr = "warning" 
          }
        else result = "Tamamlandı";

        return result;
    }

    showTodoInfo(todo)
    {  
        
          var  result = this.returnStringMessage(todo.dateValue);
          
        

       this.todoList.innerHTML +=
       `
       <tr class="fw-normal">
                   
       <td class="align-middle">
         <span >${todo.todoValue}</span >
       </td>
       <td class="align-middle">
       ${todo.dateValue}
       </td>
       <td class="align-middle ">
           <h6 class="mb-0 "><span class="badge  bg-success">${result}</span></h6>
         </td>
       <td class="align-middle">
         <button class="badge btn  bg-danger">Görevi Kaldır</button>
         </td>
     </tr>
       `
    }
}