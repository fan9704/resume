<template>
  <!--===== WORK =====-->
  <section class="work section" id="work">
    <h2 class="section-title">Work</h2>

    <div class="work__container bd-grid">
      <a href="https://github.com/fan9704/PetMonitoringSystem-Backend" class="work__img">
        <img src="/images/寵物物聯網管理系統.png" alt="寵物物聯網管理系統">
      </a>
      <a href="" class="work__img">
        <img src="/images/左束支傳導阻滯偵測系統.png" alt="左束支傳導阻滯偵測系統">
      </a>
      <a href="" class="work__img">
        <img src="/images/垃圾分類系統.png" alt="垃圾分類系統">
      </a>
      <a href="" class="work__img">
        <img src="/images/即時聊天室系統.png" alt="即時聊天室系統">
      </a>
      <a href="" class="work__img">
        <img src="/images/SITCON-學生社群大亂鬥官網.png" alt="SITCON-學生社群大亂鬥官網">
      </a>
      <a href="" class="work__img">
        <img src="/images/網路相簿系統.png" alt="網路相簿系統">
      </a>
    </div>
  </section>
</template>
<script>
export default {
  name:"Work",
}
</script>
<style scoped>
/* ===== WORK =====*/
.work__container {
  row-gap: 2rem;
}

.work__img {
  box-shadow: 0px 4px 25px rgba(14, 36, 49, 0.15);
  border-radius: .5rem;
  overflow: hidden;
}

.work__img img {
  transition: 1s;
}

.work__img img:hover {
  transform: scale(1.1);
}

</style>