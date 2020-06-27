<template v-if="showModal">
  <div  id="app">
    <div  class="registerFree__modal-header">
      <button class="close" @click="showModal = false">
        <closeIcon />
      </button>
    </div>
    <div class="confirmation-wrapper">
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
      <span>You have successfully registered for the nathan cole experience.</span>
    </div>
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
      showModal: true,
     
    };
  },
};
</script>

<style scoped lang="scss">
@import "../main.scss";
.confirmation-wrapper span {
  text-align: center;
  display: block;
}
.confirmation-check-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
}

.confirmation-wrapper {
  padding: 3rem 2rem;
}
.checkmark__circle {
  stroke-dasharray: 406;
  stroke-dashoffset: 406;
  stroke-width: 5;
  stroke-miterlimit: 10;
  stroke: $checkColor;
  fill: none;

  animation: stroke 0.6s $curve forwards;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 150;
  stroke-dashoffset: 150;
  animation: stroke 0.3s $curve 0.8s forwards;
}

.close {
  background-color: transparent;
  border: none;
  position: absolute;
  top: 51px;
    right: 21px;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%,
  100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 1px $checkColor;
  }
}
</style>
