import type { Todo } from "../types";

interface Props {
  todo: Todo;
  onUpdate: (id: string, newTitle: string, newDescription: string) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  setEditingTodoId: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function TodoItem({
  todo,
  onDelete,
  onToggle,
  onUpdate,
  setEditingTodoId,
}: Props) {
  return (
    <ul>
      {todo.id}
      <li>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <p>{todo.createdAt}</p>
        <div>
          <button onClick={() => setEditingTodoId(todo.id)}>Edit</button>
          <button onClick={() => onToggle(todo.id)}>Finish</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
      </li>
    </ul>
  );
}
