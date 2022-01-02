<template>
  <footer>
    <div class="footer-wrapper">
      <p>Footer Copy Mladen</p>
    </div>
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

<style scoped>
.footer-wrapper {
  background-color: blue;
  color: white;
  position: relative;
  bottom: 0px;
  width: 100%;
}
</style>
