<template>
  <div>
    <nav-user></nav-user>

    <mdb-container class="mt-4 pt-5">
      <nav-page class="mt-2"></nav-page>
      <template>
        <ul class="progressbar mt-5">
          <li class="complete">Thông tin liên lạc</li>
          <li class="complete">Gợi ý sản phẩm</li>
          <li class="complete">XÁC NHẬN BOOKING</li>
          <li class="active">Thanh toán</li>
        </ul>
      </template>

      <!-- sản phẩm phù hợp với tour được chọn -->
      <mdb-row class="mt-5 mb-5 pb-5" style="padding-top: 336px;">
        <mdb-col cols="12" class="pl-0 text-center">
          <p class="price-tour">
            Cảm ơn quý khách đã sử dụng dịch vụ của chung tôi
          </p>
        </mdb-col>
      </mdb-row>
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
        'Bạn đã thanh toán thành công. Kiêm tra Email để nhận hóa đơn xác nhận.',
        'Success',
        'success'
      ).then(() => this.$router.push({ name: 'Home' }));
    },
  },
};
</script>

<style></style>
