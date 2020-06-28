<!-- <template>
  <div id="confirmation">
    <div class="email-confirmation-container">
      <div class="email-confirmation-wrapper">
        <div class="email-confirmation-inner">
          <h3>Enter your email and we’ll send your tickets right away!</h3>
          <div class="confirmation-card-wrapper">
            <!-- <form>
              <div class="form-group">
                <label class="form-label" for="email">Email address</label>
                <input type="email" name="email" class="form-input" />
              </div>
              <button class="continue-button">Continue</button>
            </form> -->
            <div class="confirmation-message-wrap">
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
              <span class="confirmation-message"
                >Your tickets have been confirmed and sent to your email address
                at <span class="email-link">ted@flutterwave.com</span>
              </span>
              <button class="continue-button">BUY MORE TICKETS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../main.scss";

@font-face {
  font-family: "Flutterwave";
  src: url("https://res.cloudinary.com/dinhhkvvj/raw/upload/v1592615058/fonts/FLW-Regular_tq1gjf.ttf")
    format("opentype");
}

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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

  margin-top: 1.7rem;
}

.form-group {
  margin-top: 2rem;
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
form {
  padding: 2rem 2rem 3.5rem 2rem;
}
.email-confirmation-container {
  width: 30%;
  margin: 5rem auto 0 auto;
}

.email-confirmation-wrapper {
  padding-bottom: 1rem;
}
.email-confirmation-inner h3 {
  text-align: center;
  font-size: 24px;
  padding: 0 2rem;
  color: #333333;
  font-family: "Flutterwave";
  font-weight: normal;
  font-style: normal;
}

.confirmation-card-wrapper {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}

.confirmation-message {
  text-align: center;
  display: block;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.065em;
  color: #000000;
  padding: 0 2rem;
  margin-bottom: 1rem;
  font-family: "Flutterwave";
  font-weight: normal;
  font-style: normal;
}

//another
.confirmation-message-wrap {
  padding: 4rem 3rem 6rem 3rem;
}

.confirmation-check-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
}
.email-link {
  color: #37a6ee;
}
</style> -->
