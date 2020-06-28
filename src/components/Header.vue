<template>
  <div id="app">
    <div class="navigation__wrap">
      <div class="navigation__inner">
        <a href="/" class="navigation__logo">
          <img class="navigation__image" alt="Logo" src="../assets/images/logo.png" />
        </a>
        <div class="hamburger__wrap">
          <button class="hamburger" type="button" @click="menuOpen = !menuOpen">
            <span class="hamburger__line"></span>
            <span class="hamburger__middle"></span>
            <span class="icon-bar hamburger__line"></span>
          </button>
        </div>
        <div class="navigation__list-wrap">
          <ul class="navigation__list">
            <li class="navigation__list-item navigation--text">I didn’t get my tickets</li>
            <li class="navigation__list-item">
              <a class="navigation--button">CREATE YOUR OWN EVENT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row dropdown" :class="{ 'dropdown__after': menuOpen }">
      <ul class="navlist">
        <li class="navlistitem">
          <a class="nav__Link nav__link-primary">I didn’t get my own tickets</a>
        </li>
        <li class="navlistitem">
          <a class="nav__link navigation--button">CREATE YOUR OWN EVENT</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      menuOpen: false
    };
  }
};
</script>

<style scoped lang="scss">
@import "../main.scss";

.navigation__list-wrap {
  display: none;
}
.navigation__inner {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.navigation__image {
  height: 25px;
  width: 100px;
  object-fit: contain;
}

.logo,
.hamburger-wrap {
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
}

.hamburger-wrap {
  float: right;
  justify-content: flex-end;
  display: flex;
}

.hamburger {
  width: 45px;
  margin-right: 36px;
  height: 45px;
  background-color: $primary;
  border-radius: 4px;
  border: none;
}

.hamburger:focus {
  outline: none;
}

.hamburger__line,
.hamburger__middle {
  display: block;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: $secondary;
  margin-top: 7px;
  margin-bottom: 7px;
}

.hamburger__middle {
  width: 20px;
  margin-left: 10px;
}

.dropdown {
  height: 0px;
  background-color: $secondary;
  transition: height 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.dropdown__after {
  margin-top: 5px;
  height: calc(100vh - 50px);
  transition: height 0.2s ease;
  position: fixed;
  width: 100vw;
  top: 61px;
}

.navlist {
  list-style: none;
}

.navlistitem {
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
}

.nav__link-primary {
  color: $primary;
  text-decoration: none;
}

.navigation--button {
  font-style: Bold;
  font-family: $fontFlutter;
  font-size: 12.2px;
  color: $secondary;
  background-color: $primary;
  padding: 12px 20px;
  border-radius: 4px;
  font-weight: bold;
  border-bottom: 1px solid #959494;
}
.navigation__wrap {
  background: $background;
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 52px;
  padding-top: 14px;
}
//Desktop View
@media (min-width: 768px) {
  .hamburger__wrap {
    display: none;
  }

  .navigation__list-wrap {
    display: flex;
  }
  .navigation__wrap {
    clear: both;
    overflow: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    background: none;
    top: unset;
    position: relative;
  }

  .navigation__inner {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }

  .navigation__list {
    display: flex;
    align-items: center;
  }

  .navigation__list-wrap {
    float: right;
  }

  .navigation__list-item {
    display: inline-block;
    padding: 10px;
    font-size: 20px;
    font-family: $fontFlutter;
  }

  .navigation__image {
    height: 32px;
    width: 172px;
  }

  .navigation--text {
    font-family: $fontFlutter;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.41px;
    color: $textDark;
  }
}
</style>
