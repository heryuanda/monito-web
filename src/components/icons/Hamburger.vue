<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: "#333",
  },
  width: {
    type: String,
    default: "32",
  },
  height: {
    type: String,
    default: "33",
  },
});
</script>

<template>
  <svg
    viewBox="0 0 32 33"
    fill="none"
    :height="`${height}px`"
    :width="`${width}px`"
  >
    <path
      d="M6.66675 23.1667H25.3334M6.66675 16.5H25.3334M6.66675 9.83334H25.3334"
      stroke="#00171F"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
