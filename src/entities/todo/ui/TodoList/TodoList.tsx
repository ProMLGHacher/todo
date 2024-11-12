import { AnimatePresence, Reorder } from 'framer-motion'
import cls from './TodoList.module.scss'
import { Todo } from '../Todo/Todo'
import { TodoFilter, Todo as TodoType } from '../../model/types'
import { todosStore } from '../../model/todosStore'

type TodoListProps = {
    todos: TodoType[]
    filter: TodoFilter
}

export const TodoList = ({ todos, filter }: TodoListProps) => {

    const { reorderTodos } = todosStore()

    return (
        <Reorder.Group className={cls.todoList} values={todos} onReorder={filter === 'all' ? reorderTodos : () => {}}>
            <AnimatePresence>
                {todos.filter((todo) => filter === 'all' ? true : filter === 'active' ? !todo.completed : todo.completed).map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </AnimatePresence>
        </Reorder.Group>
    )
}
