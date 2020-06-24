<template>
  <div id="registerFree" class="registerFree">
    <div class="registerFree__modal-header">
      <button class="close" @click="showModal = false">
        <closeIcon />
      </button>

      <h3>Register for free</h3>
    </div>
    <hr />
    <form class="registerFree__form">
      <div class="registerFree__form-group">
        <label class="registerFree__form-label" for="email">Full name</label>
        <input type="text" name="name" class="registerFree__form-input" />
      </div>
      <div class="registerFree__form-group">
        <label class="registerFree__form-label" for="email"
          >Email address</label
        >
        <input type="email" name="email" class="registerFree__form-input" />
      </div>
      <div class="registerFree__form-group">
        <label class="registerFree__form-label" for="email">Phone number</label>
        <input
          type="text"
          name="phone-number"
          class="registerFree__form-input"
        />
      </div>
    </form>
    <button class="registerFree__button">Continue</button>
  </div>
</template>

<script>
import closeIcon from "../assets/svg/close.vue";
export default {
  name: "registerFree",
  components: {
    closeIcon
  },

  data: function() {
    return {
      showModal: false
    };
  }
};
</script>

<style lang="scss">
.registerFree__form-group {
  margin-top: 25px;
}
.registerFree__form {
  padding: 5px 0 20px 0;
}
.registerFree__form-label {
  color: #333333;
  font-weight: 300;
  font-size: 16px;
}
.registerFree__form-input {
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
.registerFree__button {
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
  margin-top: 1rem;
}
.registerFree__modal-header {
  width: 100%;
  display: inline-flex;
}
.close {
  background-color: none;
  border: none;
  position: absolute;
}
.registerFree__modal-header {
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.065em;
  text-transform: uppercase;
  color: #333333;
  font-weight: 500;
}
</style>
