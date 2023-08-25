<template>
  <header>
    <h2>Create A todo</h2>
    <p>What's on your todo list?</p>
  </header>
  <form @submit.prevent="addTodo" ref="form">
    <section>
      <input
        type="text"
        placeholder="e.g make a video"
        class="todo-text"
        ref="todoTitle"
        required
      />
      <div class="category-container">
        <p>Pick a category</p>
        <label class="category">
          <input
            type="radio"
            name="category"
            required
            class="business"
            ref="radioBusiness"
          />
          <h4>Business</h4>
        </label>
        <label class="category">
          <input
            type="radio"
            required
            name="category"
            class="business personal"
          />
          <h4>Personal</h4>
        </label>
      </div>
      <button type="submit">Add Todo</button>
    </section>
  </form>
</template>

<script>
export default {
  emits: ["todo-listener"],
  methods: {
    getSelectedCategory() {
      if (this.$refs.radioBusiness.checked) {
        return "business";
      } else {
        return "personal";
      }
    },
    addTodo() {
      const todoTitle = this.$refs.todoTitle;
      this.$emit("todo-listener", {
        title: todoTitle.value,
        category: this.getSelectedCategory(),
        done: false,
        editable: false,
        createdAt: new Date().getTime(),
      });
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
}

/* HEADER TEXT  */
header {
  margin-bottom: 1rem;
}
header h2 {
  text-transform: uppercase;
  margin: 0;
  font-size: var(--font-title-small);
  font-weight: bold;
  color: var(--color-grey);
}

header p {
  margin: 0.3rem 0;
  color: var(--color-grey);
  font-size: var(--font-body-small);
}

/* INPUT TEXT - TODO TITLE */
.todo-text {
  border: none;
  outline: none;
  padding: 0 0.5rem;
  font-size: var(--font-body-medium);
  height: 50px;
  background-color: var(--color-background);
  width: 100%;
  margin-bottom: 1rem;
}

/* INPUT RADIO - TODO CATEGORY */
.category-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-gap: 1rem; */
  grid-column-gap: 1rem;
  margin-bottom: 1rem;
}
.category {
  height: 100px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
}
.category-container > p {
  grid-column: 1/-1;
  color: var(--color-grey);
  margin-bottom: 0.5rem;
  font-size: var(--font-body-small);
}

.category h4 {
  margin: 0;
  width: 100%;
  text-align: center;
  font-weight: normal;
  font-size: var(--font-body-small);
}

.business:checked {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  opacity: 1;
  background-color: gold;
  box-shadow: var(--business-glow);
  border-radius: 50%;
  transition: 0.2s ease-in-out;
}

.business.personal:checked {
  display: block;
  width: 20px;
  height: 20px;
  opacity: 1;
  background-color: gold;
  box-shadow: var(--personal-glow);
  border-radius: 50%;
  transition: 0.2s ease-in-out;
}
.category input[type="radio"] {
  appearance: none;
  cursor: pointer;
}

.business {
  width: 20px;
  height: 20px;
  border: 2px solid var(--business);
  box-shadow: var(--business-glow);
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}
.business.personal {
  border: 2px solid var(--personal);
  box-shadow: var(--personal-glow);
}

/* BUTTON SUBMIT - ADD TODO */
button[type="Submit"] {
  width: 100%;
  background: var(--color-add-todo);
  font-size: var(--font-body-small);
  cursor: pointer;
  height: 50px;
  margin: 0;
  border: none;
  outline: none;
  margin-bottom: 1rem;
}

button[type="Submit"]:hover {
  filter: brightness(90%);
  background: var(--color-add-todo);
}
</style>
