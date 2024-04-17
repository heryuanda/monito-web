<script setup lang="ts">
import { Articles, Products } from "@/utils/types";
import { PropType, defineAsyncComponent } from "vue";
import { useCommonStore } from "@/stores/common";
import { storeToRefs } from "pinia";

const Button = defineAsyncComponent(
  () => import("@components/button/Button.vue")
);
const ProductCard = defineAsyncComponent(
  () => import("@components/card/ProductCard.vue")
);
const ArticleCard = defineAsyncComponent(
  () => import("@components/card/ArticleCard.vue")
);

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
  products: {
    type: Object as PropType<Products[]>,
    default: [],
  },
  articles: {
    type: Object as PropType<Articles[]>,
    default: [],
  },
  redirectionUrl: {
    type: String,
    default: "#",
  },
  variant: {
    type: String,
    default: "product",
  },
});

const store = useCommonStore();
const { isMobile } = storeToRefs(store);
</script>

<template>
  <div class="product-set">
    <div class="product-set__header">
      <div class="product-set__header-text">
        <h2 class="product-set__header-text__subtitle">{{ subTitle }}</h2>
        <h1 class="product-set__header-text__title">{{ title }}</h1>
      </div>
      <div class="product-set__header-redirect" v-if="!isMobile">
        <Button variant="outline" size="medium">
          <RouterLink :to="redirectionUrl" class="btn-label">
            View more
            <span class="material-symbols-outlined"> chevron_right </span>
          </RouterLink>
        </Button>
      </div>
    </div>
    <div class="product-set__products" v-if="variant === 'product'">
      <ProductCard
        v-for="(product, index) in products"
        :key="`product-${index}`"
        :data="product"
      />
    </div>
    <div class="product-set__articles" v-if="variant === 'article'">
      <ArticleCard
        v-for="(article, index) in articles"
        :key="`product-${index}`"
        :data="article"
      />
    </div>
    <div class="product-set__mobile-redirect" v-if="isMobile">
      <Button variant="outline" size="medium" full>
        <RouterLink :to="redirectionUrl" class="btn-label">
          View more
          <span class="material-symbols-outlined"> chevron_right </span>
        </RouterLink>
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-set {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    &-text {
      &__subtitle {
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        margin-bottom: 2px;
      }
      &__title {
        font-size: 20px;
        font-weight: 700;
        line-height: 32px;
        color: var(--primary-blue);
      }
    }
  }
  &__products {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;

    @media screen and (min-width: 767px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  &__articles {
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  &__mobile-redirect {
    margin-top: 16px;
  }
}
</style>
