import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { ListTodo } from "lucide-react";

export default function TodoPage() {
  const todos = useTodoStore((state) => state.todos);

  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

  const editingTodo = todos.find((todo) => todo.id === editingTodoId);

  return (
    <div className="w-full min-h-[calc(100vh-4rem)] bg-slate-50 dark:bg-slate-900 py-10 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Dashboard */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200 dark:shadow-none">
              <ListTodo className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Daftar Tugas
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Kelola aktivitas dan prioritas harianmu di sini.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 w-fit">
            <span>Total:</span>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold">
              {todos.length} Tugas
            </span>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full">
          <TodoForm
            key={editingTodo?.id || "new"}
            editingTodo={editingTodo}
            setEditingTodoId={setEditingTodoId}
          />
        </div>

        {/* List Section */}
        <div className="w-full">
          <TodoList todos={todos} setEditingTodoId={setEditingTodoId} />
        </div>
      </div>
    </div>
  );
}
