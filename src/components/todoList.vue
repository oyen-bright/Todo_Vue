<template>
  <section>
    <p>Todo list</p>
    <ul>
      <todo-tile
        v-for="(todo, index) in tasks"
        :key="index"
        :title="todo.title"
        :is-completed="todo.done"
        :type="todo.category"
        :created-date="todo.createdDate"
        @click="deleteTodo(todo.createdDate)"
      ></todo-tile>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["tasks"],
  methods: {
    deleteTodo(createdData) {
      this.$emit("onDelete", createdData);
    },
  },
};
</script>

<style scoped>
section p {
  color: var(--color-grey);
  text-transform: uppercase;
  margin-bottom: 0.5rem;

  font-size: var(--font-body-small);
}
</style>

<style scoped>
ul {
  list-style: none;
}
</style>
