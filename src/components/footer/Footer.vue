<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Button = defineAsyncComponent(
  () => import("@components/button/Button.vue")
);
const Navigation = defineAsyncComponent(
  () => import("@components/navigation/Navigation.vue")
);
</script>
<template>
  <div class="footer">
    <div class="container">
      <div class="footer__registration">
        <div class="footer__registration-title">
          Register now so you don't miss our programs
        </div>

        <div class="footer__registration-form">
          <input type="text" placeholder="Enter your Email" />
          <Button
            variant="primary"
            size="medium"
            full
            :additional-style="{ 'border-radius': '8px' }"
          >
            <p class="btn-label">Subcribe Now</p>
          </Button>
        </div>
      </div>
      <div class="footer__nav">
        <Navigation />
      </div>
      <div class="footer__social footer__nav">
        <ul>
          <li>
            <RouterLink to="#">
              <img src="@assets/images/Facebook.svg" alt="social-facebook" />
            </RouterLink>
          </li>
          <li>
            <RouterLink to="#"
              ><img src="@assets/images/Twitter.svg" alt="social-twitter"
            /></RouterLink>
          </li>
          <li>
            <RouterLink to="#"
              ><img src="@assets/images/Instagram.svg" alt="social-instagram"
            /></RouterLink>
          </li>
          <li>
            <RouterLink to="#"
              ><img src="@assets/images/YouTube.svg" alt="social-youtube"
            /></RouterLink>
          </li>
        </ul>
      </div>
      <div class="footer__bottom">
        <div class="footer__bottom-logo">
          <img src="@assets/images/monito.svg" />
        </div>
        <div class="footer__bottom-term">
          <RouterLink to="#">Terms of Service</RouterLink>
          <RouterLink to="#">Privacy Policy</RouterLink>
        </div>
        <p class="footer__bottom-copy">© 2022 Monito. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background-color: var(--primary-yellow);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px 0px;
  &__registration {
    background-color: var(--primary-blue);
    padding: 16px;
    border-radius: 16px;
    margin-bottom: 40px;
    &-title {
      font-size: 20px;
      font-weight: 700;
      line-height: 32px;
      text-align: left;
      color: #fff;
      margin-bottom: 16px;
    }
    &-form {
      background-color: #fff;
      padding: 12px;
      border-radius: 14px;
      input {
        width: 100%;
        border: 1px solid var(--neutral);
        padding: 14px 28px;
        border-radius: 8px;
        margin-bottom: 12px;
      }
    }
  }
  &__nav {
    margin-bottom: 20px;
  }
  &__social {
    margin-bottom: 40px;
    ul {
      justify-content: center;
      column-gap: 40px;
    }
  }
  &__bottom {
    border-top: 1px solid var(--neutral-60);
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-logo {
      margin-bottom: 32px;
    }
    &-term {
      margin-bottom: 8px;
      color: var(--neutral-60);
      display: flex;
      align-items: center;
      column-gap: 12px;
      a {
        color: var(--neutral-60);
      }
    }
    &-copy {
      font-size: 10px;
      color: var(--neutral-60);
    }
  }
}
</style>
