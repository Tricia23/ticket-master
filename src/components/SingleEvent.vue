<template>
  <div class="event__listing--inner">
    <a class="event__listing--link">
      <img
        class="event__image"
        :src="event.image ? event.image : require('../assets/images/event.png')"
      />
      <div class="event__details">
        <span class="event__details--date">
          {{ moment(event.end_time).format("LL") }}
        </span>
        <h4 class="event__details--name">{{ event.name }}</h4>
        <span class="event__details--price">
          {{ event.is_free ? "FREE" : "N5000 – N2,000,000" }}
        </span>
      </div>
    </a>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "event",
  props: ["event"],
  data() {
    return {
      // events: [],
      // errors: [],
      // tickets: [],
      // prices: []
    };
  },
  mounted() {
    // axios
    //   .get(
    //     `https://eventsflw.herokuapp.com/v1/ticket-types/events/${this.event.id}`
    //   )
    //   .then((response) => {
    //     console.log(response)
    //     this.tickets.push(response.data.data);
    //   })
    //           .then(() => {
    //             this.tickets.map((ticket) => {
    //               if (ticket.length == 0) {
    //                 this.prices.push("Free");
    //               } else if (ticket.length == 1) {
    //                 let price = ticket.price / 100;
    //                 this.prices.push(price);
    //               } else {
    //                 this.prices.push(0);
    //               }
    //             });
    //             this.events.map((event) => {
    //               this.prices.map((price) => {
    //                 // event.push({ price: price });
    //                 // event.splice(index, 0, { price: price });
    //                 console.log(event, { price: price });
    //               });
    //             });
    //           })
    //           .catch((error) => {
    //             console.log(error);
    //           });
    //       });
    //     })
  }
};
</script>

<style scoped lang="scss">
@import "../main.scss";

.event__image {
  width: 80%;
  display: block;
  object-position: center;
  object-fit: cover;
  height: 150px;
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
  font-size: 18px;
  line-height: 22px;
  color: $textDark;
  margin: 5px 0;
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
}
</style>
