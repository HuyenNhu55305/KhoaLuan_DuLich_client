<template>
  <div>
    <nav-user></nav-user>

    <mdb-container>
      <nav-page class="mt-5 pt-5" ></nav-page>
    </mdb-container>
    <mdb-container style="max-width: 1350px !important">
      <!-- tìm kiếm  -->
      <mdb-tbl>
        <mdb-tbl-body>
          <tr class="text-center">
            <td class="font-weight-bold" style="padding-top: 29px">Địa điểm</td>
            <td>
              <select
                class="browser-default custom-select select_gender "
                style="height: 48px"
                v-model="post.place"
                v-on:change="getAllTour()"
              >
                <option value="null">-- Tất cả --</option>
                <option
                  v-for="place in places"
                  :value="place._id"
                  :key="place._id"
                >
                  {{ place.placeName }}
                </option>
              </select>
            </td>

            <td class="font-weight-bold" style="padding-top: 29px">Giá</td>
            <td>
              <select
                class="browser-default custom-select select_gender"
                style="height: 48px"
                v-model="post.adult"
                v-on:change="getAllTour()"
              >
                <option value="null">-- Tất cả --</option>
                <option value="1">Dưới 1 triệu</option>
                <option value="2">2-4 triệu</option>
                <option value="3">4-6 triệu</option>
                <option value="4">6-10 triệu</option>
                <option value="5">Trên 10 triệu</option>
              </select>
            </td>
            <td class="font-weight-bold" style="padding-top: 29px">Ngày đi</td>
            <td>
              <div class="clear-date">
                <mdb-btn
                  v-on:click="clearStartDate()"
                  outline="primary"
                  style="
                    border: none !important;
                    font-size: 17px;
                    color: black !important;
                    padding-right: 14px;
                  "
                >
                  X
                </mdb-btn>
              </div>

              <input
                type="date"
                id="startDate"
                class="form-control form-control-lg select_gender"
                v-model="post.startDate"
                required="required"
                v-on:change="getAllTour()"
              />
            </td>
          </tr>
          <tr class="text-center">
            <td class="font-weight-bold" style="padding-top: 29px">
              Nơi khỏi hành
            </td>
            <td>
              <select
                class="browser-default custom-select select_gender"
                style="height: 48px"
                v-model="post.startPlace"
                v-on:change="getAllTour()"
              >
                <option value="null">-- Tất cả --</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                <option value="Đà Lạt">Đà Lạt</option>
                <option value="Vũng tàu">Vũng tàu</option>
                <option value="Phú Quốc">Phú Quốc</option>
                <option value="Binh Dương">Bình Dương</option>
                <option value="Buôn Mê Thuột">Buôn Mê Thuột</option>
                <option value="Cà Mau">Cà Mau</option>
                <option value="Cần Thơ">Cần Thơ</option>
                <option value="Hải Phòng">Hải Phòng</option>
                <option value="Huế">Huế</option>
                <option value="Long Xuyên">Long Xuyên</option>
                <option value="Nha Trang">Nha Trang</option>
                <option value="Quảng Ninh">Quảng Ninh</option>
                <option value="Quy Nhơn">Quy Nhơn</option>
                <option value="Rạch Giá">Rạch Giá</option>
                <option value="Vinh">Vinh</option>
              </select>
            </td>

            <td class="font-weight-bold" style="padding-top: 29px">
              Số vé còn
            </td>
            <td>
              <select
                class="browser-default custom-select select_gender"
                style="height: 48px"
                v-model="post.numberTicket"
                v-on:change="getAllTour()"
              >
                <option value="null">-- Còn chỗ --</option>
                <option value="5">Trên 5 vé</option>
                <option value="10">Trên 10 vé</option>
              </select>
            </td>
            <td class="font-weight-bold" style="padding-top: 29px">Ngày về</td>
            <td>
              <div class="clear-date">
                <mdb-btn
                  v-on:click="clearEndDate()"
                  outline="primary"
                  style="
                    border: none !important;
                    font-size: 17px;
                    color: black !important;
                  "
                  >X</mdb-btn
                >
              </div>
              <input
                type="date"
                id="example1"
                class="form-control form-control-lg select_gender"
                v-model="post.endDate"
                v-on:change="getAllTour()"
              />
            </td>
          </tr>
          <tr>
            <td class="font-weight-bold" style="padding-top: 29px">
              Phương tiện di chuyển
            </td>
            <td>
              <select
                class="browser-default custom-select select_gender"
                style="height: 48px"
                v-model="post.transportation"
                v-on:change="getAllTour()"
              >
                <option value="null">-- Tất cả --</option>
                <option value="Máy bay">Máy bay</option>
                <option value="Ô tô">Ô tô</option>
                <option value="Xe lửa">Xe lửa</option>
              </select>
            </td>
            <td class="font-weight-bold" style="padding-top: 29px">
              Số tour tìm được
            </td>
            <td>
              <b>
                <span class="price-tour">{{ Total }}</span>
              </b>
            </td>
            <td class="font-weight-bold" style="padding-top: 29px"></td>
            <td></td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>
    </mdb-container>
    <mdb-container>
      <!-- danh sách tour  -->
      <template>
        <div v-for="tour in items" :key="tour._id">
          <div v-on:click="detail(tour._id)">
            <hr class="my-3" />
            <mdb-row>
              <mdb-col col="12">
                <p class="tour-name">{{ tour.tourName }}</p>
              </mdb-col>
            </mdb-row>

            <mdb-row>
              <mdb-col lg="5">
                <mdb-view class="rounded z-depth-2 mb-lg-0" hover>
                  <img
                    class="img-fluid"
                    :src="tour.listImage[2]"
                    alt="Sample image"
                  />
                </mdb-view>
              </mdb-col>
              <mdb-col lg="7">
                <mdb-row>
                  <mdb-col col="12">
                    <mdb-icon icon="barcode" class="mr-1 mb-1" />
                    <span class="tour-code">{{ tour.tourId }}</span>
                  </mdb-col>
                </mdb-row>

                <hr />
                <mdb-row class="mt-3">
                  <mdb-col col="6">
                    <span class="font-weight-bold">Khởi hành:</span> <br />
                    <span class="font-weight-bold">Thời gian:</span> <br />
                    <span class="font-weight-bold">Nơi khởi hành:</span>
                  </mdb-col>
                  <mdb-col col="6" class="pl-0">
                    <span class="text-monospace">{{
                      formatDate(tour.startDate)
                    }}</span>
                    <br />
                    <span class="text-monospace">
                      {{ tour.numberOfDays }} Ngày
                    </span>
                    <br />
                    <span class="text-monospace">{{ tour.startPlace }}</span>
                  </mdb-col>
                </mdb-row>
                <hr />
                <mdb-row class="mt-3">
                  <mdb-col col="6">
                    <span class="font-weight-bold">Giá vé:</span><br />
                    <span class="font-weight-bold">Số vé còn:</span>
                  </mdb-col>
                  <mdb-col col="6" class="pl-0">
                    <span class="tour-name">{{
                      formatMoney(tour.priceDetail.adult)
                    }}</span>
                    <br />
                    <span class="text-monospace">
                      {{ tour.numberTicket }}
                    </span>
                  </mdb-col>
                </mdb-row>
              </mdb-col>
            </mdb-row>
          </div>
        </div>
        <mdb-row class="m-5">
          <mdb-col class="text-center">
            <jw-pagination
              :items="exampleItems"
              @changePage="onChangePage"
            ></jw-pagination>
          </mdb-col>
        </mdb-row>
      </template>

      <!-- không tìm thấy tour  -->
      <mdb-row
        v-if="items.length === 0"
        style="height: 33rem"
        class="mt-1 pt-5 mb-5 pb-5 border-top"
      >
        <mdb-col class="text-center">
          <img
            src="../assets/panda.jpg"
            class="img-fluid"
            alt="Responsive image"
            style="width: 20rem"
          />
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <footer-b></footer-b>
  </div>
