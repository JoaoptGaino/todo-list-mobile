interface Todo{
    text:string;
    complete:boolean;
}

type handleTodo = (selectedTodo: Todo) => void;
type AddTodo = (text:string) => void;