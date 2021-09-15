<template>
  <div>
    <nav-b></nav-b>
    <mdb-container>
      <div style="height:6rem"></div>
      <nav-page></nav-page>
      <mdb-row>
        <mdb-col cols="12" class="pl-0">
          <p class="tour-name">
            {{ tour.tourName }}
          </p>
          <mdb-icon icon="barcode" class="mr-1 mb-1" />
          <span class="tour-code">{{ tour.tourId }}</span>
        </mdb-col>
      </mdb-row>
      <mdb-row style="background-color: #f1f1f1;">
        <mdb-col col="8" class="pl-0">
          <template>
            <mdb-carousel
              slide
              :interval="4000"
              :items="items"
              indicators
            ></mdb-carousel>
          </template>
        </mdb-col>
        <mdb-col col="4">
          <mdb-row class="mt-4">
            <mdb-col col="12">
              <mdb-row>
                <mdb-col col="12">
                  <div style="float: left;">
                    <template>
                      <mdb-rating v-model="value" />
                    </template>
                  </div>

                  <span
                    class="rating"
                    style="font-size: 14px; margin-left: 5px;"
                  >
                    <span class="average"> <strong>4.67</strong> </span>
                    <strong> / <span class="best">5 </span> </strong>trong
                    <span class="votes"> <strong>364</strong> </span> Đánh giá
                    <span class="summary"> </span>
                  </span>
                </mdb-col>
              </mdb-row>

              <mdb-row class="mt-1">
                <mdb-col col="12">
                  <mdb-icon icon="eye" class="mr-2" />
                  <span class="text-monospace">999</span>
                  <mdb-icon icon="thumbs-up" class="mr-2 ml-4" />
                  <span class="text-monospace">999</span>
                  <mdb-icon icon="comment" class="mr-2 ml-4" />
                  <span class="text-monospace">999</span>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
          <hr />
          <mdb-row class="mt-4">
            <mdb-col col="6">
              <span class="font-weight-bold">Khởi hành:</span> <br />
              <span class="font-weight-bold">Thời gian:</span> <br />
              <span class="font-weight-bold">Nơi khởi hành:</span>
            </mdb-col>
            <mdb-col col="6" class="pl-0">
              <span class="text-monospace">
                {{ formatDate(tour.startDate) }}
              </span>
              <br />
              <span class="text-monospace"> {{ tour.numberOfDays }} Ngày</span>
              <br />
              <span class="text-monospace"> {{ tour.startPlace }} </span>
            </mdb-col>
          </mdb-row>
          <hr />
          <mdb-row class="mt-4">
            <mdb-col col="6">
              <span class="font-weight-bold">Giá vé:</span><br />

              <span class="font-weight-bold">Số vé còn:</span>
            </mdb-col>
            <mdb-col col="6" class="pl-0">
              <span class="tour-name">
                {{ formatMoney(tour.priceDetail.adult) }}
              </span>
              <br />
              <span class="text-monospace">
                {{ tour.numberTicket }}
              </span>
            </mdb-col>
          </mdb-row>
          <hr />
          <mdb-row class="mt-2">
            <mdb-col col="12">
              <mdb-btn
                color="danger"
                style="width: 326px;"
                icon="cart-plus"
                @click="bookTour(tour._id)"
              >
                Đặt ngay</mdb-btn
              >
            </mdb-col>
          </mdb-row>

          <hr />
          <mdb-row class="mt-2">
            <mdb-col col="12">
              <span class="font-weight-bold">Bạn cần hỗ trợ</span>
              <mdb-row class="mt-2">
                <mdb-col col="6"> </mdb-col>
                <mdb-col col="6"> </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
      <!-- chương trình tour - chi tiết tour -  lứu ý - liên hệ  -->
      <mdb-row class="mt-4">
        <mdb-col col="12">
          <mdb-row>
            <mdb-col col="3">
              <mdb-row>
                <mdb-col col="12" style="background-color: #f1f1f1;">
                  <mdb-list-group class="list-group-flush  width-list-group ">
                    <mdb-list-group-item
                      @click.native="activeItem = 'detail-tour'"
                      :class="activeItem === 'detail-tour' && 'active'"
                    >
                      <mdb-icon icon="spinner" class="mr-3" />
                      <span> Chương trình Tour</span>
                    </mdb-list-group-item>
                    <mdb-list-group-item
                      @click.native="activeItem = 'detail'"
                      :class="activeItem === 'detail' && 'active'"
                    >
                      <mdb-icon icon="list-ul" class="mr-3" /> Chi tiêt Tour
                    </mdb-list-group-item>
                    <mdb-list-group-item
                      @click.native="activeItem = 'otherDay'"
                      :class="activeItem === 'otherDay' && 'active'"
                    >
                      <mdb-icon icon="calendar-alt" class="mr-3" />
                      Ngày khác
                    </mdb-list-group-item>
                    <mdb-list-group-item
                      @click.native="activeItem = 'opinion'"
                      :class="activeItem === 'opinion' && 'active'"
                    >
                      <mdb-icon icon="table" class="mr-3" />
                      Ý kiến khách hàng
                    </mdb-list-group-item>
                    <mdb-list-group-item
                      @click.native="activeItem = 'note'"
                      :class="activeItem === 'note' && 'active'"
                    >
                      <mdb-icon icon="exclamation-triangle" class="mr-3" /> Lưu
                      ý
                    </mdb-list-group-item>
                    <mdb-list-group-item
                      @click.native="activeItem = 'active'"
                      :class="activeItem === 'active' && 'active'"
                    >
                      <mdb-icon icon="headset" class="mr-3" /> Liên hệ
                    </mdb-list-group-item>
                  </mdb-list-group>
                </mdb-col>
              </mdb-row>
              <mdb-row style="background-color: #f1f1f1 ;" class="mt-3">
                <mdb-col col="12">
                  <mdb-row class=" mb-1">
                    <mdb-col
                      col="12"
                      style="background-color: #e1e1e1; height: 63px;"
                      class=""
                    >
                      <br />
                      <span class="font-weight-bold">
                        DỊCH VỤ ĐI KÈM
                      </span>
                      <br />
                    </mdb-col>
                  </mdb-row>

                  <ul style="margin-left: -16px;">
                    <li class="mt-3 mb-2 text-monospace">
                      Bữa ăn theo chương trình
                    </li>
                    <li class="mt-3 mb-2 text-monospace">Bảo hiểm</li>
                    <li class="mt-3 mb-2 text-monospace">Hướng dẫn viên</li>
                    <li class="mt-3 mb-2 text-monospace">Vé tham quan</li>
                    <li class="mt-3 mb-2 text-monospace">Vận chuyển</li>
                  </ul>
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col style="background: #f1f1f1 ; " class="ml-2">
              <mdb-row v-if="activeItem === 'detail-tour'">
                <mdb-col col="12">
                  <mdb-row style="background-color: #e1e1e1; height: 55px;">
                    <mdb-col col="12">
                      <br />
                      <span class="font-weight-bold ">CHƯƠNG TRÌNH TOUR</span>
                    </mdb-col>
                  </mdb-row>
                  <mdb-container>
                    <mdb-row
                      class="mt-4 flex-grow-1 pb-2 text-center "
                      v-for="(value, index) in tour.numDay"
                      :key="index"
                    >
                      <mdb-col
                        col="3"
                        class="d-flex align-items-center  border-right border-danger flex-grow-1"
                      >
                        <div>
                          <h3
                            class="font-weight-bold "
                            style="  color: #ff002d;"
                          >
                            {{ tour.numDay[index] }}
                          </h3>
                          <span class="font-weight-bold ">
                            {{ formatDate(tour.startDate) }}
                          </span>
                        </div>
                      </mdb-col>
                      <mdb-col col="9">
                        <p v-html="tour.detail[index]"></p>
                      </mdb-col>
                    </mdb-row>
                  </mdb-container>
                </mdb-col>
              </mdb-row>
              <mdb-row v-if="activeItem === 'detail'">
                <mdb-col col="12">
                  <infor-tour-detail v-bind:tour="tour"></infor-tour-detail>
                </mdb-col>
              </mdb-row>
              <mdb-row v-if="activeItem === 'otherDay'">
                <mdb-col col="12">
                  <calendar-tour
                    v-bind:tourName="tour.tourName"
                  ></calendar-tour>
                </mdb-col>
              </mdb-row>
              <mdb-row v-if="activeItem === 'opinion'">
                <mdb-col col="12">
                  <comment-tour></comment-tour>
                </mdb-col>
              </mdb-row>
              <mdb-row v-if="activeItem === 'note'">
                <mdb-col col="12">
                  <note></note>
                </mdb-col>
              </mdb-row>
              <mdb-row v-if="activeItem === 'active'">
                <mdb-col col="12">
                  <mdb-row style="background-color: #e1e1e1; height: 55px;">
                    <mdb-col col="12">
                      <br />
                      <span class="font-weight-bold p-3 ">LỨU Ý</span>
                    </mdb-col>
                  </mdb-row>
                  <mdb-container class="p-3">
                    <div class="form-title ">
                      Trụ sở chính
                    </div>
                    <div>
                      <p>
                        <strong>Địa chỉ: </strong> 190 Pasteur, Phường Võ Thị
                        Sáu, Quận 3, Tp. Hồ Chí Minh
                      </p>
                      <p class="mg-bot10">
                        <strong>Điện thoại:</strong> (84-28) 3822 8898
                      </p>
                      <p class="mg-bot10">
                        <strong>Fax:</strong> (84-28) 3829 9142
                      </p>
                      <p><strong>Email:</strong> info@vietravel.com</p>
                    </div>
                  </mdb-container>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
      <!-- các tour tưởng tự  -->
      <hr />
      <div>
        <mdb-row class="mb-3">
          <mdb-col cols="12">
            <b>
              <span>Các tour tương tự</span>
            </b>
          </mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col cols="12">
            <cards-tour v-bind:numberTour="3"></cards-tour>
          </mdb-col>
        </mdb-row>
      </div>
    </mdb-container>
    <footer-b></footer-b>
  </div>
