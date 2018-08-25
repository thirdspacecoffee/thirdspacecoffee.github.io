<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <!-- The `text-sm-left` and `text-xs-center` means that when it is below the sm threshold, it will be centered -->
          <p class="text-sm-left text-xs-center">
          <strong>Third Space Coffee</strong><br>
          226 Oak St.<br>
          Bonner Springs, KS 66012<br>
          {{ phone }}
          </p>
        </div>
        <div class="col-sm-4">
        </div>
        <div class="col-sm-4 align-self-center">
          <ul>
            <li v-for="social in socials" :key="social.url"><a :href="social.url"><font-awesome-icon :icon="social.icon" size="lg" /></a></li>
            <li><a :href="'mailto:' + email"><font-awesome-icon icon="envelope" size="lg" /></a></li>
          </ul>
          <p>&copy; 2018 Third Space Coffee</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['socials', 'email', 'phone'],
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
</style>
