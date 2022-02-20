class Todo
{
    constructor(todoValue, dateValue)
    {
        this.todoValue = todoValue;
        this.dateValue = dateValue.replace(/-/gi,'.');
    }

    
}