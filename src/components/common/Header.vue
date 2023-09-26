<template>
  <header class="l-header" >
    <nav class="nav bd-grid">
      <div><router-link to="/" class="nav__logo">FKT</router-link></div>
      <div class="nav__menu"  id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item"><a href="#home" class="nav__link">{{$t("header.home")}}</a></li>
          <li class="nav__item"><a href="#about" class="nav__link">{{$t("header.about")}}</a></li>
          <li class="nav__item"><a href="#skills" class="nav__link">{{$t("header.skills")}}</a></li>
          <li class="nav__item"><a href="#work" class="nav__link">{{$t("header.work")}}</a></li>
          <li class="nav__item" ><a href="#contact" class="nav__link">{{$t("header.contact")}}</a></li>
          <li class="nav__item" ><router-link to="/gallery/">Gallery</router-link></li>
          <li class="nav__item" v-on:click="toggleDark()">Click Me!</li>
          <select class="nav__item"  v-model="selected" @change="setLocale">
            <option v-for="option in options" :value="option.value" :key="option.value">
              {{ option.text }}
            </option>
          </select>
        </ul>
      </div>

    </nav>
  </header>
</template>
<script>
import {useDark,useToggle} from "@vueuse/core";
import {ref} from "vue";
import i18n from "../../plugins/i18n.js";

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

    let lang = i18n.global.locale
    let selected = ref(lang)
    const options = ref([
      { text: 'English', value: 'en' },
      { text: '中文', value: 'zh' },
    ])

    const setLocale = (e) => {
      let newVal = e.target.value
      i18n.global.locale = newVal
    }
    return {
      toggleDark,
      isDark,
      setLocale,
      selected,
      options,
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
select.nav__item{
  color:var(--first-color);
  border:solid var(--first-color) 1px;
  border-radius: 5px;
  text-align: center;
}
</style>