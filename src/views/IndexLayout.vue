<template>
  <Main></Main>
</template>
<script>
import Main from "@/components/index/Main.vue";
import {inject, watch} from "vue";
import {useDark} from "@vueuse/core";

export default {
  name:"IndexLayout",
  components:[Main],
  setup() {
    const isDarkMode= useDark();
    watch(
        () => isDarkMode,
        (newValue, oldValue) => {
          console.log(`Dark Mode changed from ${oldValue} to ${newValue}`);
        }
    );

    return {
      isDarkMode,
    };
  },
}
</script>
<style scoped>
.dark-mode {
  background-color: black;
  color: white;
}

.light-mode {
  background-color: white;
  color: black;
}
</style>