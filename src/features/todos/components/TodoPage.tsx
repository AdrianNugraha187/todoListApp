import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoPage() {
  const todos = useTodoStore((state) => state.todos);

  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

  const editingTodo = todos.find((todo) => todo.id === editingTodoId);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm editingTodo={editingTodo} setEditingTodoId={setEditingTodoId} />
      <TodoList todos={todos} setEditingTodoId={setEditingTodoId} />
    </div>
  );
}
