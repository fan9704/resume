<template>
  <header class="l-header" >
    <nav class="nav bd-grid">
      <div><a href="#" class="nav__logo">FKT</a></div>
      <div class="nav__menu"  id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
          <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
          <li class="nav__item"><a href="#skills" class="nav__link">Skills</a></li>
          <li class="nav__item"><a href="#work" class="nav__link">Work</a></li>
          <li class="nav__item" ><a href="#contact" class="nav__link">Contact</a></li>
          <li type="checkbox" class="nav__item" v-on:click="toggleDark()">Click Me!</li>
        </ul>
      </div>

    </nav>
  </header>
</template>
<script>
import {useDark,useToggle} from "@vueuse/core";

export default {
  name:"Header",
  inject: ['dark'],
  data(){
    return{
      navShow:true,
    }
  },
  setup(){
    const isDark = useDark({
      selector: 'body',
      attribute: 'color-scheme',
      valueDark: 'dark',
      valueLight: 'light',
      onChanged(dark) {
        // update the dom, call the API or something
      },
    })
    localStorage.setItem('vueuse-color-scheme', 'dark')
    const toggleDark = useToggle(isDark)
    return {
      toggleDark,
      isDark
    };
  },
}

</script>
<style lang="scss">
.l-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);
}

.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--font-semi);

  &__menu {
    padding: 0;
    margin: 0;
    ul.nav__list {
      display: flex;
      li.nav__item {
        a.nav__link {
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: #ff9900;
          }
        }
      }
    }
  }
  ul{
    margin-bottom: 0px;
  }
  &__link {
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
}
</style>