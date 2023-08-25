<template>
  <section>
    <p>Todo list</p>

    <ul>
      <todo-tile v-for="index in 100" :key="index"></todo-tile>
    </ul>
  </section>
</template>

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