</template>

<script>
import FooterB from "../components/FooterB.vue";
import NavPage from "../components/NavPage.vue";
import NavUser from "../components/NavUser.vue";
import moment from "moment";
export default {
  components: { NavUser, FooterB, NavPage },
  data() {
    return {
      items: [],
      places: [],

      post: {
        startPlace: null,
        endDate: null,
        adult: null,
        startDate: null,
        numberTicket: null,
        transportation: null,
        place: null,
      },
      Total: 0,

    // Pagination 10 tour 
      exampleItems: [],
      pageOfItems: [],
    };
  },
  mounted() {
    this.getAllTour();
    this.getAllPlace();
  },
  methods: {
    getAllPlace() {
      let uri = `${process.env.VUE_APP_PORT}/places`;
      this.axios.get(uri, this.post).then((response) => {
        this.places = response.data;
      });
    },
    getAllTour() {
      if (this.post.startPlace === "null") {
        this.post.startPlace = null;
      }
      if (this.post.endDate === "null") {
        this.post.endDate = null;
      }
      if (this.post.adult === "null") {
        this.post.adult = null;
      }
      if (this.post.numberTicket === "null") {
        this.post.numberTicket = null;
      }
      if (this.post.transportation === "null") {
        this.post.transportation = null;
      }
      if (this.post.place === "null") {
        this.post.place = null;
      }
      let uri = `${process.env.VUE_APP_PORT}/tours/keyword`;
      this.axios.post(uri, this.post).then((response) => {
        this.items = response.data;
        this.exampleItems = response.data;
        this.Total = this.items.length;
      });
    },
    // Pagination 10 tour 
    onChangePage(items) {
      // update page of items
      this.items = items;
    },

    formatDate(value) {
      return moment(value).format("YYYY/MM/DD");
    },
    formatMoney(money) {
      const formatter = new Intl.NumberFormat("vi", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(money);
    },
    initEdit(idTour) {
      this.$router.push({ name: "detail-tour", params: { id: idTour } });
    },
    detail(idTour) {
      this.$router.push({ name: "TourDetail", params: { id: idTour } });
    },
    clearStartDate() {
      this.post.startDate = null;
      this.getAllTour();
    },
    clearEndDate() {
      this.post.endDate = null;
      this.getAllTour();
    },
  },
};
</script>

<style>
.select_gender {
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  border: none;
  border-bottom: 1px solid #c6c6c6;
}
.select_gender input {
  border: none;
}
.input-custom {
  border: none;
}
.clear-date {
  margin-top: -10px;
  margin-left: 151px;

  position: absolute;
}
</style>
