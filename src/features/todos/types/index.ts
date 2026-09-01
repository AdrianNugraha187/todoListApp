export type Todo = {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string | null;
};

export type TodoState = {
  todos: Todo[];

  addTodo: (title: string, description: string) => void;
  updateTodo: (id: string, newTitle: string, newDescription: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};
