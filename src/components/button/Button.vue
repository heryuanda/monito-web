<template>
  <button :class="classes" @click="handleClick" :style="additionalStyle">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value: string) =>
      ["primary", "secondary", "outline", "transparent"].includes(value),
  },
  size: {
    type: String,
    default: "medium",
    validator: (value: string) => ["small", "medium", "large"].includes(value),
  },
  full: {
    type: Boolean,
    default: false,
  },
  additionalStyle: {
    type: Object,
    default: {},
  },
});

const emit = defineEmits(["click"]);

const classes = computed(() => [
  "btn",
  `btn-${props.variant}`,
  `btn-${props.size}`,
  props.full && "btn-full",
]);

const handleClick = () => {
  emit("click");
};
</script>

<style scoped>
.btn {
  border: none;
  border-radius: 40px;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--primary-blue);
  color: white;
}

.btn-transparent {
  background-color: transparent;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}
.btn-outline {
  background-color: transparent;
  border: 1.5px solid var(--primary-blue);
}
.btn-full {
  width: 100%;
}

.btn-small {
  font-size: 0.75rem;
  padding: 12px 16px;
}

.btn-medium {
  font-size: 1rem;
  padding: 12px 24px;
}

.btn-large {
  font-size: 1.25rem;
  padding: 12px 32px;
}
</style>
