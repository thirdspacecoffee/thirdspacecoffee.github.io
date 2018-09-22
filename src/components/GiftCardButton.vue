<template>
  <div class="order-button">
    <a role="button" class="btn btn-order" :href="link">{{ title }}</a>
  </div>
</template>

<script>
export default {
  name: 'GiftCardButton',
  props: {
    title: {
      default: 'Get a Gift Card',
      type: String
    }
  },
  data () {
    return {
      link: 'https://squareup.com/gift/4CE87BKGMYSWE/order'
    }
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
  background-color:  rgb(247, 241, 216);
}
</style>
