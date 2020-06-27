<template>
  <div id="app">
    <div class="counter__wrap">
      <button class="counter__button" v-on:click="decrement">-</button>
      <div class="counter">{{ counter }}</div>
      <button class="counter__button" v-on:click="increment">+</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "ticket",

  data: function() {
    return {
      counter: 0
    };
  },
  props: ["quantity", "id"],
  methods: {
    ...mapActions(["decrementTicketType", "incrementTicketType"]),
    increment() {
      this.counter++;
      this.counter > this.quantity ? (this.counter = this.quantity) : "";
      this.$emit("increment", this.id);
    },
    decrement() {
      this.counter--;

      this.counter < 1 ? (this.counter = 0) : "";
      this.$emit("decrement", this.id);
    }
  }
};
</script>
<style lang="scss">
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
