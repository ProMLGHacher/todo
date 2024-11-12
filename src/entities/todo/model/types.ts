
export type TodoId = Brand<string, 'TodoId'>

export type Todo = {
    id: TodoId;
    title: string;
    completed: boolean;
    createdAt: number;
}

export type TodoFilter = 'all' | 'active' | 'completed'

export type TodosActions = {
    addTodo: (todo: Omit<Todo, 'id' | 'createdAt'>) => void;
    toggleTodo: (id: TodoId) => void;
    removeTodo: (id: TodoId) => void;
    reorderTodos: (todos: Todo[]) => void;
}


export type TodosStore = {
    todos: Todo[];
} & TodosActions
