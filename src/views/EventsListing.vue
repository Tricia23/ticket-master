<template>
  <div id="event">
    <Layout>
      <div class="event__container">
        <div class="event__heading">
          <h1 class=".event__heading-text">The best events happening now.</h1>
        </div>
        <SingleEvent />
      </div>
    </Layout>
  </div>
</template>

<script>

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
.event__heading h1 {
  font-size: 22px;
  line-height: 40px;
  color: $textDark;
  margin: unset;
  font-family: $fontFlutter;
  text-align: center;
}

.event__container {
  margin: 5rem auto;
}

@media (min-width: 768px) {
  .even__container {
    width: 90%;
    margin: 3rem auto;
    padding-top: 8rem;
  }

  .event__heading {
    padding-left: 4rem;
  }
  .event__heading-text {
    padding-left: 2rem;
    font-size: 36px;
    line-height: 40px;
    text-align: left;
    font-weight: 900;
    font-family: $fontFlutter;
  }
}
</style>
