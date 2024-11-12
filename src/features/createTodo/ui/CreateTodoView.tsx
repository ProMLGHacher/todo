import { Input } from '@/shared/ui/input'
import cls from './CreateTodoView.module.scss'
import { Button } from '@/shared/ui/button'
import PlusIcon from '@/shared/assets/plus.svg?react'
import { useState } from 'react'
import { todosStore } from '@/entities/todo'

export const CreateTodoView: React.FC<React.HTMLAttributes<HTMLFormElement>> = (props) => {
    const [todo, setTodo] = useState('')
    const { addTodo } = todosStore()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!todo.trim()) return
        addTodo({
            title: todo,
            completed: false
        })
        setTodo('')
    }

  return (
        <form className={cls.createTodoView} onSubmit={handleSubmit} {...props}>
            <Input placeholder='Create a new todo...' onChange={handleChange} value={todo} />
            <Button>Create <PlusIcon style={{ marginLeft: '8px' }} /></Button>
        </form>
    )
}
