<template>
  <div>
    <bank-form @change="changeCardForm($event)" />

    <products :products="products" />

    <div class="test">
      <p class="total-price">{{ totalPrice }}</p>
      <button @click="buy" class="button-buy">Buy</button>
    </div>
  </div>
</template>

<script>
import Products from "./Products";
import BankForm from "./BankForm";
export default {
  name: "Basket",

  components: {
    BankForm,
    Products,
  },

  data() {
    return {
      cardForm: {},
    };
  },

  computed: {
    products() {
      return this.$store.getters["getProducts"];
    },
    totalPrice() {
      const products = this.$store.getters["getProducts"];
      if (!products.length) return 0;

      const productPrices = products.map(
        (product) => product.count * product.price
      );
      return productPrices.reduce((accum = 0, price) => (accum += price));
    },
  },

  created() {
    if (!this.products.length) {
      this.$store.dispatch("A_GET_PRODUCTS");
    }
  },

  methods: {
    changeCardForm(form) {
      this.cardForm = form;
    },
    buy() {
      const sendParams = {
        cardData: this.cardForm,
        products: this.products,
        totalPrice: this.totalPrice,
      };

      console.log(sendParams);
    },
  },
};
</script>

<style scoped lang="scss">
.test {
  width: 80%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 20px;

  .total-price {
    font-family: cursive;
    font-weight: bold;
  }

  .button-buy {
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
