<template>
  <div>
    <NavigationBar />
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "Home",
  components: {
    NavigationBar,
  },
};
</script>
