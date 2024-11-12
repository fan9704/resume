<template>
  <section class="work section" id="work">
    <h2 class="section-title">Work</h2>

    <div class="work__container bd-grid">
      <a
          v-for="(project, index) in projects"
          :key="index"
          :href="project.link"
          class="work__img"
          @mouseover="showDescription(index)"
          @mouseout="hideDescription(index)"
          target="_blank"
      >
        <img :src="project.image" :alt="project.name" class="fill-image">
        <div class="work__description" v-show="project.showDescription">
          {{ project.description }}
        </div>
      </a>
    </div>
  </section>
</template>
<script>
export default {
  name:"Work",
  data(){
    return{
      projects: [
        {
          name: '寵物物聯網管理系統',
          link: 'https://github.com/fan9704/PetMonitoringSystem-Backend',
          image: '/images/寵物物聯網管理系統.png',
          description: 'Pet Monitoring IOT Management System',
          showDescription: false,
        },
        {
          name: '左束支傳導阻滯偵測系統',
          link: 'https://example.com/link1',
          image: '/images/左束支傳導阻滯偵測系統.png',
          description: 'Heart Left Bundle Branch Block Detection System',
          showDescription: false,
        },
        {
          name: '垃圾分類系統',
          link: 'https://github.com/fan9704/Garbage_Classifier_Backend',
          image: '/images/垃圾分類系統.png',
          description: 'Garbage Classifier System',
          showDescription: false,
        },
        {
          name: '即時聊天室系統',
          link: 'https://angular-chatroom-492w.vercel.app/login',
          image: '/images/即時聊天室系統.png',
          description: 'Angular Real-time Chatroom',
          showDescription: false,
        },
        {
          name: 'SITCON-學生社群大亂鬥官網',
          link: 'https://sitcon.org/2023/',
          image: '/images/SITCON-學生社群大亂鬥官網.png',
          description: 'SITCON Student Adventure Time Official Website',
          showDescription: false,
        },
        {
          name: '網路相簿系統',
          link: 'https://github.com/fan9704/web_album',
          image: '/images/網路相簿系統.png',
          description: 'Web Album System',
          showDescription: false,
        },
      ],
    }
  },
  methods: {
    showDescription(index) {
      this.projects[index].showDescription = true;
    },
    hideDescription(index) {
      this.projects[index].showDescription = false;
    },
  },

}
</script>
<style scoped>
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
.fill-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.work__img:hover {
  transform: scale(1.2);
  transition-duration: 0.5s;
}
a.work__img{
  position: relative;
}
.work__description {
  position: absolute;
  z-index:10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>