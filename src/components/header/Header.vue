<script setup lang="ts">
import { defineAsyncComponent, onMounted, onUnmounted, ref } from "vue";
import clsx from "clsx";
const Button = defineAsyncComponent(
  () => import("@components/button/Button.vue")
);
const Navigation = defineAsyncComponent(
  () => import("@components/navigation/Navigation.vue")
);

const isHeaderScrolled = ref(false);

const handleScroll = () => {
  isHeaderScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div :class="clsx('header', isHeaderScrolled && 'sticky')">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__hamburger">
          <Button
            variant="transparent"
            size="large"
            :additional-style="{
              padding: '0px',
              'border-radius': '0px',
              'line-height': 0,
            }"
          >
            <span class="material-symbols-outlined"> menu </span>
          </Button>
        </div>
        <div class="header__logo">
          <img src="@assets/images/monito.svg" />
          <div class="header-nav">
            <Navigation />
          </div>
        </div>
        <div class="header__search-desktop">
          <div class="header__search-desktop__input">
            <input type="text" placeholder="Search something here!" />
            <span class="material-symbols-outlined"> search </span>
          </div>
          <Button variant="primary" size="medium"> Join the community </Button>
          <div class="header__search-desktop__dropdown">
            <img src="@assets/images/vietnam.svg" alt="flag" />
            <p>VND</p>
            <span class="material-symbols-outlined"> expand_more </span>
          </div>
        </div>
        <div class="header__search-mobile">
          <Button
            variant="transparent"
            size="large"
            :additional-style="{
              padding: '0px',
              'border-radius': '0px',
              'line-height': 0,
            }"
          >
            <span class="material-symbols-outlined"> search </span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  transition: all 250ms;
  background-color: transparent;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 10px;

    @media screen and (min-width: 767px) {
      padding: 20px 0px;
    }
  }
  &__hamburger {
    line-height: 0;
    @media screen and (min-width: 767px) {
      display: none;
    }
  }
  &__search-mobile {
    line-height: 0;
    @media screen and (min-width: 767px) {
      display: none;
    }
  }
  &__search-desktop {
    @media screen and (max-width: 767px) {
      display: none;
    }
    display: flex;
    align-items: center;
    column-gap: 16px;
    &__input {
      position: relative;
      input {
        width: 280px;
        background-color: #fff;
        padding: 12px 12px 12px 48px;
        border: 1px solid #fff;
        border-radius: 46px;
      }
      span {
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    &__dropdown {
      display: flex;
      column-gap: 8px;
      align-items: center;
    }
  }
  &__logo {
    display: flex;
    align-items: center;
    column-gap: 48px;
  }
  &-nav {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  &.sticky {
    background-color: var(--secondary-yellow);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
}
</style>
