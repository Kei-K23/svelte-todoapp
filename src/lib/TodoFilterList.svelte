<script lang="ts">
  import { todos } from "./todo-store";
  import TodoItem from "./TodoItem.svelte";
</script>

<ul class="max-w-xl mx-auto mt-4 space-y-2 overflow-y-auto max-h-[500px]">
  {#each $todos as todo (todo.id)}
    <TodoItem {todo} />
  {/each}
</ul>
