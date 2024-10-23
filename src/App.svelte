<script lang="ts">
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
  </div>
</main>
