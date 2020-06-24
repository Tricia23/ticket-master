<template>
  <div id="modal" class="modal">
    <!-- button show -->
    <button @click="showModal = true">show</button>

    <div class="modal__wrap" v-if="showModal">
      <div class="modal__body">
        <div class="order__left">
          <div class="order-description-wrap">
            <button class="modal__close" @click="showModal = false">
              <closeIcon class="icon" />
              <span>Close</span>
            </button>
            <h1>The Nathan Cole Experience</h1>
            <h3>8th February 2019</h3>
            <TicketType />
            <span class="sales__end"
              >Ticket sales ends on 22nd November 2019</span
            >
          </div>
        </div>
        <div class="order__right">
          <div class="summary__wrapper">
            <OrderSummary />
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
export default {
  name: "modal",
  components: {
    closeIcon,
    OrderSummary,
    TicketType
  },

  data: function() {
    return {
      showModal: false,
      counter: 0
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    }
  }
};
</script>

<style scoped lang="scss">
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
  background-color: red;
  display: flex;
  transition: opacity 0.5s ease;
}

.modal__close {
  padding: 10px 15px;
  background: #ffffff;
  border-radius: 60px;
  border: none;
  justify-content: center;
  align-items: center;
  display: flex;
}

.modal__close span {
  font-size: 18px;
  color: #333333;
  line-height: 24px;
  margin-left: 7px;
}

//modal content
.order__left {
  background: #f2f2f2;
  width: 70%;
}
.order__right {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 30%;
}

.modal__body {
  display: flex;
  width: 100%;
}
.order-description-wrap {
  width: 70%;
  margin: auto;
  padding-top: 4rem;
}

.order-description-wrap h1 {
  font-size: 36px;
  color: #12122c;
  margin-top: 3rem;
  margin-bottom: 0;
}
.order-description-wrap h3 {
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  color: #4f4f4f;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 4rem;
}

.sales__end {
  color: #828282;
  font-size: 14px;
  letter-spacing: 0.5px;
  display: block;
  margin-top: 1.3rem;
}

//order summary

.summary__wrapper {
  width: 80%;
  margin: auto;
  padding-top: 2rem;
}
</style>
