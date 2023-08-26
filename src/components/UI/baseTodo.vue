<template>
  <li>
    <div>
      <input type="Radio" :class="{ isBusiness: type == 'business' }" />
      <p>{{ title }}</p>
    </div>

    <button>Delete</button>
  </li>
</template>

<script>
export default {
  emits: ["onDelete"],
  props: {
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
    createdDate: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    onDelete(createdDate) {
      this.$emit("onDelete", [createdDate]);
    },
  },
};
</script>

<style scoped>
li {
  height: 55px;
  padding: 0 1rem;
  width: 100%;
  display: flex;
  flex-flow: row;
  margin-bottom: 1rem;
  background: var(--color-background);
  justify-content: space-between;
}

li div {
  align-items: center;
  display: flex;
}

li div p {
  margin-left: 0.5rem;
  font-size: var(--font-body-medium);
}

li div input[type="Radio"] {
  appearance: none;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  border: 2px solid var(--personal);
  box-shadow: var(--personal-glow);
}

li div input[type="Radio"].isBusiness {
  border: 2px solid var(--business);
  box-shadow: var(--business-glow);
}

li button {
  padding: 0 1rem;
  background-color: red;
  border-radius: 10%;
  border: none;
  font-size: var(--font-body-small);
  margin: 0.5rem 0;
  color: white;
  cursor: pointer;
}

li button:hover {
  filter: brightness(90%);
}
</style>
