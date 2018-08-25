<template>
  <div id="app">
    <HeaderHome :isSmall="isSmall" v-if="$route.name == 'Home'"/>
    <Header :isSmall="isSmall" v-if="$route.name != 'Home'"/>
    <router-view :isSmall="isSmall" />
    <Footer :socials="socials" :email="email" :phone="phone" />
  </div>
</template>

<script>
// Bring in Components
import HeaderHome from './components/HeaderHome'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data () {
    return {
      isSmall: null,
      window: {
        width: 0,
        height: 0
      },
      socials: {
        facebook: {
          url: 'https://www.facebook.com/3rdSpaceCoffee/',
          icon: ['fab', 'facebook-square']
        },
        instagram: {
          url: 'https://www.instagram.com/thirdspacecoffeehouse/',
          icon: ['fab', 'instagram']
        },
        twitter: {
          url: 'https://twitter.com/3rdspacecoffee',
          icon: ['fab', 'twitter']
        }
      },
      email: 'thirdspace@example.com',
      phone: '913-745-4564'
    }
  },
  components: {
    HeaderHome,
    Header,
    Footer
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      this.isSmall = this.window.width < 576
    }
  }
}
</script>

<style lang="scss">
  @import './assets/css/main.scss'
</style>
