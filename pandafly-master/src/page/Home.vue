<template>
  <div>
    <NavUser></NavUser>
    <div>
      <mdb-container>
        <nav-page></nav-page>
        <section class="text-center mb-4">
          <h2 class="h1-responsive font-weight-bold text-center">
            Địa điểm du lịch yêu thích
          </h2>
          <p class="grey-text text-center w-responsive mx-auto mb-5">
            Trong nước và ngoài nước
          </p>

          <mdb-row>
            <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
              <mdb-card collection class="z-depth-1-half">
                <div class="view zoom" style="height: 383px">
                  <img
                    src="https://travel.com.vn/Content/ThemeHe/img/dd1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>

                <div class="white-text text-center halongCSS">
                  <b>
                    <span style="font-size: 17px"> Vịnh Hạ Long </span>
                  </b>
                  <br />
                  <span>
                    Đã có <span style="color: red">1.600*</span> lượt khách
                  </span>
                </div>
              </mdb-card>
            </mdb-col>
            <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
              <mdb-card collection class="z-depth-1-half">
                <div class="view zoom" style="height: 383px">
                  <img
                    src="https://travel.com.vn/Content/ThemeHe/img/dd2.jpg"
                    alt=""
                  />
                </div>
                <div class="white-text text-center halongCSS">
                  <b>
                    <span style="font-size: 17px"> Sapa </span>
                  </b>
                  <br />
                  <span>
                    Đã có <span style="color: red">1.200*</span> lượt khách
                  </span>
                </div>
              </mdb-card>
            </mdb-col>
            <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
              <mdb-card collection class="z-depth-1-half">
                <div class="view zoom" style="height: 383px">
                  <img
                    src="https://travel.com.vn/Content/ThemeHe/img/dd3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="white-text text-center halongCSS">
                  <b>
                    <span style="font-size: 17px"> Đà nẵng </span>
                  </b>
                  <br />
                  <span>
                    Đã có <span style="color: red">1.800*</span> lượt khách
                  </span>
                </div>
              </mdb-card>
            </mdb-col>
            <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
              <mdb-card collection class="z-depth-1-half">
                <div class="view zoom" style="height: 383px">
                  <img
                    src="https://travel.com.vn/Content/ThemeHe/img/dd4.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="white-text text-center halongCSS">
                  <b>
                    <span style="font-size: 17px"> Quy Nhơn </span>
                  </b>
                  <br />
                  <span>
                    Đã có <span style="color: red">1.900*</span> lượt khách
                  </span>
                </div>
              </mdb-card>
            </mdb-col>
          </mdb-row>
          <mdb-row class="mb-5 mt-4 mr-0">
            <mdb-col cols="12">
              <mdb-row>
                <mdb-col cols="2" align="center">
                  <mdb-card no-body class="overflow-hidden">
                    <mdb-row no-gutters>
                      <mdb-col md="12">
                        <mdb-card-image
                          src="https://travel.com.vn/Content/ThemeHe/img/qg1.jpg"
                          alt="Image"
                          class="rounded-0 rgba-black-strong"
                        >
                        </mdb-card-image>
                        <div class="white-text text-center chauAuCSS">
                          <b>
                            <span style="font-size: 17px"> Châu âu </span>
                          </b>
                          <br />
                          <span style="margin-left: 110px; color: orange">
                            Khám phá ngay
                          </span>
                        </div>
                      </mdb-col>
                    </mdb-row>
                  </mdb-card>
                </mdb-col>
                <mdb-col cols="2" align="center">
                  <mdb-card no-body class="overflow-hidden">
                    <mdb-row no-gutters>
                      <mdb-col md="12">
                        <mdb-card-image
                          src="https://travel.com.vn/Content/ThemeHe/img/qg2.jpg"
                          alt="Image"
                          class="rounded-0"
                        >
                        </mdb-card-image>
                        <div class="white-text text-center chauAuCSS">
                          <b>
                            <span style="font-size: 17px"> Châu Á </span>
                          </b>
                          <br />
                          <span style="margin-left: 110px; color: orange">
                            Khám phá ngay
                          </span>
                        </div>
                      </mdb-col>
                    </mdb-row>
                  </mdb-card>
                </mdb-col>
                <mdb-col cols="2" align="center">
                  <mdb-card no-body class="overflow-hidden">
                    <mdb-row no-gutters>
                      <mdb-col md="12">
                        <mdb-card-image
                          src="https://travel.com.vn/Content/ThemeHe/img/qg3.jpg"
                          alt="Image"
                          class="rounded-0"
                        >
                        </mdb-card-image>
                        <div class="white-text text-center chauAuCSS">
                          <b>
                            <span style="font-size: 17px"> Châu Úc </span>
                          </b>
                          <br />
                          <span style="margin-left: 110px; color: orange">
                            Khám phá ngay
                          </span>
                        </div>
                      </mdb-col>
                    </mdb-row>
                  </mdb-card>
                </mdb-col>
                <mdb-col cols="2" align="center">
                  <mdb-card no-body class="overflow-hidden">
                    <mdb-row no-gutters>
                      <mdb-col md="12">
                        <mdb-card-image
                          src="https://travel.com.vn/Content/ThemeHe/img/qg4.jpg"
                          alt="Image"
                          class="rounded-0"
                        >
                        </mdb-card-image>
                        <div class="white-text text-center chauAuCSS">
                          <b>
                            <span style="font-size: 17px"> Châu Mỹ </span>
                          </b>
                          <br />
                          <span style="margin-left: 110px; color: orange">
                            Khám phá ngay
                          </span>
                        </div>
                      </mdb-col>
                    </mdb-row>
                  </mdb-card>
                </mdb-col>
                <mdb-col cols="2" align="center" class="pr-0">
                  <mdb-card no-body class="overflow-hidden">
                    <mdb-row no-gutters>
                      <mdb-col md="12">
                        <mdb-card-image
                          src="https://travel.com.vn/Content/ThemeHe/img/qg5.jpg"
                          alt="Image"
                          class="rounded-0"
                        >
                        </mdb-card-image>
                        <div class="white-text text-center chauAuCSS">
                          <b>
                            <span style="font-size: 17px"> Châu phi </span>
                          </b>
                          <br />
                          <span style="margin-left: 110px; color: orange">
                            Khám phá ngay
                          </span>
                        </div>
                      </mdb-col>
                    </mdb-row>
                  </mdb-card>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
        </section>
      </mdb-container>

      <section class="text-center m-4">
        <h2 class="h1-responsive font-weight-bold text-center">
          Chuyến đi tốt nhất
        </h2>
        <p class="grey-text text-center w-responsive mx-auto mb-5">
          Ưu đãi tốt nhất cho các chuyến đi từ chúng tôi
        </p>
      </section>
      <mdb-container>
        <mdb-row>
          <cards-tour v-bind:numberTour="6"></cards-tour>
        </mdb-row>
      </mdb-container>

      <mdb-row class="mr-0 mt-5">
        <mdb-col col="12" class="pr-0 text-center">
          <mdb-btn outline="danger" @click="listTour()">Xem thêm</mdb-btn>
        </mdb-col>
      </mdb-row>
      <mdb-row class="mr-0 mt-5">
        <mdb-col col="12" class="pr-0">
          <mdb-container>
            <section class="text-center mb-4">
              <mdb-row>
                <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
                  <mdb-card collection class="z-depth-1-half">
                    <div class="view zoom" style="height: 314px">
                      <img
                        src="https://media.travel.com.vn/Advertisings/bn_200506_DU-LICH-AN-TOAN-2.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="white-text text-center img1">
                      <b>
                        <span style="font-size: 17px"> Du lịch an toàn </span>
                      </b>
                    </div>
                  </mdb-card>
                </mdb-col>
                <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
                  <mdb-card collection class="z-depth-1-half">
                    <div class="view zoom" style="height: 314px">
                      <img
                        src="https://media.travel.com.vn/Advertisings/bn_200506_KY-NGHI-GIA-DINH.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="white-text text-center img1">
                      <b>
                        <span style="font-size: 17px"> VÉ MÁY BAY/XE + KHÁCH SẠN </span>
                      </b>
                    </div>
                  </mdb-card>
                </mdb-col>
                <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
                  <mdb-card collection class="z-depth-1-half">
                    <div class="view zoom" style="height: 314px">
                      <img
                        src="https://media.travel.com.vn/Advertisings/bn_200506_TOUR-UU-DAI-KHUNG.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="white-text text-center img1">
                      <b>
                        <span style="font-size: 17px"> DỊCH VỤ KHÁCH SẠN </span>
                      </b>
                    </div>
                  </mdb-card>
                </mdb-col>
                <mdb-col lg="3" md="6" class="mb-lg-0 mb-4">
                  <mdb-card collection class="z-depth-1-half">
                    <div class="view zoom" style="height: 314px">
                      <img
                        src="https://media.travel.com.vn/Advertisings/bn_200506_VIETRAVEL-GIFT.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="white-text text-center img1">
                      <b>
                        <span style="font-size: 17px"> KHUYẾN MÃI </span>
                      </b>
                    </div>
                  </mdb-card>
                </mdb-col>
              </mdb-row>
              <mdb-row class="mt-4">
                <mdb-col class="mb-lg-0 mb-4">
                  <mdb-card collection class="z-depth-1-half">
                    <div class="view zoom" >
                      <img
                        src="https://media.travel.com.vn/Advertisings/bn_210507_bn_210507_banner-pq-nt.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                  </mdb-card>
                </mdb-col>
              </mdb-row>
            </section>
          </mdb-container>
        </mdb-col>
      </mdb-row>

      <mdb-row class="mr-0 mt-5">
        <mdb-col col="12" class="pr-0">
          <template>
            <mdb-carousel
              :items="items"
              :interval="2000"
              controlls
            ></mdb-carousel>
          </template>
        </mdb-col>
      </mdb-row>

      <mdb-container>
        <section class="text-center m-5">
          <h2 class="h1-responsive font-weight-bold text-center">
            Sản phẩm đáng chú ý
          </h2>
          <p class="grey-text text-center w-responsive mx-auto mb-5">
            Những sản phẩm thích hợp cho những chuyến du lich
          </p>
        </section>
        <mdb-row class="mr-0 mt-5 mb-5">
          <mdb-col col="12" class="pr-0">
            <cards-product v-bind:typeTravel="typeTravelNull"></cards-product>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <mdb-row class="mr-0 mt-5 mb-5 p-5">
        <mdb-col col="12" class="text-center pr-0">
          <img src="https://travel.com.vn/Content/ThemeHe/img/conma-bot.png" />
        </mdb-col>
      </mdb-row>
      <mdb-row
        class="mr-0 mt-5 mb-5"
        style="height: 23rem; background: #f1f1f1"
      >
        <mdb-col col="5" class="pr-0">
          <div class="example z-depth-1 whyChange">
            <img
              class="img"
              src="https://travel.com.vn/Content/ThemeHe/img/bg-why.png"
            />
            <div class="why">
              <h2>Vì sao chọn</h2>
              <b>
                <span>Website Panda Fly</span>
              </b>
            </div>
          </div>
        </mdb-col>
        <mdb-col col="7">
          <mdb-row class="mr-0 mb-4 mt-4 pt-1">
            <mdb-col col="4">
              <h2 class="colorWord">1.</h2>
              <b class="bSize">MẠNG BÁN TOUR</b> <br />
              <span>------------------------------------</span> <br />
              <span>Đầu tiên tại Việt Nam</span> <br />
              <span>Ứng dụng công nghệ mới nhất</span>
            </mdb-col>
            <mdb-col col="4">
              <h2 class="colorWord">2.</h2>
              <b class="bSize">Thanh Toán</b> <br />
              <span>------------------------------------</span> <br />
              <span>An toàn và linh hoạt</span> <br />
              <span>Liên kết với các tổ chức tài chính</span>
            </mdb-col>
            <mdb-col col="4">
              <h2 class="colorWord">3.</h2>
              <b class="bSize">Giá cả</b> <br />
              <span>------------------------------------</span> <br />
              <span>Luôn có mức giá tốt nhất</span> <br />
              <span>Bảo đám giá tốt</span>
            </mdb-col>
          </mdb-row>

          <mdb-row class="mr-0">
            <mdb-col col="4">
              <h2 class="colorWord">4.</h2>
              <b class="bSize">Sản phẩm</b> <br />
              <span>------------------------------------</span> <br />
              <span>Đa dạng, chất lượng</span> <br />
              <span>Đảm bảo chất lượng tốt nhất</span>
            </mdb-col>
            <mdb-col col="4">
              <h2 class="colorWord">5.</h2>
              <b class="bSize">Đặt tour</b> <br />
              <span>------------------------------------</span> <br />
              <span>Dễ dàng và nhanh chóng</span> <br />
              <span>Đặt tour chỉ với 3 bước</span>
            </mdb-col>
            <mdb-col col="4">
              <h2 class="colorWord">6.</h2>
              <b class="bSize">Hỗ trợ</b> <br />
              <span>------------------------------------</span> <br />
              <span>Từ 08h00- 22h00</span> <br />
              <span>Hotline và hỗ trợ trực tuyến</span>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
    </div>

    <FooterB></FooterB>
  </div>
