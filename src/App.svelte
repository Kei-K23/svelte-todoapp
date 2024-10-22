<script lang="ts">
  import TodoFilterList from "./lib/TodoFilterList.svelte";
  import TodoInput from "./lib/TodoInput.svelte";
</script>

<main class="h-screen bg-neutral-800 p-4">
  <div class="container mx-auto">
    <h1 class="text-orange-400 text-center text-xl md:text-3xl font-bold">
      Svelte TodoAPP
    </h1>
    <TodoInput />
    <TodoFilterList />
  </div>
</main>
