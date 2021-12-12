<template>
  <footer>
    <p>Footer Copy Mladen</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheFooter",
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
    console.log(this.message + this.$options.name);
  },
});
</script>
