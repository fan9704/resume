<template>
  <footer class="footer">
    <p class="footer__title">Gang-Ting,Fan FKT</p>
    <div class="footer__social">
      <a href="mailto:gangtingfan0207@gmail.com" class="footer__icon" target="_blank"><i class='bx bxs-envelope' ></i></a>
      <a href="https://github.com/fan9704/" class="footer__icon" target="_blank"><i class='bx bxl-github' ></i></a>
      <a href="https://www.facebook.com/tim.frank.969/" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
      <a href="https://www.instagram.com/cxz123499/" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
      <a href="https://www.linkedin.com/in/gang-ting-fan-95885920a/" class="footer__icon"><i class='bx bxl-linkedin' ></i></a>
    </div>
    <p class="footer__copy">&#169; {{$t("footer.copyRight")}}</p>
  </footer>

</template>
<script setup>
import {useDark, useToggle} from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<script>
export default {
  name:"Footer"
}
</script>
<style>
.dark {
  background: #16171d;
  color: #fff;
}
</style>
<style>
.footer {
  background-color: var(--second-color);
  color: #fff;
  text-align: center;
  font-weight: var(--font-semi);
  padding: 2rem 0;
}

.footer__title {
  font-size: 2rem;
  margin-bottom: var(--mb-4);
}

.footer__social {
  margin-bottom: var(--mb-4);
}

.footer__icon {
  font-size: 1.5rem;
  color: #fff;
  margin: 0 var(--mb-2);
}

.footer__copy {
  font-size: var(--smaller-font-size);
}
</style>