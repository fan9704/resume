<template>
  <!--Banner-->
  <v-container fluid>
    <v-row>
      <v-col cols="6" xs="12" sm="12" md="6" lg="6" xl="6" class="banner-shell">
        <v-img
            :src="'/resume/images/person.jpg'"
            contain
            max-height="800">

        </v-img>
      </v-col>
      <v-col cols="6" xs="12" sm="12" md="6" lg="6" xl="6" class="text-center">
        <div class="text-middle banner-content-shell">
          <p class="banner-name">Gang-Ting Fan(范綱庭)</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
<!--  <v-container>-->
<!--    <carousel></carousel>-->
<!--  </v-container>-->
</template>

<script>
import carousel from "../components/carousel.vue";
export default {
  name: "IndexView"
}
</script>

<style scoped>
.banner-shell{
  padding: 5%;
}
.text-middle {
  display: flex;
  /*top: 45%;*/
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.banner-name{
  font-weight: bolder;
  font-size: 6vh;
}
</style>