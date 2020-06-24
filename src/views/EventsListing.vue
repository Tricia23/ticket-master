<template>
  <div id="event">
    <Layout>
      <div class="event-container">
        <div class="event-heading">
          <h1>The best events happening now.</h1>
        </div>
        <SingleEvent />
      </div>
    </Layout>
  </div>
</template>

<script>
// import Layout from "../components/Layout.vue";
// import SingleEvent from "../components/SingleEvent.vue";

export default {
  name: "event",
  components: {
    Layout: () => import("@/components/Layout.vue"),
    SingleEvent: () => import("@/components/SingleEvent.vue")
  }
};
</script>

<style scoped lang="scss">
@import "../main.scss";
.event-heading h1 {
  font-size: 22px;
  line-height: 40px;
  color: $textDark;
  margin: unset;
  font-family: $fontFlutter;
  text-align: center;
}

.event-container {
  margin: 2rem auto;
}

@media (min-width: 768px) {
  .event-container {
    width: 90%;
    margin: 3rem auto;
  }

  .event-heading {
    padding-left: 4rem;
  }
  .event-heading h1 {
    padding-left: 2rem;
    font-size: 36px;
    line-height: 40px;
    text-align: left;
    font-weight: 900;
    font-family: $fontFlutter;
  }
}
</style>
