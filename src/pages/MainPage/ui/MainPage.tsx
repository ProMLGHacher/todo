import { CreateTodoView } from '@/features/createTodo'
import cls from './MainPage.module.scss'

import { Header } from '@/widgets/Header'
import { TodoListWithFiltersWidget } from '@/widgets/TodoListWithFiltersWidget'

export const MainPage = () => {
    return <div className={cls.mainPage}>
        <Header />
        <main className={cls.main}>
            <CreateTodoView style={{ transform: 'translateY(-50%)' }} />
            <TodoListWithFiltersWidget />
        </main>
    </div>
}