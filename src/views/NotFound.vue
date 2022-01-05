<template>
  <section class="s-notFound">
    <h2>Page not found</h2>
    <h4>This page could not be found 404</h4>
    <router-link to="/posts">Go back to Posts</router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { logComponentName } from "../helper/message.js";

export default defineComponent({
  name: "NotFound" as string,
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
  created(): void {
    // LOg component name
    logComponentName(this.message, this.$options.name);
  },
});
</script>
