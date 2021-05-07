import * as types from "./types";
import * as mutation_types from "./mutation_types";

export default {
  [types.A_ADD_PRODUCT](context, payload) {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const hasProduct = products
      .map((product) => product.id)
      .includes(payload.id);

    if (hasProduct) return;

    products.push(payload);
    localStorage.setItem("products", JSON.stringify(products));
    context.commit(mutation_types.M_UPDATE_PRODUCTS, products);
  },
  [types.A_GET_PRODUCTS](context) {
    const products = JSON.parse(localStorage.getItem("products")) || [];

    context.commit(mutation_types.M_UPDATE_PRODUCTS, products);
  },
  [types.A_CHANGE_PRODUCT](context, payload) {
    let products = JSON.parse(localStorage.getItem("products"));

    console.log(products, 111, payload.id);
    products = products.map((product) => {
      if (payload.id === product.id) {
        product.count = payload.count;
      }

      return product;
    });

    localStorage.setItem("products", JSON.stringify(products));
    context.commit(mutation_types.M_UPDATE_PRODUCTS, products);
  },
  [types.A_DELETE_PRODUCT](context, payload) {
    let products = JSON.parse(localStorage.getItem("products"));

    products = products.filter((product) => product.id !== payload);

    localStorage.setItem("products", JSON.stringify(products));
    context.commit(mutation_types.M_UPDATE_PRODUCTS, products);
  },
};
