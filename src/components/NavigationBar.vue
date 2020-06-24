<template>
  <div>
    <div class="navigation-bar">
      <div class="nav-wrap">
        <div class="nav-bar">
          <div class="logo">
            <img class="" alt="Logo" src="../assets/images/logo.png" />
          </div>
          <div class="nav-list">
            <ul>
              <li class="nav-help">I didn’t get my tickets</li>
              <li><a class="nav-create">CREATE YOUR OWN EVENT</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <div class="event-container">
      <div class="event-heading">
        <h1>The best events happening now.</h1>
      </div>

      <div class="event-wrapper">
        <div class="wrapper-inner">
          <div class="event-listing">
            <div class="listing-inner">
              <a href="#"
                ><img src="../assets/images/event.png" />
                <div class="event-details">
                  <span class="event-date">8th February 2019</span>
                  <h4 class="event-name">The Nathan Cole Experience</h4>
                  <span class="event-price">N5000 – N2,000,000</span>
                </div></a
              >
            </div>
          </div>

          <div class="event-listing">
            <div class="listing-inner">
              <a href="#"
                ><img src="../assets/images/event.png" />
                <div class="event-details">
                  <span class="event-date">8th February 2019</span>
                  <h4 class="event-name">The Nathan Cole Experience</h4>
                  <span class="event-price">N5000 – N2,000,000</span>
                </div></a
              >
            </div>
          </div>

          <div class="event-listing">
            <div class="listing-inner">
              <a href="#"
                ><img src="../assets/images/event.png" />
                <div class="event-details">
                  <span class="event-date">8th February 2019</span>
                  <h4 class="event-name">The Nathan Cole Experience</h4>
                  <span class="event-price">N5000 – N2,000,000</span>
                </div></a
              >
            </div>
          </div>

          <div class="event-listing">
            <div class="listing-inner">
              <a href="#"
                ><img src="../assets/images/event.png" />
                <div class="event-details">
                  <span class="event-date">8th February 2019</span>
                  <h4 class="event-name">The Nathan Cole Experience</h4>
                  <span class="event-price">N5000 – N2,000,000</span>
                </div></a
              >
            </div>
          </div>
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
  align-items: center;
  display: flex;
}
.nav-bar {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
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

.logo img {
  height: 32px;
  width: 172px;
  object-fit: contain;
}

.nav-help {
  font-family: "Rubik";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.41px;
  color: #333333;
}

.nav-create {
  font-style: Bold;
  font-size: 12.2px;
  color: #ffffff;
  background-color: #f5a623;
  padding: 12px 20px;
  background-color: #f5a623;
  border-radius: 4px;
  font-weight: bold;
  border-bottom: 1px solid #959494;
}
//Add "scoped" attribute to limit CSS to this component only -->

.event-container {
  width: 90%;
  margin: 3rem auto;
}

.event-heading {
  padding-left: 4rem;
}
.event-heading h1 {
  padding-left: 2rem;
  font-size: 36px;
  line-height: 40px;
  color: #333333;
  margin: unset;
}

.event-image {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
  border-radius: 6px;

  background-image: url("../assets/images/event.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.event-details {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 5px;
  margin-top: 1rem;
}

.event-date {
  color: #4f4f4f;
  font-size: 12px;
  line-height: 14px;
}

.event-name {
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  margin: 5px 0;
}

.event-price {
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.5px;
  color: #4f4f4f;
}

.event-wrapper {
  text-align: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.wrapper-inner {
  padding: 10px 10px;
  display: flex;
  flex-wrap: wrap;
}

.listing-inner {
  padding: 5px 15px;
}

.event-listing {
  flex: 0 1 33.33%;
  margin-top: 2rem;
}

.event-listing img {
  width: 100%;
  display: block;
  object-position: center;
  object-fit: cover;
  height: 260px;
  border-radius: 6px;
}

.listing-inner a {
  text-decoration: none;
}
//Add "scoped" attribute to limit CSS to this component only -->

.footer-inner {
  width: 70%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 3rem;
}

.copyright span {
  color: #4a4a4a;
  font-size: 14;
  display: inline-block;
  margin-right: 2rem;
}

.policy span {
  color: #4a4a4a;
  font-size: 14;
  display: inline-block;
  margin-left: 2rem;
}

.policy .terms {
  margin-right: 2rem;
}
</style>
