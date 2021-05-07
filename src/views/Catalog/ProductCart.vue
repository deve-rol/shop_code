<template>
  <div class="cart">
    <div :style="{ backgroundImage: imgUrl }" class="product-img"></div>
    <p class="name">{{ product.name }}</p>
    <p class="price">{{ product.price }}</p>

    <button @click="add" class="button">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "ProductCart",
  props: {
    product: {
      type: Object,
      require,
    },
  },

  computed: {
    imgUrl() {
      return `url('${this.product.img}')`;
    },
  },

  methods: {
    add() {
      this.$emit("add");
    },
  },
};
</script>

<style scoped lang="scss">
.cart {
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  padding: 12px;
  width: 20%;
  margin-bottom: 40px;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
  }

  .product-img {
    height: 165px;
    background-position: center;
    background-size: cover;
  }

  .name,
  .price {
    text-align: center;
    font-family: cursive;
  }

  .price {
    margin: 10px 0;
  }

  .button {
    margin: 0 auto;
    border: none;
    display: block;
    background-color: #ff4141;
    padding: 8px 12px;
    color: white;
    transition: all 0.5s;
    cursor: pointer;
    font-family: cursive;

    &:hover {
      background-color: red;
    }
  }
}
</style>
