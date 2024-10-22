import { writable } from "svelte/store";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const createTodoStore = () => {
  const { update, subscribe } = writable<Todo[]>([]);

  return {
    subscribe,
    addTodo: (text: string) =>
      update((todos) => [
        { id: `${todos.length}-${Date.now()}`, text, completed: false },
        ...todos,
      ]),
    toggleTodo: (id: string) =>
      update((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      ),
    removeTodo: (id: string) =>
      update((todos) => todos.filter((todo) => todo.id !== id)),
    clearAllCompleted: () =>
      update((todos) => todos.filter((todo) => !todo.completed)),
  };
};

export const todos = createTodoStore();
