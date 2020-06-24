<template>
  <div id="app">
    <Layout>
      <h1>Hey I am the body</h1>
    </Layout>
  </div>
</template>
<script>
import Layout from "../components/Layout.vue";
export default {
  name: "app",
  components: {
    Layout
  }
};
</script>

<style lang="scss">
h1 {
  text-align: center;
}
</style>
