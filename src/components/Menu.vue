<template>
<div>
  <PhotoGallery/>
  <MenuBoard/>
</div>
</template>

<script>
import PhotoGallery from './PhotoGallery'
import MenuBoard from './MenuBoard'

export default {
  name: 'Menu',
  data () {
    return {

    }
  },
  components: {
    MenuBoard,
    PhotoGallery
  }
}
</script>

<style>

</style>
