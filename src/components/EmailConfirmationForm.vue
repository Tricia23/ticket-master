<template>
  <form class="form">
    <div class="form__group">
      <label class="form__label" for="email">Email address</label>
      <input type="email" name="email" class="form__input" />
    </div>
    <button class="continue-button">Continue</button>
  </form>
</template>

<style scoped lang="scss">
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

.form__group {
  margin-top: 2rem;
}

.form__label {
  color: #333333;
  font-weight: 300;
  font-size: 16px;
}
.form__input {
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

.form {
  padding: 2rem 2rem 3.5rem 2rem;
}
</style>
