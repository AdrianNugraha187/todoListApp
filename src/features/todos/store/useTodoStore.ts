import { create } from "zustand";
import type { Todo, TodoState } from "../types";
import { createJSONStorage, persist } from "zustand/middleware";

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [] as Todo[],
      searchQuery: "",

      setSearchQuery: (query) =>
        set({
          searchQuery: query,
        }),

      addTodo: (title, description) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: crypto.randomUUID(),
              title,
              description,
              isCompleted: false,
              isPinned: false,
              createdAt: new Date().toISOString(),
              updatedAt: null,
            },
          ],
        })),

      updateTodo: (id, newTitle, newDescription) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? {
                  ...todo,
                  title: newTitle,
                  description: newDescription,
                  updatedAt: new Date().toISOString(),
                }
              : todo,
          ),
        })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
          ),
        })),

      togglePinTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todoItem) =>
            todoItem.id === id
              ? { ...todoItem, isPinned: !todoItem.isPinned }
              : todoItem,
          ),
        })),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
    }),
    {
      name: "todo-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
