<template>
  <b-container fluid class="canvas">
    <b-row>
      <b-col md="3" class="main sidebar">
        <h3>Hours</h3>
        <table class="hours">
          <tr>
            <td>Mon - Thurs</td>
            <td>6 am - 5 pm</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>6 am - 7 pm</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>7 am - 5 pm</td>
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
        <div v-if="storeState.onlineOrderingEnabled" class="order-online-container">
          <h4><em>In a rush?</em></h4>
          <OrderOnlineButton title="Order Online!"/>
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

.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.gift-card-container,
.order-online-container {
  margin-top: 50px;
}

.gift-card-container{
  margin-bottom: 50px;
}

</style>
