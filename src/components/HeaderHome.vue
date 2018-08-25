<template>
<div>
  <header id="header">
    <div id="logo">
      <h1 :class="{ logo: !isSmall, logoSmall: isSmall }">
        <router-link to="/">{{ title }}</router-link>
      </h1>
    </div>
  </header>
  <NavBar/>
</div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'Header',
  props: [ 'isSmall' ],
  data () {
    return {
      title: 'Third Space Coffee'
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
#header {
  /* max-width: 1100px; */
  position: relative;
  padding: 30px;
  margin: 30px 0 auto;
  background-image: url("../assets/img/caleb_coffee_pour.jpg");
  background-size: cover;
  background-position-y: 25%;
}

#logo {
  width: 100%;
  margin: 0 auto;
  text-align: left;
}

.logo {
  display: inline-block;
  padding-left: 50px;
}

.logoSmall {
  margin: 0 auto;
}

.logo a,
.logoSmall a {
  display: block;
  background: url("../assets/img/ThirdSpaceWords.svg") no-repeat;
  min-width: 250px;
  height: 250px;
  text-indent: -9999px;
  overflow: hidden;
}
</style>
