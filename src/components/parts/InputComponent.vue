<template>
  <div class="input-component">
    <div><component :is="icon" /></div>
    <input
      v-model="data"
      @input="onInput"
      @change="onChange"
      :type="type"
      class="input-component__input"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "vue";
import iconSearch from "@/components/icons/iconSearch.vue";

export default defineComponent({
  name: "InputComponent",
  emits: ["onInput", "onChange"],
  components: {
    iconSearch,
  },
  props: {
    dataProps: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },

  setup(props, { emit }) {
    const data = ref("");
    const onInput = (): void => {
      emit("onInput", data.value);
    };

    const onChange = (): void => {
      emit("onChange", data.value);
    };

    return {
      data,
      watch,
      onChange,
      onInput,
    };
  },
});
</script>

<style lang="scss" scoped>
.input-component {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 15px;
  min-height: 40px;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  background-color: #fefeff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #f4f5f5;
  &:hover {
    background-color: #c5bee0;
    color: #37474f;
  }
  &__input {
    border: none;
    background: transparent;
    margin-left: 8px;
    outline: none;
    width: 100%;
    height: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
  }
}
</style>
