<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { productSet1 } from "@/constants/products";
import { articleSet1 } from "@/constants/articles";

const Button = defineAsyncComponent(
  () => import("@components/button/Button.vue")
);
const ProductSet = defineAsyncComponent(
  () => import("@components/product-set/ProductSet.vue")
);
</script>

<template>
  <div class="home">
    <div class="hero">
      <div class="container">
        <div class="hero__desc">
          <h1>One More Friend</h1>
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
          <img src="@assets/images/hero-image.png" alt="hero-image" />
        </div>
      </div>
    </div>
    <div class="container section">
      <ProductSet
        title="Take a look at some of our pets"
        subTitle="Whats new?"
        :products="productSet1"
        variant="product"
      />
    </div>
    <div class="container">
      <div class="description">
        <h2>One More Friend</h2>
        <h3>Thousands more fun!</h3>
        <p class="caption">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
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
        <div class="image">
          <img src="@assets/images/illustration2.png" alt="hero-image" />
        </div>
      </div>
    </div>
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
.section {
  padding-top: 40px;
  padding-bottom: 40px;
}
.hero {
  padding: 90px 0px 0px;
  background-color: var(--primary-yellow);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media screen and (min-width: 767px) {
    padding: 160px 0px 0px;
  }
  h1 {
    font-size: 46px;
    font-weight: 800;
    line-height: 60px;
    color: var(--primary-blue);
    margin: 0;
  }
  h2 {
    font-size: 28px;
    font-weight: 700;
    line-height: 38px;
    color: var(--primary-blue);
    margin: 0 0 12px;
  }
  p.hero__caption {
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    margin: 0 0 32px;
  }
  &__action {
    display: flex;
    column-gap: 16px;
    align-items: center;
    margin-bottom: 24px;
  }
  &__image {
    position: relative;
    img {
      position: relative;
      z-index: 5;
    }
  }
}
.description {
  background-color: var(--primary-yellow);
  border-radius: 16px;
  padding: 16px 16px 0px;
  h2 {
    font-size: 36px;
    font-weight: 800;
    line-height: 54px;
    text-align: center;
    color: var(--primary-blue);
  }
  h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
  }
  .caption {
    margin-top: 8px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    margin-bottom: 32px;
  }
  .action {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
  }
  .image {
    margin-top: 16px;
  }
}
</style>
