<script lang="ts">
  import { todos, type Todo } from "./todo-store";

  export let todo: Todo;
</script>

<li
  class={`flex items-center justify-between bg-neutral-700 px-2 py-1 rounded-md hover:bg-neutral-800 cursor-pointer transition-all ${todo.completed && "hover:bg-neutral-800 bg-neutral-800 cursor-default"}`}
>
  <span class={`${todo.completed && "line-through text-white/90"}`}>
    {todo.text}
  </span>
  <div class="flex items-center gap-x-2">
    <input
      type="checkbox"
      on:change={() => todos.toggleTodo(todo.id)}
      class="border-none outline-none rounded-md"
    />
    <button on:click={() => todos.removeTodo(todo.id)}>🗑️</button>
  </div>
</li>
