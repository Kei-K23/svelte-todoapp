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

<form on:submit|preventDefault={handleOnSubmit}>
  <input type="text" bind:value={newTodo} placeholder="Add a new todo..." />
  <button type="submit">Add todo</button>
</form>
