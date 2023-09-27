<template>
  <div class="con">
    <h1>Gallery</h1>
    <div class="wrapper" >
      <img v-for="image in images" :src="image.url" alt="" class="image-cropper">
    </div>
    <h1>Gallery</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images:[
        {
          text:"COSCUP 學生社群大亂鬥",
          url:"/gallery/COSCUP.jpg",
        },
        {
          text:"GDG DevFest ChangHua",
          url:"/gallery/GDG_DevFest_ChangHua.jpg",
        },
        {
          text:"GDG DevFest TaiChung",
          url:"/gallery/GDG_DevFest_Taichung.jpg",
        },
        {
          text:"GDG DevFest TaoYuan",
          url:"/gallery/GDG_DevFest_TaoYuan.jpg",
        },
        {
          text:"GDSC Summit",
          url:"/gallery/GDSC_Summit.jpg",
        },
        {
          text:"GDSC Summit Avatar",
          url:"/gallery/GDSC_Summit_Avatar.jpg",
        },
        {
          text:"Google I/O Extended HsinChu",
          url:"/gallery/GoogleIO新竹.jpg",
        },
        {
          text:"ICPC TUPC Contest",
          url:"/gallery/ICPC競賽.jpg",
        },
        {
          text:"SITCON Central MeetUp",
          url:"/gallery/SITCON中區交流會.jpg",
        },
        {
          text:"TCSE Conference",
          url:"/gallery/TCSE.jpg",
        },
        {
          text:"CSMU GDSC Lead Sharing",
          url:"/gallery/中山醫學大學GDSC說明會.jpg",
        },
        {
          text:"IEEE AIOT Innovation Contest",
          url:"/gallery/創創AIOT.jpg",
        },
        {
          text:"NIICC Innovation Contest",
          url:"/gallery/大專盃獲獎.jpg",
        },
        {
          text:"NIICC Innovation Contest Team",
          url:"/gallery/大專盃團隊.jpg",
        },
        {
          text:"NCKU GDSC Lead Sharing",
          url:"/gallery/成功大學GDSC說明會.jpg",
        },
        {
          text:"NYUST GDSC Final Semester Member Meeting",
          url:"/gallery/雲科GDSC期末大會.jpg",
        },
      ]
    };
  },
};
</script>
<style>
.con{
  padding: 10%;
  height: 100%;
  font-size: 16px;
  line-height: 1.5;
  font-family: Trebuchet MS, Helvetica, Arial, sans-serif;
  min-height: 100vh;
}

.con {
  overflow: hidden;
  background-color: #222;
  background-image:
      linear-gradient(to right, rgba(255,255,255,.025) 10%, transparent 0),
      linear-gradient(#222, #000);
  background-size: .75em 100%, 100% 100%;
  background-attachment: fixed;
  display: flex;
  align-items: center;
}

.wrapper {
  position: relative;
  flex-grow: 1;
  margin: auto;
  max-width: 1200px;
  max-height: 1200px;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 2vmin;
  justify-items: center;
  align-items: center;
}

img.image-cropper {
  z-index: 1;
  grid-column: span 2;
  max-width: 100%;
  margin-bottom: -52%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  transform: scale(1);
  transition: all .25s;
  object-fit: cover;
  aspect-ratio: 1/1;
  &:nth-child(7n + 1) {
    grid-column: 2 / span 2;
  }

  &:hover {
    z-index: 2;
    transform: scale(2);
  }
}
</style>