<script setup lang="ts">
import { ref } from "vue";

type PropType = {
  size: string;
  rounded: string;
  colorVar: string;
  rotate: string;
  customWidth: string | null;
  customHeight: string | null;
};

const props: PropType = defineProps({
  size: {
    type: String,
    default: "40",
  },
  rounded: {
    type: String,
    default: "40",
  },
  colorVar: {
    type: String,
    default: "--primary-yellow",
  },
  rotate: {
    type: String,
    default: "0",
  },
  customWidth: { type: String, default: null },
  customHeight: { type: String, default: null },
});

const classes = ref({
  "--size": `${props.size}px`,
  "--transform": `rotate(${props.rotate}deg)`,
  "--border-radius": `${props.rounded}px`,
  "--background-color": `var(${props.colorVar})`,
  ...(props.customWidth && { width: `${props.customWidth}px` }),
  ...(props.customHeight && { height: `${props.customHeight}px` }),
});
</script>
<template>
  <div class="square" :style="classes"></div>
</template>

<style lang="scss" scoped>
.square {
  aspect-ratio: 1 / 1;
  transform: var(--transform);
  width: var(--size);
  border-radius: var(--border-radius);
  background-color: var(--background-color);
}
</style>
