<template>
  <div class="product">
    <p class="name">{{ product.name }}</p>
    <div class="counter-wrap">
      <button @click="change(-1)" class="button-change-count"><ui-icon name="minus" width="24px" height="24px" fill="#777" /></button>
      <input
        type="number"
        class="counter"
        @input="change()"
        v-model="product.count"
      />
      <button @click="change(1)" class="button-change-count"><ui-icon name="plus" width="24px" height="24px" fill="#777" /></button>
    </div>
    <p class="total-price">{{ totalPrice }}</p>
    <button @click="deleteProduct" class="button-delete-product">delete</button>
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
    totalPrice() {
      return this.product.count * this.product.price;
    },
  },

  methods: {
    change(n = null) {
      let count = n !== null ? this.product.count + n : this.product.count;

      if (count < 1) count = 1;

      this.$store.dispatch("A_CHANGE_PRODUCT", {
        id: this.product.id,
        count,
      });
    },
    deleteProduct() {
      this.$store.dispatch("A_DELETE_PRODUCT", this.product.id);
    }
  },
};
</script>

<style scoped lang="scss">
.product {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .counter-wrap {
    display: flex;
    align-items: center;

    .counter {
      width: 100%;
      border: none;
      background-color: #fff;
      outline: none;
      -moz-appearance: textfield;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

    }
  }
  .button-change-count {
    margin-left: 5px;
    margin-right: 5px;
    border: 0;
    cursor: pointer;
  }

  .total-price {
    font-family: cursive;
    width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .button-delete-product {
    border: solid mediumaquamarine;
    padding: 10px;
    font-family: cursive;
    font-weight: bold;
    transition: all 0.2s;
    width: 70px;
    height: 45px;
    cursor: pointer;

    &:hover {
      background: black;
      border: 0;
      color: wheat;
    }
  }
}
</style>
