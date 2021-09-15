<template>
  <div>
    <template v-for="tour in items.slice(0, numberTour)">
      <mdb-card :key="tour._id" style="width: 331px;float: left;" class="m-3">
        <div v-on:click="detail(tour._id)">
          <mdb-card-image
            :src="tour.listImage[2]"
            alt="Card image cap"
            class="custom-img"
          ></mdb-card-image>
          <mdb-card-body class="pb-0">
            <mdb-card-title class="text-truncate" style="max-width: 300px;">
              {{ tour.tourName }}
            </mdb-card-title>
            <mdb-card-text>
              <hr />

              <mdb-row>
                <mdb-col col="2">
                  <mdb-icon icon="map-marked-alt"> </mdb-icon>
                </mdb-col>
                <mdb-col col="4" class="pl-0">
                  <span> Nơi khởi hành:</span>
                </mdb-col>
                <mdb-col col="6" class="pl-0">
                  <span> {{ tour.startPlace }} </span>
                </mdb-col>
              </mdb-row>

              <mdb-row>
                <mdb-col col="2">
                  <mdb-icon icon="hiking"> </mdb-icon>
                </mdb-col>
                <mdb-col col="4" class="pl-0">
                  <span> Số vé:</span>
                </mdb-col>
                <mdb-col col="6" class="pl-0">
                  <span> {{ tour.numberTicket }} vé </span>
                </mdb-col>
              </mdb-row>

              <mdb-row class="mb-1">
                <mdb-col col="2">
                  <mdb-icon icon="calendar-alt"> </mdb-icon>
                </mdb-col>
                <mdb-col col="4" class="pl-0">
                  <span> {{ formatDate(tour.startDate) }}</span>
                </mdb-col>
                <mdb-col col="6" class="pl-0">
                  <span> {{ tour.numberOfDays }} ngày </span>
                </mdb-col>
              </mdb-row>

              <mdb-row class="">
                <mdb-col col="12">
                  <mdb-rating v-model="value" />
                </mdb-col>
              </mdb-row>
            </mdb-card-text>
            <div class="price" style="width: 12rem;">
              <p class="card-price">
                {{ formatMony(tour.priceDetail.adult) }}
              </p>
            </div>
          </mdb-card-body>
        </div>
      </mdb-card>
    </template>
  </div>
</template>

<script>
import { mdbCard, mdbCardText, mdbCardBody, mdbRating } from 'mdbvue';
import moment from 'moment';

export default {
  name: 'CarouselPage',
  components: {
    mdbCard,
    mdbCardText,
    mdbCardBody,
    mdbRating,
  },
  props: {
    numberTour: Number,
  },

  data() {
    return {
      value: 2,
      items: [],
    };
  },
  mounted() {
    this.getAllTour();
  },

  methods: {
    formatMony(money) {
      const formatter = new Intl.NumberFormat('vi', {
        style: 'currency',
        currency: 'VND',
      });
      return formatter.format(money);
    },
    getAllTour() {
      let uri = `${process.env.VUE_APP_PORT}/tours`;
      this.axios.get(uri, this.ticket).then((response) => {
        this.items = response.data;
      });
    },

    formatDate(value) {
      return moment(value).format('MMMM DD YYYY');
    },
    detail(idTour) {
      this.$router.push({ name: 'TourDetail', params: { id: idTour } });
      this.$router.go(0);
    },
  },
};
</script>
<style>
.custom-img img {
  height: 201px;
  width: 367px;
}
.price {
  margin-top: -212px;
  margin-left: -39px;
  position: absolute;
}
.card-price {
  display: inline-block;

  width: auto;
  height: 38px;

  background-color: #f50505;
  -webkit-border-radius: 3px 4px 4px 3px;
  -moz-border-radius: 3px 4px 4px 3px;
  border-radius: 3px 4px 4px 3px;

  border-left: 1px solid #f50505;

  /* This makes room for the triangle */
  margin-left: 19px;

  position: relative;

  color: white;
  font-weight: 300;
  font-size: 22px;
  line-height: 38px;

  padding: 0 10px 0 10px;
}

/* Makes the triangle */
.card-price:before {
  content: '';
  position: absolute;
  display: block;
  left: -19px;
  width: 0;
  height: 0;
  border-top: 19px solid transparent;
  border-bottom: 19px solid transparent;
  border-right: 19px solid #f50505;
}

/* Makes the circle */
.card-price:after {
  content: '';
  background-color: white;
  border-radius: 50%;
  width: 4px;
  height: 4px;
  display: block;
  position: absolute;
  left: -9px;
  top: 17px;
}
.rating-icon {
  margin-left: 35px;
}
</style>
