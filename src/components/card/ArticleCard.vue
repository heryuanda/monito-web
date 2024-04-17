<script setup lang="ts">
import { Articles } from "@/utils/types";
import { PropType } from "vue";

const props = defineProps({
  data: {
    type: Object as PropType<Articles>,
    default: {},
  },
});
</script>
<template>
  <RouterLink to="#" class="article-card">
    <img :src="data.image" />
    <div class="article-card__info">
      <p class="article-card__info-chips">
        <span>{{ data.label }}</span>
      </p>
      <h3 class="article-card__info-name">{{ data.title }}</h3>
      <p class="article-card__info-content">{{ data.content }}</p>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.article-card {
  box-shadow: 0px 4px 28px -2px #00000014;
  padding: 8px;
  border-radius: 12px;
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 8px;
  }
  &__info {
    padding: 8px;
    display: flex;
    flex-direction: column;
    &-name {
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      margin-bottom: 6px;
    }
    &-chips {
      margin-bottom: 10px;
      span {
        display: inline-block;
        background-color: var(--blue-sea);
        color: #fff;
        border-radius: 28px;
        padding: 2px 10px;
        font-size: 10px;
        font-weight: 700;
        line-height: 16px;
      }
    }
    &-content {
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
