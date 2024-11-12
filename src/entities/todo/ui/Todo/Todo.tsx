import { Checkbox } from '@/shared/checkbox'
import cls from './Todo.module.scss'
import { Todo as TodoType } from '../../model/types'
import { todosStore } from '../../model/todosStore'
import { GoTrash } from 'react-icons/go'
import { classNames } from '@/shared/lib/classNames'
import { Reorder, useWillChange } from 'framer-motion'

type TodoProps = {
    todo: TodoType
}

export const Todo = ({ todo }: TodoProps) => {
    const { toggleTodo, removeTodo } = todosStore()

    const willChange = useWillChange()

    return (
        <Reorder.Item
            key={todo.id}
            value={todo}
            style={{ willChange, position: "relative" }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{
                scale: 1,
                opacity: 1,
                transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.3
                },
            }}
            exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
            role="button"
            className={cls.todo}
            onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                toggleTodo(todo.id)
            }}
        >
            <div className={cls.todoContent}>
                <Checkbox checked={todo.completed} />
                <span className={classNames(cls.todoTitle, { [cls.todoTitleCompleted]: todo.completed })}>{todo.title}</span>
            </div>
            <button className={cls.todoRemove} onClick={() => removeTodo(todo.id)}><GoTrash /></button>
        </Reorder.Item>
    )
}
