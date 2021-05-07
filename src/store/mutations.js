import * as mutation_types from "./mutation_types";

export default {
  [mutation_types.M_UPDATE_PRODUCTS](state, payload) {
    state.products = payload;
  }
};
