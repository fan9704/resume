<template>
  <section class="about section " id="about">
    <h2 class="section-title">About</h2>

    <div class="about__container bd-grid">
      <div class="about__img">
        <img src="/images/about2.jpg" alt="">
      </div>

      <div>
        <h2 class="about__subtitle">I'am FKT</h2>
        <p class="about__text">National Yunlin University of Science and Technology Information Management Student. Major in Backend/Project Management.Currently prepare for master degree application</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name:"About",
}
</script>
<style scoped>
.about__container {
  row-gap: 2rem;
  text-align: center;
}

.about__subtitle {
  margin-bottom: var(--mb-2);
}

.about__img {
  justify-self: center;
}
.about__img img {
  width: 200px;
  border-radius: .5rem;
}
</style>