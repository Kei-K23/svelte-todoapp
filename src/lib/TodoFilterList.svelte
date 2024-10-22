<script lang="ts">
  import { todos } from "./todo-store";
  import TodoItem from "./TodoItem.svelte";
</script>

<ul>
  {#each $todos as todo (todo.id)}
    <TodoItem {todo} />
  {/each}
</ul>
