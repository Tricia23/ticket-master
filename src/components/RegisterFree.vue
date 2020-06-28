<template>
  <div id="free" class="modal-vue">
    <!-- button show -->
    <button @click="showModal = true">show</button>

    <!-- overlay -->
    <div class="overlay" v-if="showModal" @click="showModal = false"></div>

    <!-- modal -->
    <div class="modal-wrap">
      <div class="modal" v-if="showModal">
        <div class="modal-content">
          <!-- <div class="confirmation-wrapper">
            <div class="confirmation-check-icon">
              <svg
                width="137"
                height="137"
                viewBox="0 0 137 137"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="checkmark__circle"
                  d="M125.583 63.2476V68.4993C125.576 80.8089 121.59 92.7864 114.22 102.646C106.849 112.505 96.4894 119.717 84.685 123.207C72.8806 126.698 60.2642 126.278 48.7174 122.013C37.1707 117.747 27.3122 109.862 20.6124 99.5359C13.9126 89.2093 10.7303 76.9937 11.5402 64.7108C12.3502 52.4279 17.1089 40.7358 25.1067 31.3784C33.1045 22.021 43.9128 15.4996 55.9197 12.7868C67.9267 10.074 80.4889 11.3151 91.7328 16.3251"
                  stroke="#F5A623"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="checkmark__check"
                  d="M125.583 22.8335L68.5 79.9739L51.375 62.8489"
                  stroke="#F5A623"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span
              >You have successfully registered for the nathan cole
              experience.</span
            >
          </div> -->
          <div class="modal-header">
            <button class="close" @click="showModal = false">
              <closeIcon />
            </button>

            <h3>Register for free</h3>
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
          <button class="continue-button">Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import closeIcon from "../assets/svg/close.vue";
export default {
  name: "free",
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

<style scoped lang="scss">
body {
  background-color: #f2f2f2;
}
.modal-vue .overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-vue .modal {
  position: relative;
  width: 25%;
  z-index: 9999;
  margin: auto;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 65%;
}

.modal-vue .close {
  position: absolute;
  top: 35px;
  right: 10px;
}
.modal-wrap {
  height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
}
.close {
  background-color: white;
  border: none;
  position: absolute;
}

.modal-header {
  width: 100%;
  display: inline-flex;
}
.modal-header h3 {
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.065em;
  text-transform: uppercase;
  color: #333333;
  font-weight: 500;
}
.form-group {
  margin-top: 25px;
}
form {
  padding: 5px 0 20px 0;
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
  margin-top: 1rem;
}

.modal-content {
  width: 90%;
  margin: auto;
}

.modal-vue {
  position: fixed;
  width: 100%;
}
.confirmation-check-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
}

.confirmation-wrapper span {
  text-align: center;
  display: block;
}


</style>
