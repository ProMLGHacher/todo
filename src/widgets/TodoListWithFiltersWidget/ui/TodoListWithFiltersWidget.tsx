import { TodoFilter, TodoList, todosStore } from '@/entities/todo'
import { TodoFilterSelector } from '@/entities/todo'
import cls from './TodoListWithFiltersWidget.module.scss'
import { useState } from 'react'
import { ImFilesEmpty } from 'react-icons/im'

export const TodoListWithFiltersWidget = ({ style }: { style?: React.CSSProperties }) => {
    const { todos } = todosStore()
    const [filter, setFilter] = useState<TodoFilter>('all')

    if (todos.length === 0) return <div className={cls.empty}>
        <ImFilesEmpty style={{ fontSize: '48px' }} />
        <p style={{ fontSize: '24px' }}>No todos</p>
    </div>

    return (
        <div className={cls.todoListWithFiltersWidget} style={style}>
            <TodoFilterSelector filter={filter} setFilter={setFilter} />
            <TodoList todos={todos} filter={filter} />
        </div>
    )
}
