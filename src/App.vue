<template>
  <section class="scaffold">
    <the-header></the-header>
    <create-todo></create-todo>
    <base-fab icon="fa-solid fa-plus" background-color="gold"></base-fab>
  </section>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import CreateTodo from "./components/createTodo.vue";
export default {
  components: { TheHeader, CreateTodo },
};
</script>

<style>
.scaffold {
  position: relative;
  margin: auto;
  padding: 2rem 2rem;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  margin-top: 20px;
  margin-bottom: 20px;
  background: var(--color-white);
  height: 95vh;
  width: 30rem;
}
</style>
