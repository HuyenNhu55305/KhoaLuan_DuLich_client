<template>
  <div style="padding-left: 18px;">
    <mdb-container class="pt-4">
      <v-calendar
        :attributes="attrs"
        :columns="$screens({ default: 1, lg: 3 })"
        :rows="$screens({ default: 1, lg: 2 })"
        @dayclick="onDayClick"
      />
    </mdb-container>
    <notifications
      group="auth"
      position="bottom top right"
      closeOnClick
      class="my-custom-class"
    />
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      attrs: [],
      post: {
        tourName: null,
        startDate: null,
      },
    };
  },
  props: {
    tourName: String,
  },
  mounted() {
    this.getListTourTheSameDay();
  },

  methods: {
    onDayClick(day) {
      console.log(day.date);
      this.post.startDate = day.date;
      let uri = `${process.env.VUE_APP_PORT}/tours/name-date`;
      this.axios.post(uri, this.post).then((response) => {
        const idTour = response.data._id;
        if (idTour !== undefined) {
          this.detailPage(idTour);
        } else {
          this.clickTest('Không có tour trong ngày được chọn');
        }
      });
    },
    clickTest(text) {
      this.$notify({
        group: 'auth',
        text: text,
        type: 'error',
      });
    },
    detailPage(idTour) {
      this.$router.push({ name: 'TourDetail', params: { id: idTour } });
      this.$router.go(0);
    },
    getListTourTheSameDay() {
      this.post.tourName = this.tourName;
      let uri = `${process.env.VUE_APP_PORT}/tours/tour-name`;
      this.axios.post(uri, this.post).then((response) => {
        response.data.forEach((element) => {
          this.attrs.push({
            highlight: 'red',
            dates: new Date(element.startDate),
          });
        });
      });
    },

    formatDate(value) {
      return moment(value).format('MMMM DD YYYY');
    },
  },
};
</script>

<style lang="scss" scoped></style>
