<template>
  <div>
    <div id="fb-root"></div>
    <nav-user></nav-user>
    <mdb-row class="mt-5 pt-5">
      <mdb-col col="12">
        <div>
          <mdb-row>
            <mdb-col
              col="12"
              class="form-group font-weight-bold text-center"
              style="font-size: 26px"
            >
              Chào mừng bạn đến với Panda Fly
            </mdb-col>
          </mdb-row>
          <!-- đăng ký hoặc đăng nhập  -->

          <mdb-container class="container-longin-user p-0">
            <mdb-row class="border-bottom mb-4">
              <mdb-col col="12" class="text-center">
                <mdb-list-group
                  class="custom list-group-flush width-list-group"
                  style="background-color: white !important"
                >
                  <mdb-list-group-item
                    @click.native="activeItem = 'login'"
                    :class="activeItem === 'login' && 'activet'"
                    style="background-color: white"
                  >
                    <mdb-icon icon="spinner" class="mr-3" />
                    <span>Lich sử giao dịch </span>
                  </mdb-list-group-item>
                  <mdb-list-group-item
                    @click.native="activeItem = 'register'"
                    :class="activeItem === 'register' && 'activet'"
                    style="background-color: white"
                  >
                    <mdb-icon icon="address-card" class="mr-3" /> Thông tin cá
                    nhân
                  </mdb-list-group-item>
                </mdb-list-group>
              </mdb-col>
            </mdb-row>
          </mdb-container>

          <!-- đăng nhập  -->
          <mdb-row
            v-if="activeItem === 'login'"
            class="pl-5 pr-5 pb-5 mb-5"
            style="margin-left: 23rem; margin-right: 15rem"
          >
            <mdb-col col="12">
              <mdb-row>
                <mdb-col col="12">
                  <!-- Group of default radios - option 2 -->
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="defaultGroupExample2"
                      name="groupOfDefaultRadios"
                      value="Tour đã thanh toán"
                      v-model="statusOder"
                    />
                    <label
                      class="custom-control-label font-weight-bold"
                      for="defaultGroupExample2"
                    >
                      Tour đã thanh toán (<span style="color: red">
                        {{ orderChecked.length }} </span
                      >)
                    </label>
                  </div>
                  <div v-if="statusOder === 'Tour đã thanh toán'">
                    <mdb-tbl bordered class="m-2 text-monospace">
                      <mdb-tbl-head color="light">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Số vé</th>
                          <th scope="col">Tên tour</th>
                          <th scope="col">Ngày Đặt</th>
                        </tr>
                      </mdb-tbl-head>

                      <mdb-tbl-body>
                        <tr v-for="(order, index) in orderChecked" :key="index">
                          <th scope="col">{{ index }}</th>
                          <td>
                            {{ order.seatDetail.listCutomerTour.length }}
                          </td>
                          <td>{{ order.seatDetail.tour.tourName }}</td>
                          <td>{{ formatDate(order.orderDate) }}</td>
                        </tr>
                      </mdb-tbl-body>
                    </mdb-tbl>
                  </div>
                  <!-- Group of default radios - option 1 -->
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="defaultGroupExample1"
                      name="groupOfDefaultRadios"
                      v-model="statusOder"
                      value="Tour đang đợi thanh toán"
                    />
                    <label
                      class="custom-control-label font-weight-bold"
                      for="defaultGroupExample1"
                    >
                      Tour đang đợi thanh toán(<span style="color: red">
                        {{ orderWaiting.length }} </span
                      >)
                    </label>
                  </div>
                  <div v-if="statusOder === 'Tour đang đợi thanh toán'">
                    <mdb-tbl bordered class="m-2 text-monospace">
                      <mdb-tbl-head color="light">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Số vé</th>
                          <th scope="col">Tên tour</th>
                          <th scope="col">Ngày Đặt</th>
                        </tr>
                      </mdb-tbl-head>

                      <mdb-tbl-body>
                        <tr v-for="(order, index) in orderWaiting" :key="index">
                          <th scope="col">{{ index }}</th>
                          <td>
                            {{ order.seatDetail.listCutomerTour.length }}
                          </td>
                          <td>{{ order.seatDetail.tour.tourName }}</td>
                          <td>{{ formatDate(order.orderDate) }}</td>
                        </tr>
                      </mdb-tbl-body>
                    </mdb-tbl>
                  </div>
                  <!-- Group of default radios - option 3 -->
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      class="custom-control-input"
                      id="defaultGroupExample3"
                      name="groupOfDefaultRadios"
                      value=" Tour đã hủy"
                      v-model="statusOder"
                    />
                    <label
                      class="custom-control-label font-weight-bold"
                      for="defaultGroupExample3"
                    >
                      Tour đã hủy(<span style="color: red">
                        {{ orderCancelled.length }} </span
                      >)
                    </label>
                  </div>
                  <div v-if="statusOder === ' Tour đã hủy'">
                    <mdb-tbl bordered class="m-2 text-monospace">
                      <mdb-tbl-head color="light">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Số vé</th>
                          <th scope="col">Tên tour</th>
                          <th scope="col">Ngày Đặt</th>
                        </tr>
                      </mdb-tbl-head>

                      <mdb-tbl-body>
                        <tr
                          v-for="(order, index) in orderCancelled"
                          :key="index"
                        >
                          <th scope="col">{{ index }}</th>
                          <td>
                            {{ order.seatDetail.listCutomerTour.length }}
                          </td>
                          <td>{{ order.seatDetail.tour.tourName }}</td>
                          <td>{{ formatDate(order.orderDate) }}</td>
                        </tr>
                      </mdb-tbl-body>
                    </mdb-tbl>
                  </div>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>

          <!-- đăng ký tài khoản  -->
          <mdb-row v-if="activeItem === 'register'" class="mb-5 pb-5">
            <mdb-col col="12" style="margin-left: 39rem">
              <mdb-row>
                <mdb-col col="=3">
                  <img
                    src="https://mdbootstrap.com/img/Others/documentation/img%20(75)-mini.jpg"
                    alt="thumbnail"
                    class="img-thumbnail"
                    style="width: 300px"
                  />
                </mdb-col>
                <mdb-col>
                  <mdb-row class="mb-2">
                    <mdb-col class="font-weight-bold text-right" col="1">
                      Họ tên:
                    </mdb-col>
                    <mdb-col class="text-monospace">
                      {{ userLogin.fullName }}
                    </mdb-col>
                  </mdb-row>
                  <mdb-row class="mb-2">
                    <mdb-col class="font-weight-bold text-right" col="1">
                      Ngày sinh:
                    </mdb-col>
                    <mdb-col class="text-monospace">
                      {{ formatDate(userLogin.birthday) }}
                    </mdb-col>
                  </mdb-row>
                  <mdb-row class="mb-2">
                    <mdb-col class="font-weight-bold text-right" col="1">
                      Giới tính:
                    </mdb-col>
                    <mdb-col class="text-monospace">
                      {{ userLogin.gender }}
                    </mdb-col>
                  </mdb-row>
                  <mdb-row class="mb-2">
                    <mdb-col class="font-weight-bold text-right" col="1">
                      Email:
                    </mdb-col>
                    <mdb-col class="text-monospace">
                      {{ userLogin.email }}
                    </mdb-col>
                  </mdb-row>
                  <mdb-row class="mb-2">
                    <mdb-col class="font-weight-bold text-right" col="1">
                      Điện thoại:
                    </mdb-col>
                    <mdb-col class="text-monospace">
                      {{ userLogin.phone }}
                    </mdb-col>
                  </mdb-row>
                  <mdb-row class="mb-2">
                    <mdb-col class="font-weight-bold text-right" col="1">
                      CMND:
                    </mdb-col>
                    <mdb-col class="text-monospace">
                      {{ userLogin.identityCard }}
                    </mdb-col>
                  </mdb-row>
                  <mdb-row class="mb-2">
                    <mdb-col class="font-weight-bold text-right" col="1">
                      Địa chỉ:
                    </mdb-col>
                    <mdb-col class="text-monospace">
                      {{ userLogin.address }}
                    </mdb-col>
                  </mdb-row>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mb-2">
                <mdb-col style="margin-left: -1rem">
                  <mdb-btn outline="danger" @click="updateProfile()"
                    >Cập nhật thông tin</mdb-btn
                  >
                  <mdb-btn outline="danger" @click="changePass()"
                    >Đổi mật khẩu</mdb-btn
                  >
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </div>
      </mdb-col>
    </mdb-row>
    <mdb-row class="border-bottom">
      <mdb-col></mdb-col>
    </mdb-row>

    <mdb-row>
      <mdb-col col="6">
        <img src="../assets/ft1.png" style="width: 52rem" />
      </mdb-col>
      <mdb-col col="6">
        <img src="../assets/ft2.png" style="width: 52rem" />
      </mdb-col>
    </mdb-row>

    <!-- cập nhật thông tin tài khoản  -->
    <mdb-modal :show="modalUpdateProfile" @close="modalUpdateProfile = false">
      <mdb-modal-header>
        <mdb-modal-title>Cập nhật thông tin</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="example1">
              Họ tên (<span style="color: red">*</span>)
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Nhập tên đăng ký"
              class="form-control"
              v-model="inforUser.fullName"
              :class="{
                'is-invalid': submitted && $v.inforUser.fullName.$error,
              }"
            />
            <div
              v-if="submitted && !$v.inforUser.fullName.required"
              class="invalid-feedback"
            >
              Không để trống tên
            </div>
          </div>
          <div class="form-group">
            <label for="example1">
              Ngày sinh (<span style="color: red">*</span>)
            </label>
            <input
              type="date"
              id="birthday"
              placeholder="Ngày sinh"
              class="form-control"
              v-model="inforUser.birthday"
              :class="{
                'is-invalid': submitted && $v.inforUser.birthday.$error,
              }"
            />
            <div
              v-if="submitted && !$v.inforUser.birthday.required"
              class="invalid-feedback"
            >
              Không để trống ngày sinh
            </div>
          </div>

          <div class="form-group">
            <label for="example1">
              Giới tính (<span style="color: red">*</span>)
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Nhập tên đăng ký"
              class="form-control"
              v-model="inforUser.gender"
              :class="{
                'is-invalid': submitted && $v.inforUser.gender.$error,
              }"
            />
            <div
              v-if="submitted && !$v.inforUser.gender.required"
              class="invalid-feedback"
            >
              Không để trống giới tính
            </div>
          </div>

          <div class="form-group">
            <label for="example1">
              SDT (<span style="color: red">*</span>)
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Nhập số điện thoại"
              class="form-control"
              v-model="inforUser.phone"
              :class="{
                'is-invalid': submitted && $v.inforUser.phone.$error,
              }"
            />
            <div
              v-if="submitted && !$v.inforUser.phone.required"
              class="invalid-feedback"
            >
              Không để trống số điện thoại
            </div>
          </div>
          <div class="form-group">
            <label for="example1">
              Email (<span style="color: red">*</span>)
            </label>
            <input
              type="email"
              id="email"
              placeholder="Nhập địa chỉ Email"
              class="form-control"
              v-model="inforUser.email"
              :class="{
                'is-invalid': submitted && $v.inforUser.email.$error,
              }"
            />
            <div
              v-if="submitted && !$v.inforUser.email.required"
              class="invalid-feedback"
            >
              Không để trống Email
            </div>
          </div>
          <div class="form-group">
            <label for="example1">
              CMND (<span style="color: red">*</span>)
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Nhập tên đăng ký"
              class="form-control"
              v-model="inforUser.identityCard"
              :class="{
                'is-invalid': submitted && $v.inforUser.identityCard.$error,
              }"
            />
            <div
              v-if="submitted && !$v.inforUser.identityCard.required"
              class="invalid-feedback"
            >
              Không để trống chứng minh nhân dân
            </div>
          </div>
          <div class="form-group">
            <label for="example1">
              Địa chỉ (<span style="color: red">*</span>)
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Nhập tên đăng ký"
              class="form-control"
              v-model="inforUser.address"
              :class="{
                'is-invalid': submitted && $v.inforUser.address.$error,
              }"
            />
            <div
              v-if="submitted && !$v.inforUser.address.required"
              class="invalid-feedback"
            >
              Không để trống địa chỉ
            </div>
          </div>

          <mdb-btn outline="success" style="width: 100%" type="submit">
            Lưu
          </mdb-btn>
        </form>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn
          color="secondary"
          size="sm"
          @click.native="modalUpdateProfile = false"
        >
          Thoát
        </mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
    <!-- đổi password  -->
    <mdb-modal :show="modalChangePass" @close="modalChangePass = false">
      <mdb-modal-header>
        <mdb-modal-title>Cập nhật thông tin</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <change-password @offModal="closeModal"></change-password>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn
          color="secondary"
          size="sm"
          @click.native="modalChangePass = false"
        >
          Thoát
        </mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

    <footer-b></footer-b>

    <!-- thông báo  -->
    <notifications
      group="auth"
      position="bottom top right"
      closeOnClick
      class="my-custom-class"
    />
  </div>
