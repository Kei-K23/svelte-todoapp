<script lang="ts">
  import { todos, type Todo } from "./todo-store";

  export let todo: Todo;
</script>

<li>
  {todo.text}
</li>
