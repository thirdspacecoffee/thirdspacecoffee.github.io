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
  background-color: rgb(218, 245, 183);
  border-color: #95c046;
  font-weight: 600;
}

.btn-order:hover {
  color: #000;
  background-color: rgb(234, 247, 216);
}
</style>
