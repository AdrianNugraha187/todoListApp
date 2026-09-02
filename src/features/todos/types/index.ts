type Priority = {
  priority: "high" | "medium" | "low";
};

export type Todo = {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  isPinned: boolean;
  priority: Priority;
  createdAt: string;
  updatedAt: string | null;
};

export type TodoState = {
  todos: Todo[];
  searchQuery: string;

  setSearchQuery: (query: string) => void;
  addTodo: (title: string, description: string) => void;
  updateTodo: (id: string, newTitle: string, newDescription: string) => void;
  toggleTodo: (id: string) => void;
  togglePinTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export type Theme = "light" | "dark";

export interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}
