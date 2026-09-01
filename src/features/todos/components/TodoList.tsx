import React from "react";
import { useTodoStore } from "../store/useTodoStore";
import TodoItem from "./TodoItem";
import type { Todo } from "../types";

interface Props {
  todos: Todo[];
  setEditingTodoId: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function TodoList({ todos, setEditingTodoId }: Props) {
  const onUpdate = useTodoStore((state) => state.updateTodo);
  const onToggle = useTodoStore((state) => state.toggleTodo);
  const onDelete = useTodoStore((state) => state.deleteTodo);

  return (
    <div>
      {todos.length === 0 ? (
        <p>Tidak ada tugas</p>
      ) : (
        todos.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todo={todoItem}
            onUpdate={onUpdate}
            onToggle={onToggle}
            onDelete={onDelete}
            setEditingTodoId={setEditingTodoId}
          />
        ))
      )}
    </div>
  );
}
