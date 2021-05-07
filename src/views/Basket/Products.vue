<template>
  <div class="products">
    <product-cart
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCart from "../Basket/ProductCart";
export default {
  name: "Products",
  components: { ProductCart },
  props: {
    products: {
      type: Array,
      require,
    },
  },
};
</script>

<style scoped lang="scss">
</style>
