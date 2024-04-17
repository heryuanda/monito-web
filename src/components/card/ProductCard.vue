<script setup lang="ts">
import { Products } from "@/utils/types";
import { PropType } from "vue";
import { currencyFormat } from "@/utils/currency";

const props = defineProps({
  data: {
    type: Object as PropType<Products>,
    default: {},
  },
});
</script>
<template>
  <RouterLink to="#" class="product-card">
    <img :src="data.image" />
    <div class="product-card__info">
      <h3 class="product-card__info-name">{{ data.name }}</h3>
      <p class="product-card__info-label">
        Genre: <strong>{{ data.genre }}</strong>
      </p>
      <p class="product-card__info-label">
        Age:
        <strong
          >{{ String(data.age).padStart(2, "0") }} {{ data.ageUnit }}</strong
        >
      </p>
      <p class="product-card__info-price">
        {{ currencyFormat(data.price) }}
      </p>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.product-card {
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
    &-name {
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      margin-bottom: 4px;
    }
    &-label {
      color: var(--neutral-60);
      font-size: 12px;
      margin-bottom: 4px;
    }
    &-price {
      margin-top: 4px;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      text-align: left;
    }
  }
}
</style>
