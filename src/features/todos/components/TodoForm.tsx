import React, { useEffect, useState } from "react";
import { useTodoStore } from "../store/useTodoStore";
import type { Todo } from "../types";

interface Props {
  editingTodo: Todo | undefined;
  setEditingTodoId: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function TodoForm({ editingTodo, setEditingTodoId }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = useTodoStore((state) => state.addTodo);

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTodo]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!title || !description) return;

    addTodo(title, description);

    setTitle("");
    setDescription("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Input Title: </label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <div>
          <label>Input Description:</label>
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
