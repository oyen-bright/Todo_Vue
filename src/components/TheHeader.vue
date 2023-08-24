<template>
  <section class="content">
    <h1>What's Up,</h1>
    <input class="input" type="text" placeholder="Name Here" />
  </section>
</template>

<style scoped>
.content {
  width: 100%;
  height: 50px;
  display: flex;
  flex: 1 1 0%;
  align-items: center;
  flex-direction: row;
  margin-bottom: 0.5rem;
  justify-content: flex-start;
}

h1 {
  font-size: var(--font-title-medium);
  font-weight: 700;
}

.input {
  border: none;
  outline: none;
  font-weight: 700;
  padding-left: 0.2rem;
  margin: 0.2rem 0;
  font-size: var(--font-title-medium);
}
</style>
