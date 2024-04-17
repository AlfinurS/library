<template>
  <button
    @click="onClick"
    :disabled="disabled"
    :class="classProps"
    class="button-component"
  >
    <div><component :is="icon" /></div>
    {{ text }}
    <div><component :is="iconRight" /></div>
  </button>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import iconMark from "@/components/icons/iconMark.vue";

export default defineComponent({
  name: "ButtonComponent",
  emits: ["onClick"],
  components: {
      iconMark,
  },
  props: {
    classProps: {
      type: String,
      default: "primary-btn",
    },
    icon: {
      type: String,
      default: iconMark,
    },
    iconRight: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: "button",
    },
    text: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, {emit}) {
    const onClick = (): void => {
      emit("onClick");
    };

  return {
    onClick,
  }
  },
  
});
</script>

<style lang="scss" scoped>
.button-component {
  box-sizing: border-box;
  border: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  background-color: transparent;
}
.button-component:hover {
  opacity: 0.7;
}
.icon-color {
  color: #aaacb100;
}
</style>
