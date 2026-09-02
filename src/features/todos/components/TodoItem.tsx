import React from "react";
import type { Todo } from "../types";
import { CheckCircle2, Circle, Edit3, Trash2 } from "lucide-react";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  setEditingTodoId: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function TodoItem({
  todo,
  onDelete,
  onToggle,
  setEditingTodoId,
}: Props) {
  return (
    <div className="group flex items-start justify-between gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-md dark:shadow-none transition-all duration-200">
      {/* Kolom Kiri: Checkbox & Konten Utama */}
      <div className="flex items-start gap-3.5 flex-1 min-w-0">
        {/* Tombol Toggle Status */}
        <button
          onClick={() => onToggle(todo.id)}
          className="mt-0.5 text-slate-300 dark:text-slate-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0 cursor-pointer"
          title={todo.isCompleted ? "Tandai Belum Selesai" : "Tandai Selesai"}
        >
          {todo.isCompleted ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
          ) : (
            <Circle className="w-5 h-5" />
          )}
        </button>

        {/* Detail Tugas */}
        <div className="space-y-1 overflow-hidden">
          <h3
            className={`text-base font-semibold leading-snug truncate transition-all ${
              todo.isCompleted
                ? "text-slate-400 dark:text-slate-500 line-through"
                : "text-slate-800 dark:text-white"
            }`}
          >
            {todo.title}
          </h3>

          {todo.description && (
            <p
              className={`text-sm leading-relaxed transition-all ${
                todo.isCompleted
                  ? "text-slate-300 dark:text-slate-600 line-through"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {todo.description}
            </p>
          )}

          {todo.createdAt && (
            <span className="inline-block text-[11px] text-slate-400 dark:text-slate-500 pt-1">
              {todo.createdAt}
            </span>
          )}
        </div>
      </div>

      {/* Kolom Kanan: Tombol Aksi (Edit & Delete) */}
      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={() => setEditingTodoId(todo.id)}
          className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700/60 transition-colors cursor-pointer"
          title="Edit Tugas"
        >
          <Edit3 className="w-4 h-4" />
        </button>

        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer"
          title="Hapus Tugas"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
