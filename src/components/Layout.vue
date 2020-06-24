<template>
  <div id="layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "layout",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss"></style>
