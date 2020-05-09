<template>
  <b-container fluid class="canvas">
    <b-row>
      <b-col md="3" class="main sidebar">
        <h3>Hours (adjusted)</h3>
        <table class="hours">
          <tr>
            <td>Mon - Thurs</td>
            <td>8 am - 3 pm</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>8 am - 3 pm</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>8 am - 3 pm</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Closed</td>
          </tr>
        </table>
      </b-col>
      <b-col md="5" class="main center">
        <div>
          <h3>Be together. Drink coffee.</h3>
          <p>Located in Downtown Bonner Springs</p>
        </div>
        <div class="submain"><p><em>Want to help the  communities of Bonner Springs and Edwardsville, Kansas? <a target="blank" href="https://docs.google.com/document/d/1BZDTlDRVHfzgg5LlkT1ORMWscsz0mO9y49KoKYgeRgg/edit">Click here</a> to learn more...</em></p></div>
        <div v-if="storeState.onlineOrderingEnabled" class="order-online-container">
          <h4><em>In a rush?</em></h4>
          <OrderOnlineButton title="Order Online!"/>
        </div>
        <div class="download-apps-container">
          <p><em>Want to make ordering easier?  Download our App!</em></p>
          <a href='https://apps.apple.com/us/app/third-space-coffee/id1506070790' target="blank">
          <img class="apple" alt='Download on the App Store' src='../assets/img/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'/>
          </a>
          <a href='https://play.google.com/store/apps/details?id=com.chownow.thirdspacecoffee&hl=en_US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target="blank">
          <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
          </a>
        </div>
        <div class="gift-card-container">
          <h5><em>Need a Gift Card?</em></h5>
          <GiftCardButton/>
        </div>
      </b-col>
      <b-col md="4" class="google-maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3098.1914930492976!2d-94.883993!3d39.05655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c08ffcb912dbd1%3A0x805559ebce736d95!2s226+Oak+St%2C+Bonner+Springs%2C+KS+66012!5e0!3m2!1sen!2sus!4v1495198360246" width="250" height="250" frameborder="0" allowfullscreen></iframe>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import OrderOnlineButton from './OrderOnlineButton'
import GiftCardButton from './GiftCardButton'
import { store } from '../store.js'

export default {
  name: 'Home',
  data () {
    return {
      storeState: store.state
    }
  },
  components: {
    OrderOnlineButton,
    GiftCardButton
  }
}
</script>

<style scoped>

.sidebar {
  background: rgb(248, 233, 209, 0.75);
}

.hours {
  width: 100%;
}

table.hours tr td {
  text-align: left;
  padding-bottom: 7px;
}

table.hours tr td:first-child {
  padding-right: 10px;
  font-weight: bold;
}

.main {
  text-align: left;
  padding-top: 8px;
  padding-bottom: 8px;
}

.main h3 {
  font-family: 'bradley hand', cursive;
  font-size: 30px;
}

.main p {
  font-size: 20px;
}

.submain p {
  font-size: 16px;
}

.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.gift-card-container,
.order-online-container {
  margin-top: 50px;
}

.download-apps-container {
  margin-top: 20px;
}

.download-apps-container p {
  margin-bottom: 0px;
  font-size: 1.15em;
}

.download-apps-container a img {
  height: 50px;
}

.download-apps-container a img.apple {
  padding: 8px;
}

.gift-card-container{
  margin-bottom: 50px;
}

</style>
