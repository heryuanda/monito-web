<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: "#333",
  },
  width: {
    type: String,
    default: "24",
  },
  height: {
    type: String,
    default: "24",
  },
});
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    :height="`${height}px`"
    :width="`${width}px`"
  >
    <path
      d="M15 11L12 14L9 11"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
