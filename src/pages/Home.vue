<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { productSet1, productSet2 } from "@/constants/products";
import { articleSet1 } from "@/constants/articles";
import { useCommonStore } from "@/stores/common";
import { storeToRefs } from "pinia";
import { ProductAttribute } from "@/utils/types";

const Button = defineAsyncComponent(
  () => import("@components/button/Button.vue")
);
const ProductSet = defineAsyncComponent(
  () => import("@components/product-set/ProductSet.vue")
);
const Square = defineAsyncComponent(
  () => import("@components/square/Square.vue")
);

const store = useCommonStore();
const { isMobile } = storeToRefs(store);

const productSet1Attributes: ProductAttribute[] = [
  { label: "Genre", key: "genre" },
  { label: "Age", key: "age" },
];
const productSet2Attributes: ProductAttribute[] = [
  { label: "Product", key: "type" },
  { label: "Size", key: "weight" },
];
</script>

<template>
  <div class="home">
    <div class="home__top-square">
      <Square colorVar="--secondary-yellow" size="400" rotate="-75" />
    </div>
    <div class="hero">
      <div class="container">
        <div class="hero__desc">
          <h1>
            <div class="hero__desc-square">
              <Square
                colorVar="--secondary-yellow"
                size="70"
                rotate="-65"
                rounded="20"
              />
            </div>
            One More Friend
          </h1>
          <h2>Thousands more fun!</h2>
          <p class="hero__caption">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div class="hero__action">
            <Button variant="outline" size="large">
              <p class="btn-label">
                View Intro
                <span class="material-symbols-outlined"> play_circle </span>
              </p>
            </Button>
            <Button variant="primary" size="large">
              <p class="btn-label">Explore Now</p>
            </Button>
          </div>
        </div>
        <div class="hero__image">
          <img src="/assets/hero-image.png" alt="hero-image" />
        </div>
      </div>
      <div class="hero__image-square-1">
        <Square
          colorVar="--primary-blue"
          size="500"
          rotate="10"
          rounded="100"
          customWidth="400"
          customHeight="500"
        />
      </div>
      <div class="hero__image-square-2">
        <Square
          colorVar="--secondary-yellow"
          size="600"
          rotate="25"
          rounded="100"
        />
      </div>
    </div>
    <div class="container section">
      <ProductSet
        title="Take a look at some of our pets"
        subTitle="Whats new?"
        :products="productSet1"
        :attributes="productSet1Attributes"
        variant="product"
      />
    </div>
    <div class="container">
      <div class="description">
        <div class="description__square-left">
          <Square
            colorVar="--primary-blue-dark"
            size="770"
            rotate="-65"
            rounded="100"
          />
        </div>
        <div class="description__square-right">
          <Square
            colorVar="--primary-yellow"
            size="700"
            rotate="-65"
            rounded="100"
          />
        </div>
        <div class="description__desc">
          <h2>One More Friend</h2>
          <h3>Thousands more fun!</h3>
          <p class="caption">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div class="action">
            <Button variant="outline" size="medium">
              <p class="btn-label">
                View Intro
                <span class="material-symbols-outlined"> play_circle </span>
              </p>
            </Button>
            <Button variant="primary" size="medium">
              <p class="btn-label">Explore Now</p>
            </Button>
          </div>
        </div>
        <div class="image">
          <img src="/assets/illustration2.png" alt="illustration-image" />
        </div>
      </div>
    </div>
    <template v-if="!isMobile">
      <div class="container section">
        <ProductSet
          title="Our Products"
          subTitle="Hard to choose right products for your pets?"
          :products="productSet2"
          :attributes="productSet2Attributes"
          variant="product"
        />
      </div>
      <div class="container section seller">
        <div class="seller__header">
          <div class="seller__header-caption">
            <p>Proud to be part of <strong>Pet Sellers</strong></p>
          </div>
          <div class="seller__header-action">
            <Button variant="outline" size="medium">
              <RouterLink to="#" class="btn-label">
                View all our sellers
                <span class="material-symbols-outlined"> chevron_right </span>
              </RouterLink>
            </Button>
          </div>
        </div>
        <div class="seller__logo">
          <div class="seller__logo-item" v-for="index in 7" :key="index">
            <img
              :src="`/assets/sellers/image${index}.png`"
              :alt="'seller-logo-' + index"
            />
          </div>
        </div>
      </div>
      <div class="container section">
        <div class="adoption">
          <div class="adoption__square-left">
            <Square
              colorVar="--primary-yellow"
              size="700"
              rotate="-120"
              rounded="100"
            />
          </div>
          <div class="adoption__square-right">
            <Square
              colorVar="--secondary-yellow"
              size="800"
              rotate="-120"
              rounded="100"
            />
          </div>
          <div class="adoption__desc">
            <h2>Adoption <img src="/assets/paw.svg" alt="paw" /></h2>
            <h3>We need help. so do they.</h3>
            <p class="caption">
              Adopt a pet and give it a home, it will be love you back
              unconditionally.
            </p>
            <div class="action">
              <Button variant="primary" size="medium">
                <p class="btn-label">Explore Now</p>
              </Button>
              <Button variant="outline" size="medium">
                <p class="btn-label">
                  View Intro
                  <span class="material-symbols-outlined"> play_circle </span>
                </p>
              </Button>
            </div>
          </div>

          <div class="adoption__image">
            <img src="/assets/adoption.png" alt="adoption" />
          </div>
        </div>
      </div>
    </template>
    <div class="container section">
      <ProductSet
        title="Useful pet knowledge"
        subTitle="You already know?"
        :articles="articleSet1"
        variant="article"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  position: relative;
  &__top-square {
    position: absolute;
    left: -80px;
    top: -340px;
    z-index: 1;
  }
}
.section {
  padding-top: 40px;
  padding-bottom: 40px;
}
.hero {
  padding: 90px 0px 0px;
  background-color: var(--primary-yellow);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 767px) {
    padding: 83px 0px 0px;
  }
  .container {
    @media screen and (min-width: 767px) {
      display: flex;
      align-items: flex-start;
      width: 100%;
    }
  }

  &__desc {
    @media screen and (min-width: 767px) {
      width: 43%;
      padding-top: 80px;
    }
    &-square {
      position: absolute;
      z-index: -1;
      left: -10px;
    }
  }

  h1 {
    font-size: 46px;
    font-weight: 800;
    line-height: 60px;
    color: var(--primary-blue);
    margin: 0;
    position: relative;
    z-index: 1;
    @media screen and (min-width: 767px) {
      font-size: 60px;
      font-weight: 800;
      line-height: 68px;
      text-align: left;
    }
  }
  h2 {
    font-size: 28px;
    font-weight: 700;
    line-height: 38px;
    color: var(--primary-blue);
    margin: 0 0 12px;
    @media screen and (min-width: 767px) {
      font-size: 46px;
      font-weight: 700;
      line-height: 60px;
      text-align: left;
    }
  }
  p.hero__caption {
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    margin: 0 0 32px;
    @media screen and (min-width: 767px) {
      font-size: 1rem;
      line-height: 24px;
    }
  }
  &__action {
    display: flex;
    column-gap: 16px;
    align-items: center;
    margin-bottom: 24px;
  }
  &__image {
    position: relative;
    overflow: hidden;
    @media screen and (min-width: 767px) {
      width: 57%;
      text-align: center;
      padding-top: 20px;
    }
    img {
      position: relative;
      z-index: 5;
    }
    &-square-1 {
      position: absolute;
      bottom: -170px;
      right: 380px;
      @media screen and (max-width: 767px) {
        bottom: -300px;
        right: -20px;
      }
    }
    &-square-2 {
      position: absolute;
      bottom: -290px;
      right: 160px;
      @media screen and (max-width: 767px) {
        bottom: -410px;
        right: -220px;
      }
    }
  }
}
.description {
  background-color: var(--primary-blue);
  border-radius: 20px;
  padding: 16px 16px 0px;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 767px) {
    display: flex;
    align-items: center;
    padding: 0;
  }
  &__desc {
    position: relative;
    z-index: 1;
    @media screen and (min-width: 767px) {
      order: 2;
      width: 45%;
      padding: 64px 64px 64px 0px;
    }
  }
  &__square {
    &-left {
      position: absolute;
      bottom: -560px;
      left: -200px;
      z-index: 0;
      @media screen and (max-width: 767px) {
        bottom: -700px;
        left: -240px;
      }
    }
    &-right {
      position: absolute;
      right: -130px;
      top: -290px;
      z-index: 0;
      @media screen and (max-width: 767px) {
        right: -130px;
        top: -400px;
      }
    }
  }
  h2 {
    font-size: 36px;
    font-weight: 800;
    line-height: 54px;
    text-align: center;
    color: var(--primary-blue);

    @media screen and (min-width: 767px) {
      font-size: 52px;
      font-weight: 800;
      line-height: 68px;
      text-align: right;
    }
  }
  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;

    @media screen and (min-width: 767px) {
      font-size: 36px;
      font-weight: 700;
      line-height: 54px;
      color: var(--primary-blue);
      text-align: right;
    }
  }
  .caption {
    margin-top: 8px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    margin-bottom: 32px;
    @media screen and (min-width: 767px) {
      text-align: right;
    }
  }
  .action {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;

    @media screen and (min-width: 767px) {
      justify-content: flex-end;
    }
  }
  .image {
    position: relative;
    margin-top: 16px;
    z-index: 1;

    @media screen and (min-width: 767px) {
      order: 1;
      width: 55%;
      padding-top: 36px;
      padding-left: 20px;
      margin: 0;
      text-align: center;
    }
    img {
      @media screen and (min-width: 767px) {
        max-height: 342px;
      }
    }
  }
}
.seller {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    &-caption {
      font-weight: 500;
      color: var(--primary-blue);
      strong {
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
      }
    }
  }
  &__logo {
    display: flex;
    column-gap: 20px;
    width: 100%;
    align-items: center;
    &-item {
      flex-basis: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.adoption {
  background-color: var(--primary-yellow-dark);
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(2, 55% 45%);
  align-items: center;
  position: relative;
  overflow: hidden;
  &__square {
    &-left {
      position: absolute;
      left: -140px;
      top: -270px;
      z-index: 0;
    }
    &-right {
      position: absolute;
      right: -240px;
      bottom: -590px;
      opacity: 0.3;
      z-index: 0;
    }
  }
  &__image {
    height: 100%;
    position: relative;
    z-index: 1;
    img {
      min-height: 378px;
    }
  }
  &__desc {
    position: relative;
    z-index: 1;
    padding: 64px 0px 64px 64px;
    h2 {
      font-size: 52px;
      font-weight: 800;
      line-height: 68px;
      text-align: left;
      color: var(--primary-blue);
      display: flex;
      align-items: center;
      column-gap: 12px;
    }
    h3 {
      font-size: 36px;
      font-weight: 700;
      line-height: 54px;
      color: var(--primary-blue);
      text-align: left;
    }
    .action {
      margin-top: 32px;
      display: flex;
      justify-content: start;
      align-items: center;
      column-gap: 1rem;
    }
  }
}
</style>
