<script lang="ts">
  import { todos } from "./todo-store";

  let newTodo = "";

  const handleOnSubmit = () => {
    if (newTodo.trim()) {
      todos.addTodo(newTodo.trim());
      newTodo = "";
    }
  };
</script>

<div class="max-w-xl flex items-center justify-center mt-8 mx-auto">
  <form
    on:submit|preventDefault={handleOnSubmit}
    class="w-full flex items-center gap-2"
  >
    <input
      type="text"
      bind:value={newTodo}
      placeholder="Add a new todo..."
      class="outline-none px-3 py-1 rounded-md border-rose-600 border bg-neutral-900 flex-1"
    />
    <button
      type="submit"
      class="bg-neutral-700 px-2 py-1 rounded-md hover:bg-neutral-800 transition-all hover:text-white/90"
      >Add todo</button
    >
  </form>
</div>
