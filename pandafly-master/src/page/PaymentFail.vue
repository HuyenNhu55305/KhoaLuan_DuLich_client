<template>
  <div>
    <nav-user></nav-user>
    <mdb-container class="mt-2 pt-5">
      <nav-page class="mt-2"></nav-page>
      <template>
        <ul class="progressbar mt-5">
          <li class="complete">Thông tin liên lạc</li>
          <li class="complete">Gợi ý sản phẩm</li>
          <li class="complete">XÁC NHẬN BOOKING</li>
          <li class="active">Thanh toán</li>
        </ul>
      </template>
      <div style="height:100rem">
        <mdb-row class="mt-5 mb-5 pb-5" style="padding-top: 336px;">
          <mdb-col cols="12" class="pl-0 text-center">
            <p class="price-tour">
              Quý khách thành toán không thành công. Kiểm tra lại tài khoản hoặc đến văn phòng dịch vụ thanh toán trực tiếp
            </p>
            <p class="price-tour">
              Cám ơn quý khách đã sử dụng dịch vụ
            </p>
          </mdb-col>
        </mdb-row>
      </div>
    </mdb-container>
    <footer-b></footer-b>
  </div>
</template>

<script>
import FooterB from '../components/FooterB.vue';
import NavPage from '../components/NavPage.vue';
import NavUser from '../components/NavUser.vue';
export default {
  components: { FooterB, NavUser, NavPage },
  data() {
    return {};
  },
  mounted() {
    this.notificationSuccess();
  },
  methods: {
    notificationSuccess() {
      this.$alert(
        'Thanh toán không thành công',
        'Warning',
        'warning'
      ).then(() => this.$router.push({ name: 'Home' }));
    },
  },
};
</script>

<style>
button.error {
  background-color: rgba(241, 34, 34, 0.68);
  border-color: #f12222;
}
</style>
