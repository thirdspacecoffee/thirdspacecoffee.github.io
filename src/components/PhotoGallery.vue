<template>
  <div class="canvas">
    <gallery :images="images" :index="index" @close="index = null"/>
    <b-container id="image-display">
      <div class="image"
        v-for="(image, imageIndex) in thumbnails"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')' }">
      </div>
    </b-container>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'

export default {
  name: 'PhotoGallery',
  data () {
    return {
      msg: 'Photo Gallery',
      selectedPhoto: 0,
      photoList: [
        {
          id: 0,
          title: 'Cortado',
          href: '/static/img/20180801_123914.jpg'
        },
        {
          id: 1,
          title: 'All-in Club',
          href: '/static/img/20180803_123825.jpg'
        }
      ],
      images: [
        '/static/img/20180801_123129.jpg',
        '/static/img/20180801_123914.jpg',
        '/static/img/20180803_094207.jpg',
        '/static/img/20180803_123825.jpg',
        '/static/img/20180803_123957.jpg',
        '/static/img/IMG_1988.jpg',
        '/static/img/IMG_2030.jpg',
        '/static/img/IMG_2140.jpg',
        '/static/img/IMG_2189.jpg',
        '/static/img/IMG_2210.jpg',
        '/static/img/IMG_2216.jpg',
        '/static/img/IMG_2245.jpg',
        '/static/img/IMG_28021.jpg',
        '/static/img/IMG_20170831_082535.jpg'
      ],
      thumbnails: [
        '/static/img/thumbnails/20180801_123129.jpg',
        '/static/img/thumbnails/20180801_123914.jpg',
        '/static/img/thumbnails/20180803_094207.jpg',
        '/static/img/thumbnails/20180803_123825.jpg',
        '/static/img/thumbnails/20180803_123957.jpg',
        '/static/img/thumbnails/IMG_1988.jpg',
        '/static/img/thumbnails/IMG_2030.jpg',
        '/static/img/thumbnails/IMG_2140.jpg',
        '/static/img/thumbnails/IMG_2189.jpg',
        '/static/img/thumbnails/IMG_2210.jpg',
        '/static/img/thumbnails/IMG_2216.jpg',
        '/static/img/thumbnails/IMG_2245.jpg',
        '/static/img/thumbnails/IMG_28021.jpg',
        '/static/img/thumbnails/IMG_20170831_082535.jpg'
      ],
      index: null
    }
  },
  components: {
    'gallery': VueGallery
  }
}
</script>

<style scoped lang="scss">
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 10px;
  width: 200px;
  height: 150px;
}

#image-display {
  // display: inline-flex;
  // // flex-wrap: wrap;
  // padding: 10px;
  // max-height: 190px;
  // overflow-y: scroll;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

  .image {
    display: inline-block;
  }
}

</style>
