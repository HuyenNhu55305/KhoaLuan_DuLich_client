<template>
  <div>
    <mdb-row style="background-color: #e1e1e1; height: 55px;">
      <mdb-col col="12">
        <br />
        <span class="font-weight-bold ">CHI TIẾT TOUR</span>
      </mdb-col>
    </mdb-row>
    <mdb-container>
      <mdb-row class="mt-3">
        <mdb-col cols="12">
          <p class="form-title ">
            Thông tin chuyến bay
          </p>
          <mdb-tbl bordered class="m-2 text-monospace">
            <mdb-tbl-body>
              <tr>
                <td>Ngày đi: {{ formatDate(tour.startDate) }} 13:40</td>
                <td>Đến: {{ formatDate(tour.startDate) }} 14:45</td>
                <td>Chuyến bay: VU358</td>
              </tr>
              <tr>
                <td>Ngày về: {{ formatDate(tour.endDate) }} 15:30</td>
                <td>Đến: {{ formatDate(tour.endDate) }} 16:55</td>
                <td>Chuyến bay: VU359</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>
      </mdb-row>
      <mdb-row class="mt-3">
        <mdb-col cols="12">
          <p class="form-title ">
            Thông tin khách sạn
          </p>
          <mdb-tbl bordered class="m-2 text-monospace">
            <mdb-tbl-body>
              <tr>
                <td>Đang cập nhật</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>
      </mdb-row>
      <mdb-row class="mt-3">
        <mdb-col cols="12">
          <p class="form-title ">
            Hướng dẫn viên du lịch
          </p>
          <mdb-tbl bordered class="m-2 text-monospace">
            <mdb-tbl-head color="light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Mã NV</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Giới tính</th>
                <th scope="col">Email</th>
              </tr>
            </mdb-tbl-head>

            <mdb-tbl-body>
              <tr>
                <th scope="col">1</th>
                <td>{{ tour.employee.employeeId }}</td>
                <td>{{ tour.employee.fullName }}</td>
                <td>{{ tour.employee.gender }}</td>
                <td>{{ tour.employee.email }}</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>
      </mdb-row>
      <mdb-row class="mt-3">
        <mdb-col cols="12">
          <p class="form-title ">
            Thông tin tập trung
          </p>
          <mdb-tbl bordered class="m-2">
            <mdb-tbl-body class="text-monospace">
              <tr>
                <td>Ngày tập trung</td>
                <td>Nơi tập trung</td>
              </tr>
              <tr>
                <td>{{ formatDate(tour.startDate) }} 11:40</td>
                <td>{{ tour.startPlace }}</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>
      </mdb-row>
      <mdb-row class="mt-3">
        <mdb-col cols="12">
          <p class="form-title ">
            Giá tour & phụ thu phòng đơn
          </p>
          <mdb-tbl bordered class="m-2 text-monospace">
            <mdb-tbl-head color="light">
              <tr>
                <th scope="col">Loại khách</th>
                <th scope="col">Giá tour</th>
                <th scope="col">Land tour</th>
              </tr>
            </mdb-tbl-head>

            <mdb-tbl-body>
              <tr>
                <td>Người lớn (Từ 12 tuổi trở lên)</td>
                <td>{{ formatMoney(tour.priceDetail.adult) }}</td>
                <td>{{ formatMoney(0) }}</td>
              </tr>
              <tr>
                <td>Trẻ em (Từ 5 tuổi đến dưới 12 tuổi)</td>
                <td>{{ formatMoney(tour.priceDetail.underTheAgeOfTwelve) }}</td>
                <td>{{ formatMoney(0) }}</td>
              </tr>

              <tr>
                <td>Em bé (Dưới 2 tuổi)</td>
                <td>{{ formatMoney(tour.priceDetail.underTheAgeOfFive) }}</td>

                <td>{{ formatMoney(0) }}</td>
              </tr>
              <tr style=" color: red;">
                <td>Phụ thu phòng đơn</td>
                <td>{{ formatMoney(tour.surcharge) }}</td>
                <td>{{ formatMoney(0) }}</td>
              </tr>
            </mdb-tbl-body>
          </mdb-tbl>
        </mdb-col>
      </mdb-row>
      <mdb-row class="mt-3">
        <mdb-col cols="12">
          <p class="form-title ">
            Ghi chú
          </p>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    tour: Object,
  },
  methods: {
    // định dạng ngày
    formatDate(value) {
      return moment(value).format('MMMM-DD-YYYY');
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
.form-title {
  color: #ff002d;
  font-weight: 600;
  font-size: 19.5px;
}
</style>
