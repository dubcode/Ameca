<template>
  <div class="footer --row">
    <div class="--ctr">
      <div class="grid-3">
        <!-- col1 -->
        <div>
          <p>
            <b>Donate</b>
          </p>
          <p>
            You can donate by filling in
            <a href="http://ameca.org.uk/ui/wp-content/uploads/2015/05/2014-Ameca-donation-form.pdf" target="_blank">this form</a>
            or directly via
            <a href="http://uk.virginmoneygiving.com/charities/TheAMECATrust" target="_blank">Virgin money</a>
            giving website.
          </p>
          <p class="virgin">
            <a href="http://uk.virginmoneygiving.com/charities/TheAMECATrust" target="_blank">Virgin money</a>
          </p>
        </div>
        <!-- col1 -->

        <!-- col2 -->
        <div>
          <p><b>Sign up to our Newsletter</b></p>
          <p><a href="http://ameca.org.uk/ui/contact-form/" target="_blank">Sign up to receive our online newletter.</a></p>
          <p>
            <a href="http://ameca.org.uk/ui/contact-form/" target="_blank">
              Click here to to receive regular news &amp; updates through our online newletter.
            </a>
          </p>
        </div>
        <!-- col2 -->

        <!-- col3 -->
        <div class="col">
          <p>
            <b>Contact</b>
          </p>
          <p>
            <a href="http://ameca.org.uk/ui/contact-form/" target="_blank">
              Click here to send us an email.<br><br>
            The AMECA Trust Limited<br>
            Registered Charity No. 1121240 <br>
            Registered in England No. 6354971<br>
            48 Woodlands Road, Epsom, Surrey  KT18 7HP
            </a>
          </p>
          <p>
            <b>
              Find us
            </b>
          </p>
          <a class="icon tw" href="https://twitter.com/AMECA11" target="_blank">
            Twitter
          </a>
          <a class="icon yt" href="https://www.youtube.com/channel/UCzczZRREMbzjpgDUELc4iPg" target="_blank">
            YouTube
          </a>
          <a class="icon fb" href="https://www.facebook.com/pages/Ameca/189723837738595" target="_blank">
            FaceBook
          </a>
        </div>
        <!-- col3 -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer{
  background: #130a03;
  padding: 2em 0;
}
.footer p{
  color: #8ea0a0;
}
.footer p a{
  color: #8ea0a0;
  display: inline-block;
}

.footer b{
  color: #d6aa77;
  font-weight: bold;
}
p.virgin a {
    background: #000 url(https://ameca.org.uk/wp-content/themes/dubtheme/images/virgin-money-giving.gif) no-repeat center 0;
    color: #8ea0a0;
    height: 55px;
    width: 155px;
    text-indent: -9999px;
}
.footer input {
    display: block;
    width: 100%;
    outline: 0;
    border: 1px solid #ccc;
    padding: 5px 0;
}

.footer input[type="checkbox"] {
    float: left;
    display:block;
    transform: translateY(6px);
    margin: 0 0.5em 0 0;
    width: auto;
}
footer form p {
    color: #8ea0a0;
    font-size: 13px;
    line-height: 19px;
    margin: 0 0 10px 0;
}
span.wpcf7-list-item {
    display: inline-block;
    margin: 0 0 0 1em;
}
.footer .icon{
  background: url(https://ameca.org.uk/wp-content/themes/dubtheme/images/ftr-icons.gif);
  background-repeat: no-repeat;
  display: block;
  float: left;
  margin: 0 1px 0 0;
  height: 32px;
  width: 32px;
  text-indent: -9999px;
}

.footer input[type="submit"] {
    background: #130a03;
    border: 1px solid #d6aa77;
    clear: both;
    color: #d6aa77;
    display: block;
    font-size: 17px;
    margin: 0 0 20px 0;
    font-weight: 400;
    padding: 5% 0;
    width: 100%;
    text-align: center;
}

.footer .icon.tw{
  background-position: 0 0;
}

.footer .icon.yt{
  background-position: -38px 0;
}

.footer .icon.fb{
  background-position: -75px 0;
}
.footer .icon:hover{
  background-position-y: -34px;
}
@media only screen and (min-width: 1024px) {

}
@media only screen and (min-width: 1440px) {

}
</style>
