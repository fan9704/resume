<template>
  <!--===== ABOUT =====-->
  <section class="about section " id="about">
    <h2 class="section-title">About</h2>

    <div class="about__container bd-grid">
      <div class="about__img">
        <img src="/images/about2.jpg" alt="">
      </div>

      <div>
        <h2 class="about__subtitle">I'am FKT</h2>
        <p class="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>
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
/* ===== ABOUT =====*/
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