export type Priority = "high" | "medium" | "low";

export type Todo = {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  isPinned: boolean;
  priority: Priority | null;
  dueDate: string | null;
  createdAt: string;
  updatedAt: string | null;
};

export type TodoState = {
  todos: Todo[];
  searchQuery: string;

  setSearchQuery: (query: string) => void;
  addTodo: (
    title: string,
    description: string,
    priority?: Priority | null,
    dueDate?: string | null,
  ) => void;
  updateTodo: (
    id: string,
    newTitle: string,
    newDescription: string,
    priority?: Priority | null,
    dueDate?: string | null,
  ) => void;
  toggleTodo: (id: string) => void;
  togglePinTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export type Theme = "light" | "dark";

export interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}
