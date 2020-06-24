<template>
  <footer id="footer" class="footer">
    <div class="footer__inner">
      <div class="footer__copyright">
        <span class="footer__copyright--text"
          >Copyright 2019. Flutterwave inc</span
        >
      </div>
      <div class="footer__policy">
        <span class="footer__policy--text footer__policy--terms"
          >Terms and conditions</span
        >
        <span class="footer__policy--text">Privacy Policy</span>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "../main.scss";

.footer__inner {
  margin: auto;
  padding: 1rem;
  text-align: center;
}
.footer__copyright--text {
  color: $textFooter;
  font-size: $fontNormal;
  font-family: $fontSfp;
  display: inline-block;
  margin-bottom: 20px;
}
.footer__policy--text {
  color: $textFooter;
  font-size: $fontNormal;
  font-family: $fontSfp;
  display: inline-block;
  margin-bottom: 20px;
}
.footer__policy--text {
  display: block;
}

@media (min-width: 768px) {
  .footer__inner {
    width: 70%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    padding: 3rem;
  }

  .footer__copyright--text {
    display: inline-block;
    margin-right: 2rem;
  }

  .footer__policy--text {
    display: inline-block;
    margin-left: 2rem;
  }
  .footer__policy--text .footer__policy--terms {
    margin-right: 2rem;
  }
}
</style>