</template>

<script>
import { mdbCarousel } from "mdbvue";
import { mdbRow, mdbCol, mdbCard, mdbCardImage } from "mdbvue";

import FooterB from "../components/FooterB.vue";
import NavUser from "../components/NavUser.vue";
import CardsTour from "../components/Cards-tour.vue";
import CardsProduct from "../components/cards-product.vue";
import NavPage from "../components/NavPage.vue";
export default {
  components: {
    NavUser,
    FooterB,
    mdbCarousel,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    CardsTour,
    CardsProduct,
    NavPage,
  },

  data() {
    return {
      items: [
        {
          img: true,
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
        },
        {
          img: true,
          src: "https://images.unsplash.com/photo-1547152850-11ac68bbe48f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80",
        },
        {
          img: true,
          src: "https://images.unsplash.com/photo-1614019465575-16b8a61df7f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
      ],
      typeTravelNull: {
        type: "null",
        numberProduct: 3,
      },
    };
  },
  created() {},

  methods: {
    listTour() {
      this.$router.push({ name: "ListTour" });
    },
  },
};
</script>
<style>
.w-100 {
  height: 500px;
}

.view-custom {
  height: 22rem !important;
}
.view-custom img {
  height: 22rem !important;
}
.whyChange {
  width: 20rem;
  height: 25rem;
  background-color: #f1f1f1;
  border-radius: 5px;
  margin-top: -1rem;
  margin-left: 26rem;
}
.img {
  margin-left: -21px;
  margin-top: -8px;
  width: 22rem;
  height: 26rem;
}

.why {
  margin-top: -16rem;
  margin-left: 4rem;
  position: absolute;
}
.halongCSS {
  margin-top: 20rem;
  margin-left: 44px;
  position: absolute;
  font-size: 15px;
}
.chauAuCSS {
  margin-top: -4rem;
  margin-left: -75px;
  position: absolute;
}
.img1 {
  margin-top: 0rem;
  margin-left: 5px;
  position: absolute;
}
.b {
  font-size: 25px;
  font-weight: bold;
}
.bSize {
  font-size: 14px;
  font-weight: bold;
}

.colorWord {
  font-size: 30px;
  color: #ff0000;
  font-weight: bold;
  font-style: italic;
}
</style>
