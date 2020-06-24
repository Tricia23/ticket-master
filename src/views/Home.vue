<template>
  <div>
    <div id="event">
      <Layout>
        <div class="event-container">
          <div class="event-heading">
            <h1>The best events happening now.</h1>
          </div>
          <div id="event" class="event">
            <div class="event__wrapper">
              <div class="event__inner">
                <div
                  v-for="(event, index) in events"
                  :key="index"
                  class="event__listing"
                >
                  <router-link
                    :to="{
                      name: 'EventDetails',
                      params: { id: event.id, event: event }
                    }"
                  >
                    <SingleEvent :event="event" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src

export default {
  name: "app",
  components: {
    // EventsListing,
    Layout: () => import("@/components/Layout.vue"),
    SingleEvent: () => import("@/components/SingleEvent.vue")
  },
  data() {
    return {
      events: []
    };
  },
  mounted() {
    axios
      .get(`https://eventsflw.herokuapp.com/v1/events`)
      .then(response => {
        this.events = response.data.data.events;
        console.log(response.data.data.events)
      })
      .catch(error => {
        console.log(error);
      });
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

.event__listing {
  margin-top: 1rem;
}
.event-container {
  margin: 2rem auto;
}

@media (min-width: 768px) {
  .event__wrapper {
    text-align: center;
    width: 100%;
  }
  .event__inner {
    padding: 10px 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .event__listing {
    flex: 0 1 33.33%;
    margin-top: 2rem;
  }
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
