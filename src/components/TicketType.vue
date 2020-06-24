<template>
  <div id="ticket">
    <div class="ticket__summary-wrap">
      <div class="ticket__summary-inner">
        <div class="ticket__col ticket__col-type">Regular</div>
        <div class="ticket__col ticket__col-price">N5000</div>
        <div class="ticket__col ticket__col-counter">
          <div class="counter__wrap">
            <button class="counter__button" v-on:click="decrement">-</button>
            <div class="counter">{{ counter }}</div>
            <button class="counter__button" v-on:click="increment">+</button>
          </div>
        </div>
      </div>
      <div class="ticket__summary-inner">
        <div class="ticket__col ticket__col-type">Regular</div>
        <div class="ticket__col ticket__col-price">N5000</div>
        <div class="ticket__col ticket__col-counter">
          <div class="counter__wrap">
            <button class="counter__button" v-on:click="decrement">-</button>
            <div class="counter">{{ counter }}</div>
            <button class="counter__button" v-on:click="increment">+</button>
          </div>
        </div>
      </div>
      <div class="ticket__summary-inner">
        <div class="ticket__col ticket__col-type">Regular</div>
        <div class="ticket__col ticket__col-price">N5000</div>
        <div class="ticket__col ticket__col-counter">
          <div class="counter__wrap">
            <button class="counter__button" v-on:click="decrement">-</button>
            <div class="counter">{{ counter }}</div>
            <button class="counter__button" v-on:click="increment">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ticket",

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
.ticket__col-type {
  font-size: 24px;
  line-height: 24px;
  color: #333333;
}

.ticket__col-price {
  font-size: 24px;
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
</style>
