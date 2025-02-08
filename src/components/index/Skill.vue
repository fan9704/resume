<template>
  <section class="skills section" id="skills">
    <h2 class="section-title">{{$t("skill.title")}}</h2>

    <div class="skills__container bd-grid">
      <div>
        <h2 class="skills__subtitle">{{$t("skill.subtitle")}}</h2>
        <p class="skills__text">{{$t("skill.text")}}</p>
        <div class="skills__data">
          <div class="skills__names">
            <i class='bx bxl-django skills__icon'></i>
            <span class="skills__name">Django</span>
          </div>
          <div class="skills__bar skills__html">

          </div>
          <div>
            <span class="skills__percentage">95%</span>
          </div>
        </div>
        <div class="skills__data">
          <div class="skills__names">
            <i class='bx bxl-spring-boot skills__icon'></i>
            <span class="skills__name">Spring Boot</span>
          </div>
          <div class="skills__bar skills__css">

          </div>
          <div>
            <span class="skills__percentage">85%</span>
          </div>
        </div>
        <div class="skills__data">
          <div class="skills__names">
            <i class='bx bxl-docker skills__icon' ></i>
            <span class="skills__name">Docker</span>
          </div>
          <div class="skills__bar skills__js">

          </div>
          <div>
            <span class="skills__percentage">85%</span>
          </div>
        </div>
        <div class="skills__data">
          <div class="skills__names">
            <i class='bx bxl-kubernetes skills__icon'></i>
            <span class="skills__name">Kubernetes</span>
          </div>
          <div class="skills__bar skills__ux">

          </div>
          <div>
            <span class="skills__percentage">65%</span>
          </div>
        </div>
      </div>

      <div>
        <img src="/images/work3.jpg" alt="" class="skills__img">
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name:"Skill",
}
</script>
<style scoped>
.skills__container {
  row-gap: 2rem;
  text-align: center;
}

.skills__subtitle {
  margin-bottom: var(--mb-2);
}

.skills__text {
  margin-bottom: var(--mb-4);
}

.skills__data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-weight: var(--font-semi);
  padding: .5rem 1rem;
  margin-bottom: var(--mb-4);
  border-radius: .5rem;
  box-shadow: 0px 4px 25px rgba(14, 36, 49, 0.15);
}

.skills__icon {
  font-size: 2rem;
  margin-right: var(--mb-2);
  color: var(--first-color);
}

.skills__names {
  display: flex;
  align-items: center;
}

.skills__bar {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: var(--first-color);
  height: .25rem;
  border-radius: .5rem;
  z-index: 10;
}

.skills__html {
  width: 95%;
}

.skills__css {
  width: 85%;
}

.skills__js {
  width: 65%;
}

.skills__ux {
  width: 85%;
}

.skills__img {
  border-radius: .5rem;
}
</style>
