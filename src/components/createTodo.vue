<template>
  <header>
    <h2>Create A todo</h2>
    <p>What's on your todo list?</p>
  </header>
  <section>
    <input type="text" placeholder="e.g make a video" />
    <div>
      <div class="category">
        <input type="radio" name="category" />
        <h4>Business</h4>
      </div>
      <div class="category">
        <input type="radio" name="category" />
        <h4>Personal</h4>
      </div>
    </div>
  </section>
</template>

<style scoped>
header {
  margin: 1rem 0rem;
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
section {
  width: 100%;
}

section input {
  border: none;
  outline: none;
  padding: 0 0.5rem;
  font-size: var(--font-body-medium);
  height: 40px;
  background-color: var(--color-background);
  width: 100%;
}

section > div {
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin: 0.5rem 0;
}

.category {
  background: red;
  height: 100px;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
}

.category h4 {
  margin: 0;
  font-weight: normal;
  font-size: var(--font-body-small);
}

.category input[type="radio"] {
  margin: 0;
  display: inline-flex;
  transform: scale(0.6); /* Adjust the scale value as needed */
}
</style>
