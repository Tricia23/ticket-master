<template>
  <div id="events" class="event">
    <div class="event__detail-container">
      <div class="event__detail-wrapper">
        <div class="event__detail-left">
          <div class="event__detail-inner">
            <span class="event__detail-date">
              {{
              moment(event.end_time).format("LL")
              }}
            </span>
            <h1 class="event__detail-name">{{ event.name }}</h1>
            <p class="event__detail-description">{{ event.description }}</p>
            <span class="event__detail-price">{{price.price}}</span>
            <button class="button">BUY TICKETS</button>
          </div>
        </div>
        <div class="event__detail-right">
          <div class="event__detail-image">
            <img
              :src="
                event.image
                  ? event.image
                  : require('../assets/images/event.png')
              "
            />
          </div>
        </div>
      </div>
      <hr />
      <div class="location__wrapper">
        <div class="location__inner">
          <div class="location__event location__event-venu">
            <div class="location__venu-details">
              <h5 class="location__header">Venu</h5>
              <h3 class="location__subheader">{{ event.venue }}</h3>
              <div class="location__event-map">
                <mapIcon class="location__icon" />
                <span class="location__icon-text">View map for directions</span>
              </div>
            </div>
          </div>
          <div class="location__event location__event-time">
            <div class="location__time-details">
              <h5 class="location__header">Date and Time</h5>
              <h3
                class="location__header-date"
              >{{ moment(event.tickets_sale_end_date).format("LLLL") }}</h3>
              <div class="social__links">
                <h5 class="location__header">Social Links</h5>
                <a href>http://www.nathanielcole.com</a>
                <a href>https://twitter.com/nathanielcole</a>
                <a href>https://instagram.com/nathanielcole</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mapIcon from "../assets/svg/map.vue";
import axios from "axios";
export default {
  name: "events",
  components: {
    mapIcon
  },
  data() {
    return {
      event: {},
      id: [],
      tickets: [],
      prices: {},
      price: {}
    };
  },
  methods: {
    getPrice: function() {
      axios
        .get(
          `https://eventsflw.herokuapp.com/v1/ticket-types/events/${this.$route.params.id}`
        )
        .then(response => {
          this.tickets = response.data.data;
        })
        .then(() => {
          this.tickets.forEach(element => {
            this.prices[element.name] = element.price;
          });
        });
    }
  },
  mounted() {
    const param = this.$route.params.id;
    console.log(param);
    axios
      .get("https://eventsflw.herokuapp.com/v1/events/" + param)
      .then(response => {
        this.event = response.data.data;
      });
    axios
      .get(
        `https://eventsflw.herokuapp.com/v1/ticket-types/events/${this.$route.params.id}`
      )
      .then(response => {
        this.tickets = response.data.data;
      })
      .then(() => {
        const prices = {};
        this.tickets.forEach((element, index) => {
          prices[index] = element.price;
        });
        this.prices = Object.assign({}, prices);

        let priceLength = Object.keys(this.prices).length;

        if (priceLength == 1) {
          let price = {};
          price["price"] = `${this.prices[0]}`;
          this.price = Object.assign({}, price);
        } else if (priceLength > 1) {
          const sorted = Object.keys(this.prices).sort(
            (a, b) => this.price[a] - this.prices[b]
          );

          let size = Object.keys(this.prices).length;

          let price = {};
          price["price"] = `${this.prices[size - 1]} - ${this.prices[0]}`;
          this.price = Object.assign({}, price);
        }
      });
    // this.getPrice();
  }
};
</script>

<style scoped lang="scss">
@import "../main.scss";
.event__detail-container {
  padding: 20px;
}
.event__detail-wrapper {
  padding: 1rem 0 2rem 0;
}
.event__detail-date {
  color: #12122c;
  text-transform: uppercase;
  margin-bottom: 10px;
  display: block;
}

.event__detail-name {
  font-size: 22px;
  line-height: 40px;
  color: $textDarkGrey;
  margin: unset;
}

.event__detail-description {
  font-size: 12px;
  line-height: 20px;
  font-style: italic;
  color: $textFooter;
  margin: unset;
}

.event__detail-price {
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.5px;
  color: $textDark;
  margin-top: 10px;
  display: block;
}

.button {
  font-size: 14px;
  cursor: pointer;
  outline: none;
  letter-spacing: 0.5px;
  color: $secondary;
  background: $primary;
  border: 1px solid $primary;
  border-radius: 4px;
  padding: 12px 20px;
  display: block;
  margin-top: 10px;
  width: 40%;
}

.event__detail-image {
  margin: auto;
  min-height: 100%;
  display: flex;
  margin-top: 20px;
}
.event__detail-image img {
  object-fit: cover;
  object-position: center;
  width: 80%;
  border-radius: 6px;
}

hr {
  color: #ccb7b1;
}

.social__links a {
  display: block;
  font-size: 14px;
  color: $textDarkGrey;
  line-height: 28px;
  text-decoration: none;
}

.location__header {
  font-size: 14px;
  line-height: 16px;
  color: $textDark;
  text-transform: uppercase;
  font-weight: 400;
  margin: 1rem 0 1rem 0;
}

.location__subheader {
  font-size: 18px;
  line-height: 32px;
  color: $textDark;
  width: 80%;
}

.location__header-date {
  font-size: 18px;
  line-height: 32px;
  color: $textDark;
}

.location__event-map {
  display: inline-flex;
}
.location__icon-text {
  color: $primary;
  margin-left: 7px;
  font-size: 16px;
  font-weight: bold;
}

@media (min-width: 768px) {
  .event__detail-container {
    width: 70%;
    margin: auto;
  }

  .event__detail-wrapper {
    display: flex;
    padding: 1rem 0 4rem 0;
  }
  .event__detail-date {
    margin-bottom: 1.5rem;
  }
  .event__detail-left {
    flex: 1;
    margin: auto;
  }
  .event__detail-inner {
    padding-top: 1rem;
  }

  .event__detail-right {
    flex: 1;
  }

  .event__detail-name {
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 10px;
  }
  .event__detail-description {
    font-size: 18px;
    line-height: 32px;
    font-style: italic;
  }

  .location__time-details {
    padding-left: 3rem;
  }
  .event__detail-price {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.5px;
    margin-top: 2rem;
  }
  .button {
    padding: 1rem 2rem;
    margin-top: 2rem;
    width: 80%;
  }

  .event__detail-image {
    margin: auto;

    padding-left: 3rem;
  }
  .event__detail-image img {
    width: 100%;
  }

  .location__event {
    flex: 1;
  }
  .location__inner {
    display: flex;
    margin: auto;
  }
  .location__venu-details span {
    display: block;
  }

  .social__links a {
    font-size: 18px;
  }

  .location__event-venu {
    padding-right: 2rem;
  }

  .location__header {
    font-size: 18px;
    line-height: 16px;
    margin: 1rem 0 1rem 0;
  }
  .location__subheader {
    font-size: 24px;
    line-height: 32px;
  }
  .location__header-date {
    font-size: 24px;
    line-height: 32px;
  }

  .location__event-map {
    margin-top: 15px;
  }
  .location__icon-text {
    margin-left: 1rem;
  }
}
</style>
