<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: "#333",
  },
  width: {
    type: String,
    default: "16",
  },
  height: {
    type: String,
    default: "16",
  },
});
</script>

<template>
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    :height="`${height}px`"
    :width="`${width}px`"
  >
    <path
      fill-rule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
    />
  </svg>
</template>
