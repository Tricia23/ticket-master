<template>
  <div class="event__listing--inner">
    <a class="event__listing--link">
      <img
        class="event__image"
        :src="event.image ? event.image : require('../assets/images/event.png')"
      />
      <div class="event__details">
        <span class="event__details--date">
          {{
          moment(event.end_time).format("LL")
          }}
        </span>
        <h4 class="event__details--name">{{ event.name }}</h4>
        <span
          class="event__details--price"
          :class="[
            Object.entries(price).length === 0 ? 'green' : 'normal text'
          ]"
        >{{ Object.entries(price).length === 0 ? "FREE" : price.price.toLocaleString() }}</span>
      </div>
    </a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "event",
  props: ["event"],

  data() {
    return {
      // events: [],
      // errors: [],
      // tickets: [],
      // prices: []
      prices: {},
      price: {}
    };
  },
  mounted() {
    axios
      .get(
        `https://eventsflw.herokuapp.com/v1/ticket-types/events/${this.event.id}`
      )
      .then(response => {
        this.tickets = response.data.data;
      })
      .then(() => {
        const prices = {};
        this.tickets.forEach((element, index) => {
          prices[index] = element.price.toLocaleString();
        });
        this.prices = Object.assign({}, prices);

        let priceLength = Object.keys(this.prices).length;

        if (priceLength == 1) {
          let price = {};
          price["price"] = `${this.prices[0]}`;
          this.price = Object.assign({}, price);
        } else if (priceLength > 1) {
          Object.keys(this.prices).sort(
            (a, b) => this.price[a] - this.prices[b]
          );

          let size = Object.keys(this.prices).length;

          let price = {};
          price["price"] = `${this.prices[size - 1]} - ${this.prices[0]}`;
          this.price = Object.assign({}, price);
        }
      });
  }
};
</script>

<style scoped lang="scss">
@import "../main.scss";

.event__image {
  width: 65%;
  display: block;
  object-position: center;
  object-fit: cover;
  height: 200px;
  border-radius: 6px;
  margin: auto;
}
.event__wrapper {
  text-align: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.event__details {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10px;
}

.event__listing {
  margin-top: 1rem;
}

.event__details--date {
  color: $textGrey;
  font-size: 12px;
  line-height: 14px;
}

.event__details--name {
  font-size: 14px;
  line-height: 22px;
  color: $textDark;
  margin: 5px 0;
  font-family: $fontFlutterBold;
}

.event__details--price {
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.5px;
  color: $textDark;
}

.event__listing--link {
  text-decoration: none;
  display: block;
}
.green {
  color: $textFree;
}

.event__inner {
  padding: 10px 10px;
  display: flex;
  flex-wrap: wrap;
}
.event__listing {
  flex: 0 1 50%;
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

  .event__details {
    text-align: left;
    margin-left: 5px;
    margin-top: 1rem;
  }

  .event__details--name {
    font-size: 18px;
    line-height: 22px;
  }

  .event__listing--disabled:hover {
    cursor: not-allowed;
  }

  .event__listing--inner {
    padding: 5px 15px;
  }

  .event__listing {
    flex: 0 1 33.33%;
    margin-top: 2rem;
  }

  .event__image {
    width: 100%;
    height: 260px;
  }
  .event__listing--link {
    text-decoration: none;
    display: block;
  }
}

@media (min-width: 650px) and (max-width: 1200px) {
  .event__image {
    width: 90%;
    height: 260px;
  }

  .event__inner {
    padding: 10px 6px;
  }
  .event__details {
    text-align: center;
    margin-left: 5px;
    margin-top: 1rem;
  }
}
</style>
