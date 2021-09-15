<template>
  <div>
    <nav-user></nav-user>

    <mdb-container class="mt-5 pt-5">
      <nav-page class="mt-4"></nav-page>
      <template>
        <ul class="progressbar mt-5">
          <li class="complete">Thông tin liên lạc</li>
          <li class="active">Gợi ý sản phẩm</li>
          <li>XÁC NHẬN BOOKING</li>
          <li>Thanh toán</li>
        </ul>
      </template>

      <!-- sản phẩm phù hợp với tour được chọn -->
      <mdb-row class="mt-5 mb-5">
        <mdb-col cols="12" class="pl-0 text-center">
          <p class="price-tour">
            Sản phẩm phù hợp với tour của bạn
          </p>
        </mdb-col>
      </mdb-row>
      <mdb-row class="mt-5 mb-4">
        <mdb-col cols="12" class="pl-0 text-center">
          <cards-product v-bind:typeTravel="typeTravel"></cards-product>
        </mdb-col>
      </mdb-row>

      <!-- sản phẩm được bán nhiều nhất -->

      <mdb-row class="mt-5 mb-4">
        <mdb-col cols="12" class="pl-0 text-center">
          <p class="price-tour">
            Sản phẩm bán nhiều nhất
          </p>
        </mdb-col>
      </mdb-row>

      <mdb-row class="mt-5 mb-4">
        <mdb-col cols="12" class="pl-0 text-center">
          <cards-product v-bind:typeTravel="typeTravelNull"></cards-product>
        </mdb-col>
      </mdb-row>

      <!-- xác nhận đặt tour  -->
      <mdb-row class="mt-5">
        <mdb-col class="text-center">
          <mdb-btn color="danger" @click="confirm()">
            Xác thực <mdb-icon icon="arrow-right" class="ml-1" />
          </mdb-btn>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <footer-b></footer-b>
  </div>
</template>

<script>
import CardsProduct from '../components/cards-product.vue';
import FooterB from '../components/FooterB.vue';
import NavPage from '../components/NavPage.vue';
import NavUser from '../components/NavUser.vue';
export default {
  components: { NavUser, NavPage, CardsProduct, FooterB },
  beforeCreate() {},
  data() {
    return {
      tour: {},
      typeTravel: {
        type: this.$store.getters.inTour.typesOftourism,
        numberProduct: 3,
      },
      typeTravelNull: {
        type: 'null',
        numberProduct: 100,
      },
    };
  },
  mounted() {},
  methods: {
    confirm() {
      this.$router.push({ name: 'Confirm' });
    },
  },
};
</script>

<style></style>
