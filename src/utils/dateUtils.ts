export function getDueDateStatus(dueDateString: string | null) {
  if (!dueDateString) return null;

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const due = new Date(dueDateString);
  const dueDateOnly = new Date(
    due.getFullYear(),
    due.getMonth(),
    due.getDate(),
  );

  if (dueDateOnly < today) {
    return { label: "Overdue ⚠️", color: "red" };
  } else if (dueDateOnly.getTime() === today.getTime()) {
    return { label: "Hari ini ⏰", color: "orange" };
  } else {
    return { label: due.toLocaleDateString("id-ID"), color: "gray" };
  }
}
