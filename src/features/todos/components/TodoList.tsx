import React, { useMemo } from "react";
import { useTodoStore } from "../store/useTodoStore";
import TodoItem from "./TodoItem";
import type { Todo } from "../types";
import { ClipboardList } from "lucide-react";

interface Props {
  todos: Todo[];
  setEditingTodoId: React.Dispatch<React.SetStateAction<string | null>>;
}

const priorityWeight: Record<string, number> = {
  high: 3,
  medium: 2,
  low: 1,
};

export default function TodoList({ todos, setEditingTodoId }: Props) {
  const searchQuery = useTodoStore((state) => state.searchQuery);
  const setSearchQuery = useTodoStore((state) => state.setSearchQuery);
  const onToggle = useTodoStore((state) => state.toggleTodo);
  const onDelete = useTodoStore((state) => state.deleteTodo);
  const togglePinTodo = useTodoStore((state) => state.togglePinTodo);

  const displayedTodos = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return todos
      .filter((todo) => {
        if (!query) return true;
        const matchTitle = todo.title.toLowerCase().includes(query);
        const matchDescription = todo.description.toLowerCase().includes(query);
        return matchTitle || matchDescription;
      })
      .sort((a, b) => {
        if (a.isPinned !== b.isPinned) {
          return Number(b.isPinned) - Number(a.isPinned);
        }

        const weightA = a.priority ? priorityWeight[a.priority] : 0;
        const weightB = b.priority ? priorityWeight[b.priority] : 0;

        return weightB - weightA;
      });
  }, [searchQuery, todos]);

  return (
    <div className="w-full max-w-xl mx-auto space-y-3">
      <div>
        <input
          type="text"
          placeholder="Cari todo..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {displayedTodos.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 text-center transition-colors duration-200">
          <div className="p-3 bg-indigo-50 dark:bg-slate-700/50 rounded-full text-indigo-500 dark:text-indigo-400 mb-3">
            <ClipboardList className="w-8 h-8" />
          </div>
          <h4 className="text-base font-semibold text-slate-800 dark:text-white mb-1">
            Belum Ada Tugas
          </h4>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
            Daftar tugasmu masih kosong. Tambahkan tugas baru di atas untuk
            mulai produktif!
          </p>
        </div>
      ) : (
        /* Daftar Items */
        <div className="flex flex-col gap-3">
          {displayedTodos.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              todo={todoItem}
              onToggle={onToggle}
              onDelete={onDelete}
              setEditingTodoId={setEditingTodoId}
              togglePinTodo={togglePinTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
}
