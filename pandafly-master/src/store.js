import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inCart: [],
    tour: null,
    user: null,
    inforBooking: null,
    inforAdults: null,

    inforChildren: null,
    inforYoung: null,
  },
  getters: {
    inCart: (state) => state.inCart,
    inTour: (state) => state.tour,
    inUser: (state) => state.user,
    inAdults: (state) => state.inforAdults,
    inChildren: (state) => state.inforChildren,
    inYoung: (state) => state.inforYoung,
    inforBooking: (state) => state.inforBooking,

    getProductById: (state) => (id) => {
      return state.inCart.find((product) => product.id === id);
    },
  },
  mutations: {
    // thông tin booking
    ADD_TO_BOOKING(state, inforBooking) {
      state.inforBooking = inforBooking;
    },
    // thông tin tour
    ADD_TO_TOUR(state, tour) {
      state.tour = tour;
    },

    // thông tin liên lạc
    ADD_TO_USER(state, user) {
      state.user = user;
    },

    // người lớn
    ADD_TO_ADULTS(state, inforAdults) {
      state.inforAdults = inforAdults;
    },

    // trẻ em
    ADD_TO_CHILDREN(state, inforChildren) {
      state.inforChildren = inforChildren;
    },

    // em bé

    ADD_TO_YOUNG(state, inforYoung) {
      state.inforYoung = inforYoung;
    },

    // sản phẩm trong gior
    ADD_TO_CART(state, product) {
      const productFind = state.inCart.find(
        (productInCart) => productInCart._id === product._id
      );
      if (productFind !== undefined) {
        productFind.quantity++;
      } else {
        state.inCart.push(product);
      }
    },

    REMOVE_FROM_CART(state, product) {
      state.inCart.splice(product, 1);
    },
  },
  actions: {
    // thông tin booking
    addToBooking(context, inforBooking) {
      context.commit('ADD_TO_BOOKING', inforBooking);
    },

    // thông tin tour
    addToTour(context, tour) {
      context.commit('ADD_TO_TOUR', tour);
    },

    // thông tin liên lạc
    addToUser(context, user) {
      context.commit('ADD_TO_USER', user);
    },

    // người lớn
    addTotAdults(context, inforAdults) {
      context.commit('ADD_TO_ADULTS', inforAdults);
    },

    // trẻ em
    addToChildren(context, inforAdults) {
      context.commit('ADD_TO_CHILDREN', inforAdults);
    },

    // em bé
    addToYoung(context, inforYoung) {
      context.commit('ADD_TO_YOUNG', inforYoung);
    },

    // sản phẩm trong gior
    addToCart(context, product) {
      context.commit('ADD_TO_CART', product);
    },
    removeFromCart(context, product) {
      context.commit('REMOVE_FROM_CART', product);
    },
  },
});
