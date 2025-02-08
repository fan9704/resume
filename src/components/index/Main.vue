<template>
  <main class="l-main">
    <Home></Home>
    <About></About>
    <Skill></Skill>
    <Work></Work>
    <!-- <Contact></Contact> -->
  </main>
</template>
<script>
import Home from "@/components/index/Home.vue";
import About from "@/components/index/About.vue";
import Work from "@/components/index/Work.vue";
// import Contact from "@/components/index/Contact.vue";
import Skill from "@/components/index/Skill.vue";

export default {
  name:"Main",
  components:[Home,About,Work,Contact,Skill]
}
</script>
<style scoped>
</style>