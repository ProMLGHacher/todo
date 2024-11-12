import { create } from "zustand";
import { TodoId, TodosStore } from "./types";
import { createJSONStorage, persist } from "zustand/middleware";

export const todosStore = create<TodosStore>()(
    persist(
        (set) => ({
            todos: [],
            addTodo: (todo) => {
                const date = Date.now()
                set(state => ({ todos: [{ id: date.toString() as TodoId, createdAt: date, ...todo }, ...state.todos] }))
            },
            toggleTodo: (id) => set((state) => ({ todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo) })),
            removeTodo: (id) => set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) })),
            reorderTodos: (todos) => set({ todos }),
        }),
        { name: 'todos', storage: createJSONStorage(() => localStorage) }
    )
)
