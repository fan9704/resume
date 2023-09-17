<template>
  <header class="l-header">
    <nav class="nav bd-grid" v-show="navShow">
      <div>
        <a href="#" class="nav__logo">FKT</a>
      </div>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
          <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
          <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
          <li class="nav__item"><a href="#work" class="nav__link">Work</a></li>
          <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
          <button class="nav__item" v-on:click="toggleTheme">Toggle Theme</button>
        </ul>
      </div>

      <div class="nav__toggle" id="nav-toggle" v-on:click="showMenu">
        <i class='bx bx-menu'></i>
      </div>
    </nav>
  </header>
</template>
<script>
import { computed } from 'vue';
import { theme } from '../../utils/theme.js';
export default {
  name:"Header",
  data(){
    return{
      navShow:true,
    }
  },
  computed: {
    themeClass() {
      return theme.darkMode ? 'dark-mode' : 'light-mode';
    },
  },
  methods:{
    showMenu(){
          this.navShow = !this.navShow;
    },
    toggleTheme() {
      theme.darkMode = !theme.darkMode;
    },
  },
}

</script>
<style lang="scss">
.dark-mode {
  background-color: black;
  color: white;
}

.light-mode {
  background-color: white;
  color: black;
}

.l-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);
}

/* NAV */
.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--font-semi);

  &__menu {
    @media screen and (max-width: 767px) {
      position: fixed;
      top: var(--header-height);
      right: -100%;
      width: 80%;
      height: 100%;
      padding: 2rem;
      background-color: var(--second-color);
      transition: 0.5s;
    }
  }

  &__item {
    margin-bottom: var(--mb-4);
  }

  &__link {
    position: relative;
    color: #000000;

    &:hover {
      position: relative;

      &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 0.18rem;
        left: 0;
        top: 2rem;
        background-color: var(--first-color);
      }
    }
  }

  &__logo {
    color: var(--second-color);
  }

  &__toggle {
    color: var(--second-color);
    font-size: 1.5rem;
    cursor: pointer;
  }
}
/* Active menu */
.active::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 0.18rem;
  left: 0;
  top: 2rem;
  background-color: var(--first-color);
}

</style>