<template>
  <div class="content-products">
    <product-cart
      v-for="(product, index) in products"
      :key="index"
      :product="product"
      @add="add(product)"
    />
  </div>
</template>

<script>
import ProductCart from "./ProductCart";
export default {
  name: "Catalog",
  components: {
    ProductCart,
  },
  data() {
    return {
      products: [
        {
          id: 0,
          name: "Product 1",
          img: "https://w7.pngwing.com/pngs/948/703/png-transparent-samsung-notebook-9-laptop-np900x5l-k02us-samsung-ativ-book-9-intel-core-i5-laptop-electronics-netbook-electronic-device-thumbnail.png",
          price: 1000,
          count: 1,
        },
        {
          id: 1,
          name: "Product 2",
          img: "https://w7.pngwing.com/pngs/948/703/png-transparent-samsung-notebook-9-laptop-np900x5l-k02us-samsung-ativ-book-9-intel-core-i5-laptop-electronics-netbook-electronic-device-thumbnail.png",
          price: 1500,
          count: 1,
        },
        {
          id: 2,
          name: "Product 3",
          img: "https://w7.pngwing.com/pngs/948/703/png-transparent-samsung-notebook-9-laptop-np900x5l-k02us-samsung-ativ-book-9-intel-core-i5-laptop-electronics-netbook-electronic-device-thumbnail.png",
          price: 1850,
          count: 1,
        },
        {
          id: 3,
          name: "Product 4",
          img: "https://w7.pngwing.com/pngs/948/703/png-transparent-samsung-notebook-9-laptop-np900x5l-k02us-samsung-ativ-book-9-intel-core-i5-laptop-electronics-netbook-electronic-device-thumbnail.png",
          price: 1900,
          count: 1,
        },
        {
          id: 4,
          name: "Product 5",
          img: "https://w7.pngwing.com/pngs/948/703/png-transparent-samsung-notebook-9-laptop-np900x5l-k02us-samsung-ativ-book-9-intel-core-i5-laptop-electronics-netbook-electronic-device-thumbnail.png",
          price: 2200,
          count: 1,
        },
      ],
    };
  },

  methods: {
    add(product) {
      this.$store.dispatch("A_ADD_PRODUCT", product);
    },
  },
};
</script>

<style scoped lang="scss">
.content-products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 100px;
}
</style>
