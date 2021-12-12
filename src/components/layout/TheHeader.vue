<template>
  <header>
    <BaseLink title="Posts" link="/posts" :message="message" />
  </header>
</template>

<script>
export default {
  name: "TheHeader",
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
