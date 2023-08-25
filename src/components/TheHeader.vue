<template>
  <section class="content">
    <h1>What's Up,</h1>
    <input class="input" type="text" placeholder="Name Here" v-model="name" />
  </section>
</template>

<script>
export default {
  emits: ["name-listener"],
  props: ["userName"],
  // data() {
  //   return {
  //     name: this.userName,
  //   };
  // },
  // props: {
  //   updatedName: {
  //     required: true,
  //   },
  // },
  // methods: {
  //   emitName(){
  //     this.$emit('name-listener', this.name)
  //   }
  // },
  computed: {
    name: {
      get() {
        return this.userName;
      },
      set(newValue) {
        this.$emit("name-listener", newValue);
      },
    },
  },

  // watch: {
  //   name: function (value) {
  //     this.$emit("name-listener", value);
  //   },
  // },
};
</script>

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
