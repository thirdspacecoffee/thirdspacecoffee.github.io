<template>
<div class="header">
  <b-container fluid>
    <b-row :class="{ 'header-row': !isSmall}">
      <b-col sm="3" class="logo">
        <img src="../assets/ThirdSpaceSolid.svg">
      </b-col>
      <b-col sm="9">
        <b-row>
          <b-col sm :class="{ filler: !isSmall, 'filler-small': isSmall}">
            <OrderOnlineButton/>
          </b-col>
        </b-row>
        <b-row v-if="!isSmall" class="bottom">
          <b-col sm>
            <NavBar/>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
  <NavBar v-if="isSmall"/>
</div>
</template>

<script>
import NavBar from './NavBar'
import OrderOnlineButton from './OrderOnlineButton'

export default {
  name: 'Header',
  props: [ 'isSmall' ],
  data () {
    return {
      title: 'Third Space Coffee'
    }
  },
  components: {
    NavBar,
    OrderOnlineButton
  }
}
</script>

<style scoped>
.header {
  margin: 30px 0 auto;
}

.header-row {
  height: 175px;
}

.filler {
  text-align: right;
  padding: 55px;
  background: rgba(224, 191, 129, 0.8);
}

.filler-small {
  padding-top: 20px;
  padding-bottom: 20px;
  background: rgba(224, 191, 129, 0.8);
}

.logo {
  padding: 5px;
  background-color: rgba(255, 255, 255, 1.0);
}

.logo img {
  height: 100%;
  width: 100%;
}

.bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
