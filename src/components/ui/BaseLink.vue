<template>
  <router-link :to="link" class="c-link">{{ title }}</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseLink",
  props: {
    message: {
      type: String,
      required: true,
      default: "Hello",
      validator: function (value: string): boolean {
        return value !== "";
      },
    },
    link: {
      type: String,
      required: true,
      validator: function (value: string): boolean {
        return value !== "";
      },
    },
    title: {
      type: String,
      required: true,
      validator: function (value: string): boolean {
        return value !== "";
      },
    },
  },
  created(): void {
    // Log component name
    console.log(this.message + this.$options.name);
  },
});
</script>

<style lang="scss">
.c-link {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #000000;
  background-color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  text-transform: uppercase;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
}
</style>