</template>

<script>
import CardsTour from '../components/Cards-tour.vue';
import FooterB from '../components/FooterB.vue';
import NavPage from '../components/NavPage.vue';
import NavB from '../components/NavUser.vue';
import moment from 'moment';

import { mdbRating } from 'mdbvue';
import InforTourDetail from '../components/InforTourDetail.vue';
import Note from '../components/Note.vue';
import CalendarTour from '../components/Calendar-tour.vue';
import CommentTour from '../components/comment-tour.vue';
export default {
  components: {
    NavB,
    FooterB,
    CardsTour,
    NavPage,
    mdbRating,
    InforTourDetail,
    Note,
    CalendarTour,
    CommentTour,
  },
  data() {
    return {
      tour: {
        priceDetail: {
          adult: null,
        },
      },
      value: 2,
      items: [],
      activeItem: 'detail-tour',
    };
  },
  mounted() {
    this.findTour();
  },
  methods: {
    beforeMount() {
      this.activeItem = this.$route.name;
    },
    bookTour(idTour) {
      this.$router.push({ name: 'BookTour', params: { id: idTour } });
    },

    findTour() {
      let uri = `${process.env.VUE_APP_PORT}/tour/${this.$route.params.id}`;
      this.axios.get(uri, this.data).then((response) => {
        this.tour = response.data;
        // Lấy hình
        this.tour.listImage.forEach((img) => {
          const a = {
            img: true,
            src: img,
          };
          this.items.push(a);
        });
      });
    },

    formatDate(value) {
      return moment(value).format('MMMM DD YYYY');
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

<style>
.tour-name {
  color: #ff002d;
  font-weight: 500;
  font-size: 17.5px;
}
.tour-code {
  font-weight: 500;
}
.rating-icon {
  margin-left: -8px !important;
}
.justify-content-between {
  justify-content: normal !important;
}
.width-list-group {
  width: 284px;
  margin-left: -15px;
}
.list-group-item {
  background-color: #f1f1f1;
}
</style>
<style scoped>
.list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}
.list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}
</style>
