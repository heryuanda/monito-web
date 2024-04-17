<script setup lang="ts">
import { defineAsyncComponent, onMounted } from "vue";
import { useCommonStore } from "@/stores/common";
import { detectMobile } from "@/utils/detectMobile";

const store = useCommonStore();
const { setIsMobile } = store;

onMounted(() => {
  checkPlatform();
});

const checkPlatform = () => {
  if (detectMobile()) {
    setIsMobile(true);
  } else {
    setIsMobile(false);
  }
};

const TheHeader = defineAsyncComponent(
  () => import("@components/header/Header.vue")
);
const TheFooter = defineAsyncComponent(
  () => import("@components/footer/Footer.vue")
);
</script>

<template>
  <TheHeader />
  <div class="content">
    <router-view></router-view>
  </div>
  <TheFooter />
</template>
