import React, { useEffect, useState } from "react";
import { useTodoStore } from "../store/useTodoStore";
import type { Todo } from "../types";
import { Plus, Save } from "lucide-react";

interface Props {
  editingTodo: Todo | undefined;
  setEditingTodoId: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function TodoForm({ editingTodo, setEditingTodoId }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = useTodoStore((state) => state.addTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description || "");
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTodo]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!title || !description) return;

    if (editingTodo) {
      updateTodo(editingTodo.id, title, description);
      setEditingTodoId(null);
    } else {
      addTodo(title, description);
    }

    setTitle("");
    setDescription("");
  }

  const handleCancel = () => {
    setEditingTodoId(null);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none p-6 transition-colors duration-200">
      {/* Form Header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {editingTodo ? "Edit Tugas" : "Tambah Tugas Baru"}
        </h3>
        {editingTodo && (
          <button
            type="button"
            onClick={handleCancel}
            className="text-xs font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
          >
            Batal Edit
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Title */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Judul Tugas
          </label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Masukkan judul tugas..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:bg-white dark:focus:bg-slate-900 transition"
          />
        </div>

        {/* Input Description */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Deskripsi
          </label>
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Masukkan deskripsi tugas..."
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:bg-white dark:focus:bg-slate-900 transition"
          />
        </div>

        {/* Submit & Action Buttons */}
        <div className="pt-2 flex items-center justify-end gap-3">
          {editingTodo && (
            <button
              type="button"
              onClick={handleCancel}
              className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium transition"
            >
              Batal
            </button>
          )}

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium text-sm shadow-md shadow-indigo-200 dark:shadow-none transition duration-200 cursor-pointer"
          >
            {editingTodo ? (
              <>
                <Save className="w-4 h-4" />
                <span>Simpan Perubahan</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Tambah Tugas</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
