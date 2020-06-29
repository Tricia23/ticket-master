<template>
  <div id="free" class="modal-vue">
    <!-- <button @click="showModal = true">show</button> -->

    <!-- overlay -->
   
    <div class="modal-wrap">
      <div class="overlay" v-if="showModal" @click="showModal = false"></div>
      <div class="modal" v-if="showModal">
        <div v-if="status === false" id="registerFree" class="registerFree">
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
              <input type="text" v-model="name" name="name" class="registerFree__form-input" />
              <p class="registerFree__error" v-if="nameError">Name is Required*</p>
            </div>
            <div class="registerFree__form-group">
              <label class="registerFree__form-label" for="email">Email address</label>
              <input type="email" v-model="email" name="email" class="registerFree__form-input" required/>
              <p class="registerFree__error" v-if="emailError">Wrong email format*</p>
            </div>
            <div class="registerFree__form-group">
              <label class="registerFree__form-label" for="email">Phone number</label>
              <input
                type="tel"
                v-model="phone"
                name="phoneNumber"
                class="registerFree__form-input"
              />
              <p class="registerFree__error" v-if="phoneError">Phone Number is Required*</p>
            </div>
          </form>
          <button class="registerFree__button" @click="submit">Continue</button>
        </div>
        <RegisterFreeConfirmation v-else :show="status" :showModal="showModal" @show="toggle" />
      </div>
    </div>
  </div>
</template>

<script>
import RegisterFreeConfirmation from "@/components/RegisterFreeConfirmation";
import axios from "axios";
import closeIcon from "../assets/svg/close.vue";
export default {
  name: "registerFree",
  components: {
    closeIcon,
    RegisterFreeConfirmation
  },
  props: ["id"],
  data: function() {
    return {
      showModal: true,
      name: "",
      email: "",
      phone: "",
      nameError:false,
      phoneError:false,
      emailError:false,
      successModal: false,
      status: false
    };
  },
  methods: {
    submit() {
      this.phoneError = false 
      this.nameError = false 
      this.emailError = false

      if (!this.name) {
       this.nameError =true;
      }

      if (!this.phone) {
       this.phoneError =true;
      }

      const emailValidator = /^\w+[\w-+.]*@\w+([-.]\w+)*.[a-zA-Z]{2,}$/;

      if (!this.email.match(emailValidator)) {
        this.emailError = true;
      }

      
      
      const data = {
        name: this.name,
        phone: this.phone,
        email: this.email
      };
      console.log(this.id);
      axios
        .post(
          `https://eventsflw.herokuapp.com/v1/events/${this.id}/register`,
          data
        )
        .then(response => {
          console.log(response.data);
          const status = response.data.status;
          console.log(response.data.status);
          if (status === "success") {
            this.successModal = true;
            this.status = !this.status;
          }
        });
        
    },
    toggle() {
      this.showModal=false
    }
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
  padding: 8px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: #fdfdfd;
}
.registerFree__error{
  color:red;
  margin-top:3px;
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
  background-color: transparent;
  border: none;
  position: absolute;
  top: 51px;
  right: 21px;
  outline: none;
}
.registerFree__modal-header {
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.065em;
  text-transform: uppercase;
  color: #333333;
  font-weight: 500;
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
.modal-wrap {
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
}
.registerFree__modal-header h3{
  font-size:14px;
}

.modal-vue .modal {
  top:8%;
  right: 8%;
  position: fixed;
  min-width: 68%;
  z-index: 9999;
  margin: auto;
  padding: 30px 30px 10px 30px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  
}

@media (min-width: 768px) {
  .total__button {
    padding: 20px 20px;
  }

  .modal-vue .modal {
    top: 20%;
    right:30%;
    position: fixed;
    min-width: 25%;
    z-index: 9999;
    margin: auto;
   padding: 30px 30px 10px 30px;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    
  }
  .registerFree__form-input {
    padding: 15px;
  
  }
}
@media (min-width: 650px) and (max-width: 1200px) {
  .modal-vue .modal {
    top: 20%;
    right: 25%;
    min-width: 40%;
     padding: 30px 30px 10px 30px;
  }

  .registerFree__form-input {
   padding: 15px;
  
  }
}
</style>
