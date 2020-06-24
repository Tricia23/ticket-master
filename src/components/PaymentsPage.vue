<template>
  <div id="modal" class="modal-vue">
    <!-- button show -->
    <button @click="showModal = true">show</button>

    <div class="modal-wrap" v-if="showModal">
      <div class="modal-body-content">
        <div class="order-left">
          <div class="order-description-wrap">
            <button class="close" @click="showModal = false">
              <closeIcon class="icon" />
              <span>Close</span>
            </button>
            <h1>The Nathan Cole Experience</h1>
            <h3>8th February 2019</h3>
            <div class="summary-detail-wrap">
              <div class="summary-detail-inner">
                <div class="col type">Regular</div>
                <div class="col price">N5000</div>
                <div class="col counter-wrap">
                  <div class="counter-group">
                    <button v-on:click="decrement">-</button>
                    <div class="counter">{{ counter }}</div>
                    <button v-on:click="increment">+</button>
                  </div>
                </div>
              </div>
              <div class="summary-detail-inner">
                <div class="col type">Regular</div>
                <div class="col price">N5000</div>
                <div class="col counter-wrap">
                  <div class="counter-group">
                    <button v-on:click="decrement">-</button>
                    <div class="counter">{{ counter }}</div>
                    <button v-on:click="increment">+</button>
                  </div>
                </div>
              </div>
              <div class="summary-detail-inner">
                <div class="col type">Regular</div>
                <div class="col price">N5000</div>
                <div class="col counter-wrap">
                  <div class="counter-group">
                    <button v-on:click="decrement">-</button>
                    <div class="counter">{{ counter }}</div>
                    <button v-on:click="increment">+</button>
                  </div>
                </div>
              </div>
            </div>
            <span class="sales-end"
              >Ticket sales ends on 22nd November 2019</span
            >
          </div>
        </div>
        <div class="order-right">
          <div class="summary-wrapper">
            <!-- <div class="summary-wrapper-inner">
              <h2>Order Summary</h2>
              <hr />
              <div class="order-summary-wrap">
                <div class="order-summary">
                  <div class="type-amount">
                    <span>2 - Regular</span>
                  </div>
                  <div class="type-price">
                    <span>N10,000</span>
                  </div>
                </div>
                <div class="order-summary">
                  <div class="type-amount">
                    <span>2 - Regular</span>
                  </div>
                  <div class="type-price">
                    <span>N10,000</span>
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div class="total-wrap">
              <div class="total-summary-wrap">
                <div class="total-title">Sub-total</div>
                <div class="price">N110,000</div>
              </div>
              <div class="total-summary-wrap">
                <div class="total-title capitalize">Vat</div>
                <div class="price">N1000</div>
              </div>
              <div class="total-summary-wrap">
                <div class="total-title capitalize">Total payment</div>
                <div class="total-price">N111,000</div>
              </div>
              <button class="continue-button">Continue</button>
            </div>
            <div class="customer-protection-wrap">
              <div class="icon-wrapper"><guaranteeIcon class="icon" /></div>
              <div class="protection-text-wrap">
                <span class="protection">100% customer protection</span>
                <span class="gurantee">Money back guarantee</span>
              </div>
            </div> -->

            <div class="user-wrapper">
              <div class="back">
                <backIcon class="icon" />
                <span>Go &nbsp; back</span>
              </div>
              <hr />
              <form>
                <div class="form-group">
                  <label class="form-label" for="email">Full name</label>
                  <input type="text" name="name" class="form-input" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="email">Email address</label>
                  <input type="email" name="email" class="form-input" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="email">Phone number</label>
                  <input type="text" name="phone-number" class="form-input" />
                </div>
              </form>

              <div class="total-summary-wrap">
                <div class="total-title capitalize">Total payment</div>
                <div class="total-price">N111,000</div>
              </div>

              <button class="continue-button">Continue</button>
              <div class="customer-protection-wrap">
                <div class="icon-wrapper"><guaranteeIcon class="icon" /></div>
                <div class="protection-text-wrap">
                  <span class="protection">100% customer protection</span>
                  <span class="gurantee">Money back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
  </div>
</template>

<script>
import closeIcon from "../assets/svg/close.vue";
import guaranteeIcon from "../assets/svg/guarantee.vue";
import backIcon from "../assets/svg/back.vue";
export default {
  name: "modal",
  components: {
    closeIcon,
    backIcon,
    guaranteeIcon
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
.modal-vue .modal-wrap {
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

.modal-vue .modal {
  width: 100%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  height: 100vh;
}

.modal-vue .close {
  padding: 10px 15px;
  background: #ffffff;
  border-radius: 60px;
  border: none;
  justify-content: center;
  align-items: center;
  display: flex;
}

.modal-vue .close span {
  font-size: 18px;
  color: #333333;
  line-height: 24px;
  margin-left: 7px;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
}
//modal content
.order-left {
  background: #f2f2f2;
  width: 70%;
}
.order-right {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 30%;
}

.modal-body-content {
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

.summary-detail-inner {
  display: flex;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #bdbdbd;
  margin-top: 10px;
}
.summary-detail-inner .col {
  width: 33%;
}
.counter-group {
  display: flex;
  align-items: center;
}
.counter-group button {
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

.summary-detail-innerr .type {
  font-size: 24px;
  line-height: 24px;
  color: #333333;
}

.summary-detail-inner .price {
  font-size: 24px;
  line-height: 28px;
  color: #333333;
  justify-content: center;
  display: flex;
}

.counter-wrap {
  justify-content: flex-end;
  display: flex;
}

.sales-end {
  color: #828282;
  font-size: 14px;
  letter-spacing: 0.5px;
  display: block;
  margin-top: 1.3rem;
}

//order summary

.type-amount {
  font-size: 14px;
  color: #333333;
}

.summary-wrapper {
  width: 80%;
  margin: auto;
  padding-top: 2rem;
}

.type-price {
  color: #4f4f4f;
  font-size: 14px;
}
.order-summary-wrap {
  padding-top: 2rem;
  height: 300px;
}

.order-summary {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.total-summary-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.total-summary-wrap .total-title {
  color: #333333;
  font-size: 14px;
  font-weight: 400;
}
.total-summary-wrap .price {
  color: #4f4f4f;
  font-weight: 300;
}
.capitalize {
  text-transform: uppercase;
}
.total-price {
  color: #333333;
  font-size: 24px;
}

.continue-button {
  width: 100%;
  background: #f5a623;
  border-radius: 4px;
  padding: 20px 20px;
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

.customer-protection-wrap {
  display: flex;
  align-items: center;
}

.protection-text-wrap {
  margin-left: 10px;
}

.protection {
  font-size: 14px;
  letter-spacing: 0.5px;
  color: #333333;
  display: block;
  line-height: 14px;
}
.guarantee {
  font-size: 13px;
  letter-spacing: 0.5px;
  color: #828282;
  display: block;
  line-height: 14px;
}
.icon-wrapper {
  display: flex;
}

//form
.back {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.back span {
  letter-spacing: 0.065em;
  font-size: 18px;
  margin-left: 10px;
  color: #333333;
}
.form-label {
  color: #333333;
  font-weight: 300;
  font-size: 16px;
}
.form-input {
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

.form-group {
  margin-top: 2rem;
}
form {
  padding: 2rem 0;
}
</style>
