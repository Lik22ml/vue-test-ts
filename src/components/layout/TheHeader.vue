<template>
  <header>
    <BaseLink title="Posts" link="/posts" :message="message" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { logComponentName } from "../../helper/message.js";

export default defineComponent({
  name: "TheHeader",
  props: {
    message: {
      type: String,
      required: true,
      default: "Hello",
      validator: function (value: string): boolean {
        return value !== "";
      },
    },
  },
  created() {
    // Log component name
    logComponentName(this.message, this.$options.name);
  },
});
</script>
