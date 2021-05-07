<template>
  <div class="form">
    <div class="box-img">
      <img src="../../assets/img/card/card.png" class="card-img" />
    </div>

    <div class="body-form-input">
      <div class="field">
        <label for="card-number">Card number</label>
        <input
          type="text"
          id="card-number"
          @input="change('number', $event)"
          v-model="form.cardNumber"
          class="input-form"
          maxlength="19"
        />
        <p>{{ cardType }}</p>
      </div>

      <div class="field">
        <label for="card-holder">Card number</label>
        <input
          type="number"
          id="card-holder"
          @input="change"
          v-model="form.cardHolder"
          class="input-form"
        />
      </div>

      <div class="field-group">
        <div class="field left">
          <label for="expires">Expires</label>
          <input
            type="number"
            id="expires"
            @input="change"
            v-model="form.expires"
            class="input-form input-sm"
            placeholder="MM/YY"
          />
        </div>
        <div class="field right">
          <label for="cvv" class="left-lable">Cvv</label>
          <input
            type="number"
            id="cvv"
            @input="change"
            v-model="form.cvv"
            class="input-form input-sm"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BankForm",
  data() {
    return {
      form: {
        cardNumber: "",
        cardHolder: "",
        expires: "",
        cvv: "",
      },
    };
  },

  computed: {
    cardType() {
      const firstNumber = this.form.cardNumber[0];
      return firstNumber === "2"
        ? "Мир"
        : firstNumber === "4"
        ? "VISA"
        : firstNumber === "5"
        ? "MasterCard"
        : "";
    },
  },

  methods: {
    change(type = null, e) {
      if (type === "number") {
        const isDelete = e.inputType === "deleteContentBackward";
        if (isDelete) return;

        let cardNumber = this.form.cardNumber
          .split("")
          .filter((n) => n !== " ");

        let number = "";
        cardNumber.forEach((n, i) => {
          number += n.replace(/\D/, "");
          if ((i + 1) % 4 === 0) {
            number += " ";
          }
        });
        this.form.cardNumber = number;
      }

      this.$emit("change", this.form);
    },
  },
};
</script>

<style scoped lang="scss">
.form {
  .box-img {
    position: relative;
    z-index: 2;
  }

  .body-form-input {
    width: 50%;
    margin: 0 auto;
    border: solid;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(0px, -75px);

    .field {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      width: 80%;

      .input-form {
        margin-top: 5px;
        border: 1px solid fuchsia;
        height: 20px;
        padding-left: 10px;
        font-family: cursive;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }
      }
    }

    .field-group {
      display: flex;
      justify-content: space-between;
      width: 80%;

      .field.left {
        width: 30%;
      }

      .field.right {
        display: flex;
        align-items: flex-end;
        width: 30%;
      }

      .left-lable {
        width: 100%;
      }

      .input-sm {
        width: 100%;
      }
    }
  }

  .card-img {
    width: 35%;
    display: block;
    margin: 0 auto;
  }
}
</style>
