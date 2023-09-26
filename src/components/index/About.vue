<template>
  <section class="about section " id="about">
    <h2 class="section-title">{{$t("about.title")}}</h2>

    <div class="about__container bd-grid">
      <div class="about__img">
        <img src="/images/about2.jpg" alt="">
      </div>

      <div>
        <h2 class="about__subtitle">{{$t("about.subtitle")}}</h2>
        <p class="about__text">{{$t("about.text")}}</p>
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