<template>
  <div id="order">
    <div class="orderSummary__container">
      <h2 class="orderSummary__header">Order Summary</h2>
      <hr />
      <div class="orderSummary__wrapper">
        <div class="orderSummary__inner">
          <div class="orderSummary__amount">
            <span>2 - Regular</span>
          </div>
          <div class="orderSummary__price">
            <span>N10,000</span>
          </div>
        </div>
        <div class="orderSummary__inner">
          <div class="orderSummary__amount">
            <span>2 - Regular</span>
          </div>
          <div class="orderSummary__price">
            <span>N10,000</span>
          </div>
        </div>
      </div>
    </div>

    <hr />
    <div class="total">
      <div class="total__wrap">
        <span class="total__title">Sub-total</span>
        <span class="total__price">N110,000</span>
      </div>
      <div class="total__wrap">
        <span class="total__title total__title-capitalize">Vat</span>
        <span class="total__price">N1000</span>
      </div>
      <div class="total__wrap">
        <div class="total__title total__title-capitalize">Total payment</div>
        <div class="total__price">N111,000</div>
      </div>
      <button class="total__button">Continue</button>
    </div>
    <div class="guarantee">
      <div class="guarantee__icon"><guaranteeIcon class="icon" /></div>
      <div class="guarantee__text-wrap">
        <span class="guarantee__protection">100% customer protection</span>
        <span class="guarantee__text">Money back guarantee</span>
      </div>
    </div>
  </div>
</template>

<script>
import guaranteeIcon from "../assets/svg/guarantee.vue";

export default {
  name: "modal",
  components: {
    guaranteeIcon
  }
};
</script>

<style lang="scss">
.orderSummary__amount {
  font-size: 14px;
  color: #333333;
}

.summary-wrapper {
  width: 80%;
  margin: auto;
  padding-top: 2rem;
}

.orderSummary__price {
  color: #4f4f4f;
  font-size: 14px;
}
.orderSummary__wrapper {
  padding-top: 2rem;
  height: 300px;
}

.orderSummary__inner {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.total__wrap {
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
.total__title-capitalize {
  text-transform: uppercase;
}
.total-price {
  color: #333333;
  font-size: 24px;
}

.total__button {
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
</style>
