<template>
  <div id="paymentForm">
    <div class="payForm">
      <div @click="emitSomething" class="PayForm__icon">
        <backIcon class="icon" />
        <span class="PayForm__icon-text">Go &nbsp; back</span>
      </div>
      <hr />
      <form class="payForm__wrap">
        <div class="payForm__group">
          <label class="pay__form-label" for="email">Full name</label>
          <input type="text" name="name" v-model="name" class="payForm__input" />
        </div>
        <div class="payForm__group">
          <label class="pay__form-label" for="email">Email address</label>
          <input type="email" name="email" v-model="email" class="payForm__input" />
        </div>
        <div class="payForm__group">
          <label class="pay__form-label" for="email">Phone number</label>
          <input type="text" name="phone" v-model="phone" class="payForm__input" />
        </div>
      </form>

      <div class="total__wrap">
        <div class="total__title total__title-capitalize">Total payment</div>
        <div class="total__price">{{totalPayment.toLocaleString()}}</div>
      </div>
      <button @click="submit" class="total__button">Continue</button>

      <div class="guarantee">
        <div class="guarantee__icon">
          <guaranteeIcon class="icon" />
        </div>
        <div class="guarantee__text-wrap">
          <span class="guarantee__protection">100% customer protection</span>
          <span class="guarantee__text">Money back guarantee</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import guaranteeIcon from "../assets/svg/guarantee.vue";
import backIcon from "../assets/svg/back.vue";
export default {
  name: "modal",
  components: {
    backIcon,
    guaranteeIcon
  },
  data: function() {
    return {
      name: "",
      email: "",
      phone: ""
    };
  },
  computed: {
    ...mapGetters(["ticketTypes"])
  },

  props: ["totalPayment", "vat", "hiddenMode"],
  methods: {
    submit() {
      const bought = {};

      this.ticketTypes.map(ticket => {
        if (ticket.count !== 0) {
          bought[ticket.id] = ticket.count;
        }
      });

      const data = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        base_amount: this.totalPayment,
        value_added_tax: this.vat,
        event_id: Number(this.$route.params.id),
        tickets_bought: bought
      };

      window.FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-50436194c91fc1ddf511f1504a56d3b3-X",
        tx_ref: "new-ticket-order" + new Date(),
        amount: this.totalPayment,
        currency: "NGN",
        country: "NG",
        payment_options: "card",
        
        customer: {
          email: this.email,
          phone_number: this.phone,
          name: this.name
        },
        callback: function() {
          axios
            .post(`https://eventsflw.herokuapp.com/v1/orders`, data)
            .then(response => {
              console.log(response.data);
              const status = response.data.status;
              console.log(response.data.status);
              if (status === "success") {
              this.$router.push({name: "EventsListing"})
              }
            });
        },
        onclose: function() {},
        customizations: {
          title: "Hire Me Please",
          description: "Buy Tickets"
        }
      });
    },

    emitSomething() {
      this.$emit("show");
    }
  }
};
</script>

<style scoped lang="scss">
.PayForm__icon {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.PayForm__icon-text {
  letter-spacing: 0.065em;
  font-size: 18px;
  margin-left: 10px;
  color: #333333;
}
.payForm__label {
  color: #333333;
  font-weight: 300;
  font-size: 16px;
}
.payForm__input {
  display: block;
  margin-top: 10px;
  background: #fdfdfd;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  width: 100%;
  padding: 15px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: #fdfdfd;
}

.payForm__group {
  margin-top: 2rem;
}
.payForm__wrap {
  padding: 2rem 0;
}

.total__wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.total__title-capitalize {
  text-transform: uppercase;
}
.total__price {
  color: #333333;
  font-size: 24px;
}

.total__button {
  width: 100%;
  background: #f5a623;
  border-radius: 4px;
  padding: 11px 20px;
  border-bottom: 1px solid #959494;
  border-left: none;
  border-right: none;
  border-top: none;
  color: #ffffff;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.guarantee {
  display: flex;
  align-items: center;
}

.guarantee__text-wrap {
  margin-left: 10px;
}

.guarantee__protection {
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #333333;
  display: block;
  line-height: 14px;
}
.guarantee__text {
  font-size: 13px;
  letter-spacing: 0.5px;
  color: #828282;
  display: block;
  line-height: 14px;
}
.guarantee__icon {
  display: flex;
}
@media (min-width: 768px) {
  .total__button {
    padding: 20px 20px;
  }
}
</style>
