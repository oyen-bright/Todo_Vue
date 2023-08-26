<template>
  <section class="scaffold">
    <the-header @name-listener="updateName" :user-name="username"></the-header>
    <create-todo @todo-listener="updateTodo"></create-todo>
    <todo-list :tasks="tasks" @on-delete="deleteTodo"></todo-list>
    <base-fab icon="fa-solid fa-plus" background-color="gold"></base-fab>
  </section>
</template>

<script>
const StorageKeys = {
  username: "user-name",
  todo: "todo-list",
};

import TheHeader from "./components/TheHeader.vue";
import CreateTodo from "./components/createTodo.vue";
import todoList from "./components/todoList.vue";
export default {
  components: { TheHeader, CreateTodo, todoList },

  data() {
    return {
      username: "",
      tasks: [],
    };
  },

  watch: {
    tasks: function (value) {
      this.writeToLocalStorage(StorageKeys.todo, value);
    },
  },

  methods: {
    updateName(name) {
      this.writeToLocalStorage(StorageKeys.username, name);
    },
    updateTodo(newTodo) {
      this.tasks = [newTodo, ...this.tasks];
    },

    deleteTodo(createdDate) {
      this.tasks = this.tasks.filter((x) => x.createdDate != createdDate);
    },
    writeToLocalStorage(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
    },
    readFromLocalStorage(key) {
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch (error) {
        return null;
      }
    },
  },

  mounted() {
    this.username = this.readFromLocalStorage(StorageKeys.username) ?? "";
    this.tasks = this.readFromLocalStorage(StorageKeys.todo) ?? [];
  },
};
</script>

<style>
.scaffold {
  margin: auto;
  padding: 2rem 1.5rem;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  margin-top: 20px;
  margin-bottom: 20px;
  background: var(--color-white);
  min-height: 95vh;
  width: 30rem;
}
</style>
