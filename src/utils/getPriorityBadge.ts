import type { Priority } from "../features/todos/types";

export function getPriorityBadge(priority: Priority) {
  switch (priority?.toLowerCase()) {
    case "high":
      return "bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400 border-red-200 dark:border-red-800";
    case "medium":
      return "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400 border-amber-200 dark:border-amber-800";
    case "low":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800";
    default:
      return null;
  }
}
