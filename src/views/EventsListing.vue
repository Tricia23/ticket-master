<template>
  <div>
    <div id="event">
      <Layout>
        <div class="event__container">
          <div class="event__heading">
            <h1>The best events happening now.</h1>
          </div>
          <div id="event" class="event">
            <div class="event__wrapper">
              <div v-if="isLoading">
                <circle-spin v-bind:loading="isLoading"></circle-spin>
              </div>
              <div class="event__inner">
                <div v-for="(event, index) in events" :key="index" class="event__listing">
                  <router-link
                    :to="{
                      name: 'EventDetails',
                      params: { id: event.id, event: event }
                    }"
                    class="router__link"
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
import { CircleSpinner } from "vue-spinners";

export default {
  name: "app",
  components: {
    // EventsListing,
    Layout: () => import("@/components/Layout.vue"),
    SingleEvent: () => import("@/components/SingleEvent.vue"),
    circleSpin: CircleSpinner
  },
  data() {
    return {
      events: [],
      isLoading: true
    };
  },
  mounted() {
    axios
      .get(`https://eventsflw.herokuapp.com/v1/events`)
      .then(response => {
        this.isLoading = false;
        this.events = response.data.data.events;
        console.log(response.data.data.events);
      })
      .catch(error => {
        console.log(error);
      });
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

.event__listing {
  margin-top: 1rem;
}
.event__container {
  margin: 5rem auto;
}

.router__link {
  text-decoration: none;
}

.event__inner {
  padding: 10px 10px;
  display: flex;
  flex-wrap: wrap;
}

.event__listing {
  flex: 0 1 100%;
  margin-top: 2rem;
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
  .event__container {
    width: 90%;
    margin: 3rem auto;
    padding-top: 3rem;
  }

  .event__heading {
    padding-left: 4rem;
  }
  .event__heading h1 {
    padding-left: 2rem;
    font-size: 36px;
    line-height: 40px;
    text-align: left;
    font-weight: 900;
    font-family: $fontFlutter;
  }
}

@media (min-width: 650px) and (max-width: 1200px) {
  .event__listing {
    flex: 0 1 50%;
    margin-top: 2rem;
  }
}
</style>
