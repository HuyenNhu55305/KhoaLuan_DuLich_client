<template>
  <div>
    <nav-user></nav-user>

    <mdb-container class="mt-5 pt-5">
      <nav-page class="mt-4"></nav-page>
      <template>
        <ul class="progressbar mt-5">
          <li class="complete">Thông tin liên lạc</li>
          <li class="complete">Gợi ý sản phẩm</li>
          <li class="active">XÁC NHẬN BOOKING</li>
          <li>Thanh toán</li>
        </ul>
      </template>
      <!-- sản phẩm phù hợp với tour được chọn -->
      <mdb-row class="mt-5 mb-5">
        <mdb-col cols="12" class="pl-0 text-center">
          <p class="price-tour">
            Cảm ơn quý khách đã sử dụng dịch vụ của chung tôi
          </p>
        </mdb-col>
      </mdb-row>

      <!-- phiếu xác nhận booking và thông tin liên lac  -->
      <mdb-row class="mt-5 mb-2">
        <!-- Phiếu xác nhận booking -->
        <mdb-col cols="6" class="mr-4">
          <p class="price-tour">
            PHIẾU XÁC NHẬN BOOKING
          </p>

          <mdb-row style="background-color: #f1f1f1;" v-if="tour">
            <mdb-col col="12">
              <mdb-row class="mt-3  border-bottom">
                <mdb-col col="4">
                  <p class="font-weight-bold">Mã tour :</p>
                </mdb-col>
                <mdb-col col="7">
                  <p class="font-weight-bold">{{ tour.tourId }}</p>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mt-3  border-bottom">
                <mdb-col col="4">
                  <p class="font-weight-bold">Tên tour :</p>
                </mdb-col>
                <mdb-col col="7">
                  <p class="font-weight-bold">{{ tour.tourName }}</p>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mt-3  border-bottom">
                <mdb-col col="4">
                  <p class="font-weight-bold">Hành trình :</p>
                </mdb-col>
                <mdb-col col="7">
                  <p class="font-weight-bold">{{ listPlace }}</p>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mt-3  border-bottom">
                <mdb-col col="4">
                  <p class="font-weight-bold">Ngày đi :</p>
                </mdb-col>
                <mdb-col col="7">
                  <p class="font-weight-bold">
                    {{ formatDate(tour.startDate) }}
                  </p>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mt-3  border-bottom">
                <mdb-col col="4">
                  <p class="font-weight-bold">Ngày về :</p>
                </mdb-col>
                <mdb-col col="7">
                  <p class="font-weight-bold">
                    {{ formatDate(tour.endDate) }}
                  </p>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mt-3  border-bottom">
                <mdb-col col="4">
                  <p class="font-weight-bold">Nơi khỏi hành :</p>
                </mdb-col>
                <mdb-col col="7">
                  <p class="font-weight-bold">{{ tour.startPlace }}</p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </mdb-col>
        <!-- Thông tin liên lạc -->
        <mdb-col col="6">
          <p class="price-tour">
            THÔNG TIN LIÊN LẠC
          </p>
          <mdb-row class="mb-5" style="background-color: #f1f1f1;">
            <mdb-col col="12">
              <mdb-row class="mt-3  border-bottom">
                <mdb-col col="3">
                  <p class="font-weight-bold">Họ tên :</p>
                </mdb-col>
                <mdb-col col="8">
                  <p class="font-weight-bold">{{ user.fullName }}</p>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mt-3  border-bottom">
                <mdb-col col="3">
                  <p class="font-weight-bold">Địa chỉ :</p>
                </mdb-col>
                <mdb-col col="8">
                  <p class="font-weight-bold">{{ user.address }}</p>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mt-3  border-bottom">
                <mdb-col col="3">
                  <p class="font-weight-bold">Di động</p>
                </mdb-col>
                <mdb-col col="8">
                  <p class="font-weight-bold">{{ user.phone }}</p>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mt-3  border-bottom">
                <mdb-col col="3">
                  <p class="font-weight-bold">Email :</p>
                </mdb-col>
                <mdb-col col="8">
                  <p class="font-weight-bold">{{ user.email }}</p>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mt-3  border-bottom">
                <mdb-col col="3">
                  <p class="font-weight-bold">Số vé :</p>
                </mdb-col>
                <mdb-col col="8">
                  <p class="font-weight-bold">{{ inforBooking.totalPeople }}</p>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mt-3  border-bottom">
                <mdb-col col="3">
                  <p class="font-weight-bold">Ghi chú :</p>
                </mdb-col>
                <mdb-col col="8">
                  <p class="font-weight-bold">...............</p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>

      <!-- chi tiết booking -->
      <mdb-row class="mt-2 mb-2">
        <mdb-col cols="12" class="pl-0 text-center">
          <p class="price-tour">
            CHI TIÊT BOOKING
          </p>
        </mdb-col>
      </mdb-row>
      <mdb-row class="mt-3 mb-5 " style="background-color: #f1f1f1;">
        <mdb-col cols="12">
          <mdb-row class="mt-3  border-bottom">
            <mdb-col col="4">
              <p class="font-weight-bold">SỐ BOOKING :</p>
            </mdb-col>
            <mdb-col col="7">
              <p class="font-weight-bold">{{ inforBooking.bookId }}</p>
            </mdb-col>
          </mdb-row>
          <mdb-row class="mt-3  border-bottom">
            <mdb-col col="4">
              <p class="font-weight-bold">TRỊ GIÁ :</p>
            </mdb-col>
            <mdb-col col="7">
              <p class="font-weight-bold">
                {{ formatMoney(inforBooking.totalMoney) }}
              </p>
            </mdb-col>
          </mdb-row>
          <mdb-row class="mt-3  border-bottom">
            <mdb-col col="4">
              <p class="font-weight-bold">NGÀY ĐĂNG KÍ :</p>
            </mdb-col>
            <mdb-col col="7">
              <p class="font-weight-bold">
                {{ formatDateBooking(inforBooking.dateBook) }}
              </p>
            </mdb-col>
          </mdb-row>
          <mdb-row class="mt-3  border-bottom">
            <mdb-col col="4">
              <p class="font-weight-bold">HÌNH THỨC THANH TOÁN :</p>
            </mdb-col>
            <mdb-col col="7">
              <p class="font-weight-bold">{{ inforBooking.payments }}</p>
            </mdb-col>
          </mdb-row>
          <mdb-row class="mt-3  border-bottom">
            <mdb-col col="4">
              <p class="font-weight-bold">TÌNH TRẠNG :</p>
            </mdb-col>
            <mdb-col col="7">
              <p class="font-weight-bold">
                Booking của quý khách đã được chúng tôi xác nhận thành công
              </p>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>

      <!-- Danh sách khách hàng-->
      <mdb-row class="mt-2 mb-2">
        <mdb-col cols="12" class="pl-0 text-center">
          <p class="price-tour">
            DANH SÁCH KHÁCH HÀNG
          </p>
        </mdb-col>
      </mdb-row>
      <mdb-tbl responsive>
        <mdb-tbl-head>
          <tr>
            <th>#</th>
            <th>Họ tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Loại vé</th>
          </tr>
        </mdb-tbl-head>

        <mdb-tbl-body>
          <tr
            v-for="(items, index) in listCustomer"
            :key="index"
            class="text-monospace"
          >
            <th>{{ index }}</th>
            <td>{{ items.name }}</td>
            <td>{{ items.birthday }}</td>
            <td>{{ items.gender }}</td>
            <td>{{ items.typeOfTicket }}</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>

      <!-- Danh sách sản phẩm-->

      <mdb-row class="mt-2 mb-2">
        <mdb-col cols="12" class="pl-0 text-center">
          <p class="price-tour">
            DANH SÁCH SẢN PHẨM
          </p>
        </mdb-col>
      </mdb-row>
      <mdb-tbl responsive>
        <mdb-tbl-head>
          <tr>
            <th>#</th>
            <th>SẢN PHẨM</th>
            <th>GIÁ</th>
            <th>SỐ LƯƠNG</th>
          </tr>
        </mdb-tbl-head>

        <mdb-tbl-body>
          <tr
            v-for="(product, index) in productCart"
            :key="index"
            class="text-monospace"
          >
            <th>{{ index }}</th>
            <td>{{ product.productName }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>

      <!-- Lời chúc -->
      <mdb-row class="mt-5 mb-5">
        <mdb-col cols="12" class="pl-0 text-center">
          <p class="price-tour">
            Chúc quý khách một chuyến du lịch thật vui vẻ và bổ ích
          </p>
          <p class="price-tour">
            Quý khách vui lòng kiểm tra email để nhận phiếu xác nhận đặt dịch vụ
            thành công từ Panda Fly
          </p>
        </mdb-col>
      </mdb-row>
      <!-- thanh toán  -->
      <!-- Thanh toán tiền mặt  -->
      <mdb-row v-if="inforBooking.payments === 'TIỀN MẶT'">
        <mdb-col class="text-center">
          <mdb-btn color="danger" @click="cashPayment()">
            Nhận Email xác nhận <mdb-icon icon="arrow-right" class="ml-1" />
          </mdb-btn>
        </mdb-col>
      </mdb-row>
      <!-- thanh toán trực tiếp  -->
      <mdb-row v-else>
        <mdb-col class="text-center">
          <mdb-btn color="danger" @click="payment()">
            Thanh toán <mdb-icon icon="arrow-right" class="ml-1" />
          </mdb-btn>
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
import moment from 'moment';

export default {
  components: { FooterB, NavUser, NavPage },
  data() {
    return {
      tour: null,
      user: {
        fullName: null,
        email: null,
        phone: null,
        address: null,
      },
      listCustomer: [],
      totalPeople: 1,
      inforAdults: null,
      inforChildren: null,
      inforYoung: null,
      inforBooking: { totalPeople: null, tourId: null },
      productCart: [],
      listPlace: null,
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.tour = this.$store.getters.inTour;
      this.getNamePlace(this.tour._id);
      this.user = this.$store.getters.inUser;
      this.inforAdults = this.$store.getters.inAdults;
      this.inforChildren = this.$store.getters.inChildren;
      this.inforYoung = this.$store.getters.inYoung;
      this.inforBooking = this.$store.getters.inforBooking;
      this.$store.getters.inCart.map((pd) => {
        this.productCart.push(pd);
      });
      this.listCustomer = [].concat(
        this.inforAdults,
        this.inforChildren,
        this.inforYoung
      );
    },

    getNamePlace(id) {
      let uri = `${process.env.VUE_APP_PORT}/tour/${id}`;
      this.axios.get(uri, this.ticket).then((response) => {
        this.listPlace = '';
        const lengthPlace = response.data.place.length;
        for (let i = 0; i < response.data.place.length; i++) {
          if (lengthPlace === i + 1) {
            this.listPlace += response.data.place[i].placeName;
          } else {
            this.listPlace += response.data.place[i].placeName + ' - ';
          }
        }
      });
    },
    payment() {
      this.saveInforBooking();
      this.emailConfirm();
      let uri = `${process.env.VUE_APP_PORT}/payment/create`;
      this.axios
        .post(uri, {
          inforBooking: this.inforBooking,
        })
        .then((response) => {
          window.location.href = response.data.data;
        });
    },

    cashPayment() {
      this.saveInforBooking();
      this.emailConfirm();
      this.$router.push({ name: 'SentEmail' });
    },
    // lưu thông tin đăng ký tour xuống data
    saveInforBooking() {
      let uri = `${process.env.VUE_APP_PORT}/order/create`;
      this.axios
        .post(uri, {
          tour: this.tour,
          customer: this.user,
          productCart: this.productCart,
          inforBooking: this.inforBooking,
          inforAdults: this.inforAdults,
          inforChildren: this.inforChildren,
          inforYoung: this.inforYoung,
        })
        .then(() => {});
    },
    // gửi mail thông tin đăng ký cho người đang ký
    emailConfirm() {
      this.post = this.user;
      let uri = `${process.env.VUE_APP_PORT}/sentEmail`;
      this.axios
        .post(uri, {
          tour: this.tour,
          user: this.user,
          productCart: this.productCart,
          inforBooking: this.inforBooking,
          inforAdults: this.inforAdults,
          inforChildren: this.inforChildren,
          inforYoung: this.inforYoung,
        })
        .then(() => {});
    },

    formatDate(value) {
      return moment(value).format('MMMM DD YYYY');
    },
    formatDateBooking(value) {
      return moment(value).format('MMMM DD YYYY h:mm:ss');
    },
    formatMoney(money) {
      const formatter = new Intl.NumberFormat('vi', {
        style: 'currency',
        currency: 'VND',
      });
      return formatter.format(money);
    },
  },
};
</script>

<style></style>
