<template>
  <!--===== SKILLS =====-->
  <section class="skills section" id="skills">
    <h2 class="section-title">Skills</h2>

    <div class="skills__container bd-grid">
      <div>
        <h2 class="skills__subtitle">Profesional Skills</h2>
        <p class="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
        <div class="skills__data">
          <div class="skills__names">
            <i class='bx bxl-html5 skills__icon'></i>
            <span class="skills__name">HTML5</span>
          </div>
          <div class="skills__bar skills__html">

          </div>
          <div>
            <span class="skills__percentage">95%</span>
          </div>
        </div>
        <div class="skills__data">
          <div class="skills__names">
            <i class='bx bxl-css3 skills__icon'></i>
            <span class="skills__name">CSS3</span>
          </div>
          <div class="skills__bar skills__css">

          </div>
          <div>
            <span class="skills__percentage">85%</span>
          </div>
        </div>
        <div class="skills__data">
          <div class="skills__names">
            <i class='bx bxl-javascript skills__icon' ></i>
            <span class="skills__name">JAVASCRIPT</span>
          </div>
          <div class="skills__bar skills__js">

          </div>
          <div>
            <span class="skills__percentage">65%</span>
          </div>
        </div>
        <div class="skills__data">
          <div class="skills__names">
            <i class='bx bxs-paint skills__icon'></i>
            <span class="skills__name">UX/UI</span>
          </div>
          <div class="skills__bar skills__ux">

          </div>
          <div>
            <span class="skills__percentage">85%</span>
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
  name:"Skill"
}
</script>
<style scoped>
/* ===== SKILLS =====*/
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
  z-index: var(--z-back);
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
