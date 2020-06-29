<template>
  <div id="modal" class="modal">
    <!-- button show -->

    <div class="modal__wrap" v-if="showPayModal">
      <div class="modal__body">
        <div class="order__left">
          <div class="order__description-wrap">
            <button class="modal__close" @click="showPayModal">
              <closeIcon class="icon" />
              <span>Close</span>
            </button>
            <h1 class="modal__text">{{event.name }}</h1>
            <h3>{{ moment(event.start_time).format("LL") }}</h3>
            <TicketType :id="id" @0="regular = $event" @1="vip = $event" @2="table= $event" />
            <span class="sales__end">Ticket sales ends on {{ moment(event.tickets_sale_end_date ).format("LL") }}</span>
          </div>
        </div>
        <div class="order__right">
          <div class="summary__wrapper">
            <OrderSummary :id="id" :reg="newRegular" :vip="newVip" :tab="newTable" />
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
  </div>
</template>

<script>
import closeIcon from "../assets/svg/close.vue";
import OrderSummary from "../components/OrderSummary.vue";
import TicketType from "../components/TicketType.vue";

import axios from 'axios'
export default {
  name: "modal",
  components: {
    closeIcon,
    OrderSummary,
    TicketType
  },
  data: function() {
    return {
      vip: null,
      table: null,
      regular: null,
      event: {}
    };
    
  },
  props: ["id", "eventName"],
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    showPayModal() {
      this.$router.push({name: 'EventDetails', params: {id:this.$route.params.id}}) 
    },
    getEvent: function () {
        const param = this.$route.params.id;
    axios
      .get("https://eventsflw.herokuapp.com/v1/events/" + param)
      .then(response => {
        this.event = response.data.data;
      });
    }
  },
  computed: {
    newRegular: function() {
      return this.regular;
    },
    newTable: function() {
      return this.table;
    },
    newVip: function() {
      return this.vip;
    }
  },
  watch: {
 
  },
  mounted() {
    this.getEvent()
  }
};
</script>

<style scoped lang="scss">
@import "../main.scss";
body {
  background-color: #f2f2f2;
}
hr {
  color: #bdbdbd;
}
.modal__wrap {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: opacity 0.5s ease;
}

.modal__close {
  padding: 8px 12px;
  background: #ffffff;
  border-radius: 60px;
  border: none;
  justify-content: center;
  align-items: center;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.modal__text {
  font-size: 20px;
  margin-top: 3rem;
  font-family: $fontFlutterBold;
}

.modal__close span {
  font-size: 14px;
  color: #333333;
  line-height: 24px;
  margin-left: 7px;
}

//modal content
.order__left {
  background: #f2f2f2;
  width: 100%;
}
.order__right {
  background: #f2f2f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding-bottom: 2rem;
}

.modal__body {
  width: 100%;
}
.order__description-wrap {
  width: 80%;
  margin: auto;
  padding-top: 2rem;
}

.order-description-wrap h1 {
  font-size: 20px;
  color: #12122c;
  margin-top: 3rem;
  margin-bottom: 0;
}
.order__description-wrap h3 {
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  color: #4f4f4f;
  font-weight: 400;
  margin-top: 5px;
  margin-bottom: 2rem;
}

.sales__end {
  color: #828282;
  font-size: 14px;
  letter-spacing: 0.5px;
  display: block;
  margin-top: 1.3rem;
  text-align: center;
}

.summary__wrapper {
  width: 80%;
  margin: auto;
  padding-top: 2rem;
  margin-top: -2px;
}

@media (min-width: 768px) {
  .modal__body {
    display: flex;
  }
  .order__left {
    width: 70%;
  }
  .modal__close {
    padding: 10px 15px;
  }
  .modal__close span {
    font-size: 18px;
  }

  .order__right {
    background: #ffffff;
    width: 30%;
    padding-bottom: unset;
  }
  .order__description-wrap h1 {
    font-size: 36px;
  }
  .order__description-wrap {
    width: 70%;
    margin: auto;
    padding-top: 4rem;
  }
  .sales__end {
    text-align: left;
  }

  .modal__text {
    font-size: 36px;
    margin-bottom: 5px;
  }

  .summary__wrapper {
    margin-top: unset;
  }
}
</style>
