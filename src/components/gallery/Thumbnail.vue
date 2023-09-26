<template>
  <div class="thumbnail" @click="handleClick">
    <img :src="url" alt="Thumbnail Image" />
  </div>
</template>

<script>
export default {
  props: {
    url: String,
  },
  methods: {
    handleClick() {

      this.$emit('click', this.url);
    },
  },
};
</script>

<style scoped>

.thumbnail {
  cursor: pointer;
  margin: 10px;
}

.thumbnail img {
  width: 100px;
  height: auto;
}
</style>
