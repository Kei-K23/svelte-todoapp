<script lang="ts">
  import { todos } from "./lib/todo-store";
  import TodoFilterList from "./lib/TodoFilterList.svelte";
  import TodoInput from "./lib/TodoInput.svelte";
</script>

<main class="h-screen bg-neutral-900 p-4 text-white">
  <div class="container mx-auto">
    <h1 class="text-rose-500 text-center text-xl md:text-3xl font-bold">
      Svelte TodoAPP
    </h1>
    <TodoInput />
    <TodoFilterList />
    <div class="max-w-xl mx-auto grid grid-cols-4 mt-3">
      <button
        class="bg-neutral-700 px-2 py-1 hover:bg-rose-500/80 transition-all hover:text-white/90"
        >All</button
      >
      <button
        class="bg-neutral-700 px-2 py-1 hover:bg-rose-500/80 transition-all hover:text-white/90"
        >Completed</button
      >
      <button
        class="bg-neutral-700 px-2 py-1 hover:bg-rose-500/80 transition-all hover:text-white/90"
        >Uncompleted</button
      >
      <button
        on:click={todos.clearAllCompleted}
        class="bg-neutral-700 px-2 py-1 hover:bg-rose-500/80 transition-all hover:text-white/90"
        >Clear completed</button
      >
    </div>
  </div>
</main>
