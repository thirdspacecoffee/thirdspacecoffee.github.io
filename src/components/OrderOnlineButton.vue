<template>
  <div v-if="storeState.onlineOrderingEnabled" class="order-button">
    <a role="button" class="btn btn-order chownow-order-online" target="_blank">{{ title }}</a>
  </div>
</template>

<script>
import { store } from '../store.js'

export default {
  name: 'OrderOnlineButton',
  props: {
    title: {
      default: 'Order Online',
      type: String
    }
  },
  data () {
    return {
      link: '#',
      storeState: store.state
    }
  },
  mounted () {
    let chowNowScript = document.createElement('script')
    chowNowScript.setAttribute('src', 'https://cf.chownowcdn.com/latest/static/integrations/ordering-modal.min.js')
    chowNowScript.setAttribute('data-chownow-company-id', '12718')
    document.head.appendChild(chowNowScript)
  }
}
</script>

<style scoped>
.btn-order {
  color: #000;
  background-color: #F5E9B7;
  border-color: #c0aa46;
  font-weight: 600;
}

.btn-order:hover {
  color: #000;
  background-color: rgb(247, 241, 216);
}
</style>
