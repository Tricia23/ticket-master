<template>
  <div id="eventsListing" class="background">
    <Layout>
    
      <EventsPage />
    </Layout>
  </div>
</template>

<script>
import Layout from "../components/Layout.vue";
import EventsPage from "../components/EventsPage.vue";


export default {
  name: "layout",
  components: {
    Layout,
    EventsPage,
     
  },
  data() {
    return {
      events: [],
    
    };
  }
};
</script>

<style>
.background{
  height: 100vh;
    background-image: url(/img/lines.bc2ca893.png);
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;

}
</style>
