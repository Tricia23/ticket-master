<template>
  <div id="eventsListing">
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
