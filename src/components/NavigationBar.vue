<template>
  <div class="navigation-bar">
    <div class="nav-wrap">
      <div class="nav-bar">
        <div class="logo">
          <img class="" alt="Logo" src="../assets/logo.png" />
        </div>
        <div class="nav-list">
          <ul>
            <li>I didn’t get my tickets</li>
            <li><a>CREATE YOUR OWN EVENT</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-wrap {
  clear: both;
  overflow: auto;
  justify-content: center;
  display: flex;
}
.nav-bar {
  width: 80%;
  border: 1px solid red;
}
.logo {
  float: left;
  line-height: 70px;
  position: absolute;
}
.nav-list {
  float: right;
}
ul li {
  display: inline-block;
  padding: 10px;
  font-size: 20px;
  font-family: raleway;
}

img {
  height: 32px;
  width: 172px;
  object-fit: contain;
}
</style>
