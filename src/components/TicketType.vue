<template>
  <div id="ticket">
    <div class="ticket__summary-wrap" v-for="(ticket, index) in ticketTypes" :key="index">
      <div class="ticket__summary-inner">
        <div class="ticket__col ticket__col-type">{{ ticket.name }}</div>
        <div class="ticket__col ticket__col-price">N{{ ticket.price.toLocaleString() }}</div>
        <div class="ticket__col ticket__col-counter">
          <div class="counter__wrap">
            <CounterButton
              @decrement="decrement"
              @increment="increment"
              :quantity="ticket.quantity"
              :id="ticket.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CounterButton from "@/components/CounterButton";
import { mapState, mapActions } from "vuex";

export default {
  name: "ticket",
  components: {
    CounterButton
  },
  props: ["id"],
  data: function() {
    return {
      showModal: false,
      counter: 0,
      prices: {},
      elements: [],
      quantities: {}
    };
  },
  computed: {
    ...mapState(["ticketTypes"])
  },
  mounted() {
    console.log(this.id);
    // axios
    //   .get(`https://eventsflw.herokuapp.com/v1/ticket-types/events/${this.id}`)
    //   .then(response => {
    //     this.tickets = response.data.data;
    //   })
    //   .then(() => {
    //     const prices = {};
    //     this.tickets.forEach((element, index) => {
    //       prices[element.name] = {
    //         index: `${index}`,
    //         price: element.price,
    //         quantity: element.qty_available
    //       };
    //     });

    //     this.prices = prices;

    //     console.log(this.prices);
    //   });
  },

  methods: {
    ...mapActions(["incrementTicketType", "decrementTicketType"]),
    increment(id) {
      this.incrementTicketType(id);
    },
    decrement(id) {
      this.decrementTicketType(id);
    }
  }
};
</script>

<style scoped lang="scss">
.ticket__col-type {
  font-size: 16px;
  line-height: 24px;
  color: #333333;
}

.ticket__col-price {
  font-size: 16px;
  line-height: 28px;
  color: #333333;
  justify-content: center;
  display: flex;
  
}

.counter__wrap {
  justify-content: flex-end;
  display: flex;
}
.ticket__summary-inner {
  display: flex;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #bdbdbd;
  margin-top: 10px;
}
.ticket__col {
  width: 33%;
}
.counter__wrap {
  display: flex;
  align-items: center;
}
.counter__button {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  margin: 0 10px;
  border: none;
}
.counter {
  font-size: 24px;
  color: #333333;
}

@media (min-width: 768px) {
  .ticket__col-type {
    font-size: 24px;
  }

  .ticket__col-price {
    font-size: 24px;
  }
}
</style>
