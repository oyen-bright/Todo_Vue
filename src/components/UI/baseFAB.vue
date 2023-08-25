<template>
  <div class="fab-container">
    <div class="fab-content" :style="{ background: backgroundColor }">
      <i :class="icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: false,
      default: "red",
    },
  },
};
</script>

<style scoped>
.fab-container {
  position: Fixed;
  bottom: 5%;
  right: 4%;
  cursor: pointer;
}

.fab-content {
  width: 60px;
  height: 60px;
  display: grid;
  justify-content: center;
  align-content: center;
  border-radius: 100%;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.03);
}

.fab-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  transform: scale(1);
  transform-origin: center;
  background-color: rgba(128, 128, 128, 0.135);
  opacity: 0;

  transition: opacity 0.5s ease-in-out, transform 1s ease-in-out;
}

.fab-content:hover::before {
  transform: scale(1.2);
  opacity: 1;
}
</style>
