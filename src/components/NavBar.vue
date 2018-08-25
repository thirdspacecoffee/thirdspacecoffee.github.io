<template>
<nav id='navbar'>
  <b-container>
    <b-row>
      <div v-for="routes in links" :key="routes.id" class="col-sm">
        <router-link :to="`${routes.page}`"><b-col>{{ routes.text }}</b-col></router-link>
      </div>
    </b-row>
  </b-container>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/'
        },
        {
          id: 1,
          text: 'Menu',
          page: '/menu'
        },
        // {
        //   id: 2,
        //   text: 'Photos',
        //   page: '/photos'
        // }
        {
          id: 3,
          text: 'About',
          page: '/about'
        }
      ]
    }
  }
}
</script>

<style scoped>
#navbar {
  background: rgba(255, 255, 255, 0.85);
}

#navbar a {
  font-size: 20px;
}

#navbar a:not(.router-link-exact-active) {
  text-decoration: none;
  color: #000000;
}

#navbar a:hover:not(.router-link-exact-active) {
  text-decoration: none;
  color: #696969;
}

.router-link-exact-active {
  text-decoration: none;
  font-weight: 800;
  color: #000000;
}

</style>
