<template>
  <footer>
    <p>Footer Copy Mladen</p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  props: {
    message: {
      type: String,
      required: true,
      default: "Hello",
      validator: function (value) {
        return value !== "";
      },
    },
  },
  created() {
    // Log component name
    console.log(this.message + this.$options.name);
  },
};
</script>
