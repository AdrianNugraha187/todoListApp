import React from "react";
import type { Todo } from "../types";
import { CheckCircle2, Circle, Edit3, Trash2, Pin } from "lucide-react";
import { formattedDate } from "../../../utils/formattedDate";
import { getDueDateStatus } from "../../../utils/dateUtils";
import { getPriorityBadge } from "../../../utils/getPriorityBadge";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  setEditingTodoId: React.Dispatch<React.SetStateAction<string | null>>;
  togglePinTodo: (id: string) => void;
}

export default function TodoItem({
  todo,
  onDelete,
  onToggle,
  setEditingTodoId,
  togglePinTodo,
}: Props) {
  const status = getDueDateStatus(todo.dueDate);

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
          <div className="flex items-center gap-2 flex-wrap">
            <h3
              className={`text-base font-semibold leading-snug truncate transition-all ${
                todo.isCompleted
                  ? "text-slate-400 dark:text-slate-500 line-through"
                  : "text-slate-800 dark:text-white"
              }`}
            >
              {todo.title}
            </h3>

            {/* Render Badge HANYA jika ada priority */}
            {todo.priority && getPriorityBadge(todo.priority) && (
              <span
                className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${getPriorityBadge(
                  todo.priority,
                )}`}
              >
                {todo.priority}
              </span>
            )}
          </div>

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
          {status && (
            <p
              className={`text-[11px] pt-1 ${
                todo.isCompleted
                  ? "text-slate-300 dark:text-slate-600 line-through"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              <span className="font-medium">
                {todo.dueDate && formattedDate(todo.dueDate)}
              </span>
            </p>
          )}

          {todo.createdAt && (
            <p className="text-[11px] text-slate-400 dark:text-slate-500 pt-0.5">
              Dibuat: {formattedDate(todo.createdAt)}
            </p>
          )}
        </div>
      </div>

      {/* Kolom Kanan: Tombol Aksi (Edit & Delete) */}
      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={() => togglePinTodo(todo.id)}
          className={`p-2 rounded-lg transition-all duration-300 ease-in-out active:scale-75 cursor-pointer ${
            todo.isPinned
              ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-slate-700/60"
              : "text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700/60"
          }`}
        >
          <Pin
            className={`w-4 h-4 transition-transform duration-300 ease-out ${
              todo.isPinned
                ? "rotate-45 fill-current scale-110"
                : "rotate-0 scale-100"
            }`}
          />
        </button>
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
