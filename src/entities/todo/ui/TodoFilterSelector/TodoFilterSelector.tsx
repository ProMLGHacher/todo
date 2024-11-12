import cls from './TodoFilterSelector.module.scss'
import { TodoFilter } from '../../model/types'
import { classNames } from '@/shared/lib/classNames'

type TodoFilterSelectorProps = {
    filter: TodoFilter
    setFilter: (filter: TodoFilter) => void
    style?: React.CSSProperties
}

export const TodoFilterSelector = ({ filter, setFilter, style }: TodoFilterSelectorProps) => {

    const handleFilterClick = (filter: TodoFilter) => {
        setFilter(filter)
    }

  return (
    <div className={cls.todoFilterSelector} style={style}>
        <button className={classNames(cls.button, {
            [cls.active]: filter === 'all'
        })} onClick={() => handleFilterClick('all')}>All</button>
        <button className={classNames(cls.button, {
            [cls.active]: filter === 'active'
        })} onClick={() => handleFilterClick('active')}>Active</button>
        <button className={classNames(cls.button, {
            [cls.active]: filter === 'completed'
        })} onClick={() => handleFilterClick('completed')}>Completed</button>
    </div>
  )
}
