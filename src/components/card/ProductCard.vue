<script setup lang="ts">
import { ProductAttribute, Products } from "@/utils/types";
import { PropType } from "vue";
import { currencyFormat } from "@/utils/currency";

defineProps({
  data: {
    type: Object as PropType<Products>,
    default: {},
  },
  attributes: {
    type: Object as PropType<ProductAttribute[]>,
    default: [],
  },
});

const convertWeights = (weight: number): string => {
  return weight < 1000 ? weight + " gm" : weight / 1000 + " kg";
};
</script>
<template>
  <RouterLink to="#" class="product-card">
    <img :src="data.image" />
    <div class="product-card__info">
      <h3 class="product-card__info-name">{{ data.name }}</h3>
      <div class="product-card__info-label-wrapper">
        <template
          v-for="(attribute, attrIndex) in attributes"
          :key="'attr-' + attrIndex"
        >
          <p
            class="product-card__info-label"
            v-if="data[attribute.key as keyof typeof data]"
          >
            {{ attribute.label }}:
            <strong v-if="attribute.key === 'age'">
              {{
                String(data[attribute.key as keyof typeof data]).padStart(
                  2,
                  "0"
                )
              }}
              {{ data.ageUnit }}
            </strong>
            <strong v-else-if="attribute.key === 'weight'">
              {{
                convertWeights(
                  data[attribute.key as keyof typeof data] as number
                )
              }}</strong
            >
            <strong v-else>{{
              data[attribute.key as keyof typeof data]
            }}</strong>
          </p>
        </template>
      </div>
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
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 40px;
    }
    &-label {
      color: var(--neutral-60);
      font-size: 12px;
      margin-bottom: 4px;
      position: relative;
      &-wrapper {
        @media screen and (min-width: 767px) {
          display: flex;
          column-gap: 16px;
        }
      }
      &:nth-child(2) {
        &::before {
          @media screen and (min-width: 767px) {
            content: "";
            width: 4px;
            height: 4px;
            border-radius: 100%;
            background-color: var(--neutral-60);
            display: inline-block;
            margin-right: 12px;
            vertical-align: middle;
          }
        }
      }
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