</template>

<script>
import NavUser from "../components/NavUser.vue";
import FooterB from "../components/FooterB.vue";
import moment from "moment";
import { required, email } from "vuelidate/lib/validators";
import ChangePassword from "../components/ChangePassword.vue";
export default {
  validations: {
    inforUser: {
      fullName: { required },
      birthday: { required },
      phone: { required },
      email: { required, email },
      gender: { required },
      address: { required },
      identityCard: { required },
    },
  },
  components: { NavUser, FooterB, ChangePassword },
  data() {
    return {
      activeItem: "login",
      submitted: false,
      userLogin: null,
      post: { token: null, id: null },
      statusOder: "Tour đã thanh toán",
      orderCancelled: [],
      orderChecked: [],
      orderWaiting: [],
      modalUpdateProfile: false,
      modalChangePass: false,
      inforUser: {
        fullName: "",
        birthday: "",
        phone: "",
        email: "",
        gender: "",
        address: "",
        identityCard: "",
      },
    };
  },

  mounted() {
    this.getUserLogin();
  },
  methods: {
    updateProfile() {
      this.modalUpdateProfile = true;
    },
    changePass() {
      this.modalChangePass = true;
    },
    register() {
      // validate
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      // ----------
      let uri = `${process.env.VUE_APP_PORT}/update-profile`;
      this.axios.put(uri, this.inforUser).then(() => {
        this.getUserLogin();
        this.modalUpdateProfile = false;
      });
    },
    closeModal() {
      this.modalChangePass = false;
    },
    // thông báo
    notifications(message) {
      this.$notify({
        group: "auth",
        text: message,
        type: "error",
      });
    },
    getUserLogin() {
      this.post.token = JSON.parse(localStorage.getItem("token"));
      if (this.post.token !== null) {
        let uri = `${process.env.VUE_APP_PORT}/account/profileByToken`;
        this.axios.post(uri, this.post).then((response) => {
          this.userLogin = response.data;
          this.inforUser = response.data;
          this.getTotalTour(this.userLogin._id);
        });
      }
    },
    getTotalTour(id) {
      this.post.id = id;
      let uri = `${process.env.VUE_APP_PORT}/customer/numberorder`;
      this.axios.post(uri, this.post).then((response) => {
        this.orderCancelled = response.data.orderCancelled;
        this.orderChecked = response.data.orderChecked;
        this.orderWaiting = response.data.orderWaiting;
      });
    },

    formatDate(value) {
      return moment(value).format("MMMM-DD-YYYY");
    },
  },
};
</script>

<style lang="scss" scoped>
.width-list-group {
  width: max-content !important;
}
.custom {
  flex-direction: row !important;
  background-color: #f1f1f1 !important;
}
.activet {
  border-bottom: 2px solid red !important;
  font-weight: bold;
}
.container-longin-user {
  width: auto;
  min-width: 375px;
  max-width: 448px;
  padding: 100px 20px 20px;
  margin: 0 auto;
}
.forgot-password:hover {
  color: red !important;
  font-size: 18px;
}
.btn-facebook {
  border-color: #1877f2 !important;
  background: #006aff !important;
}
</style>
