<template>
  <TheHeader :message="propMessage" />
  <article class="main">
    <router-view :message="propMessage" />
  </article>
  <TheFooter :message="propMessage" />
</template>

<script lang="ts">
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      propMessage: "Hello from " as string,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

html,
body {
  height: 100%;
  margin: 0;
}

.main {
  height: 100%;
  width: 100%;
  margin: 50px 0;
  flex-grow: 1;
}

header,
main,
footer {
  flex-shrink: 0;
}

header {
  height: 50px;
  width: 100%;
  background-color: #2c3e50;
  padding: 10px 0;
}

footer {
  height: 20px;
  width: 100%;

  p {
    background-color: #d7cfcf;
    text-align: center;
    margin: 0;
    padding: 0;
  }
}
</style>
