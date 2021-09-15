<template>
  <div>
    <nav-user></nav-user>
    <mdb-container>
      <nav-page class="mt-5 pt-5"></nav-page>
      <!-- step  -->
      <template>
        <ul class="progressbar">
          <li class="active">Thông tin liên lạc</li>
          <li>Gợi ý sản phẩm</li>
          <li>XÁC NHẬN BOOKING</li>
          <li>Thanh toán</li>
        </ul>
      </template>
      <!-- thông tin tour -->
      <div class="mt-5">
        <mdb-row style="background-color: #f1f1f1">
          <mdb-col col="5" class="pl-0">
            <template>
              <mdb-carousel
                slide
                :interval="8000"
                :items="items"
                indicators
                class="view-img-custom"
              ></mdb-carousel>
            </template>
          </mdb-col>
          <mdb-col col="7">
            <mdb-row class="mt-4">
              <mdb-col col="12">
                <mdb-row>
                  <mdb-col col="12">
                    <p class="tour-name">
                      {{ tour.tourName }}
                    </p>
                    <mdb-icon icon="barcode" class="mr-1 mb-1" />
                    <span class="tour-code"> {{ tour.tourId }} </span>
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
                <span class="text-monospace">
                  {{ tour.numberOfDays }} Ngày</span
                >
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
          </mdb-col>
        </mdb-row>
      </div>

      <!-- giá tour ca bản -->
      <div>
        <mdb-row class="mt-3">
          <mdb-col cols="12" class="pl-0 text-center">
            <p class="price-tour">Giá tour cơ bản</p>
          </mdb-col>
        </mdb-row>
        <mdb-tbl hover>
          <mdb-tbl-head>
            <tr>
              <th>#</th>
              <th>Người lớn (Từ 12 tuổi trở lên)</th>
              <th>Trẻ em (Từ 5 tuổi đến dưới 12 tuổi)</th>
              <th>Em bé (Dưới 5 tuổi)</th>
              <th>Phụ thu phòng đơn</th>
            </tr>
          </mdb-tbl-head>

          <mdb-tbl-body>
            <tr>
              <th>1</th>
              <td>{{ formatMoney(tour.priceDetail.adult) }}</td>
              <td>{{ formatMoney(tour.priceDetail.underTheAgeOfTwelve) }}</td>
              <td>{{ formatMoney(tour.priceDetail.underTheAgeOfFive) }}</td>
              <td>{{ formatMoney(tour.surcharge) }}</td>
            </tr>
          </mdb-tbl-body>
        </mdb-tbl>
      </div>
      <!-- thông tin liên lạc -->
      <form @submit="productSuggestion()">
        <div>
          <mdb-row class="mt-3">
            <mdb-col cols="12" class="pl-0 text-center">
              <p class="price-tour">Thông tin liên lạc</p>
            </mdb-col>
          </mdb-row>

          <mdb-row class="mt-3">
            <mdb-col cols="6">
              <div class="form-group font-weight-bold">
                <label for="example1"
                  >Họ tên (<span style="color: red">*</span>)</label
                >
                <input
                  type="text"
                  id="example1"
                  class="form-control form-control-lg"
                  v-model="user.fullName"
                  required="required"
                  @change="totalOfPeople()"
                />
              </div>
              <div class="form-group font-weight-bold">
                <label for="example1">
                  Di động (<span style="color: red">*</span>)
                </label>
                <input
                  type="number"
                  id="example1"
                  min="0"
                  class="form-control form-control-lg"
                  v-model="user.phone"
                  required="required"
                />
              </div>
              <div class="form-group font-weight-bold">
                <label for="example1">
                  Địa chỉ (<span style="color: red">*</span>)
                </label>
                <input
                  type="text"
                  id="example1"
                  class="form-control form-control-lg"
                  v-model="user.address"
                  required="required"
                />
              </div>
            </mdb-col>
            <mdb-col cols="6">
              <div class="form-group font-weight-bold">
                <label for="example1"
                  >Email (<span style="color: red">*</span>)</label
                >
                <input
                  type="email"
                  id="example1"
                  class="form-control form-control-lg"
                  @change="totalOfPeople()"
                  v-model="user.email"
                  required="required"
                />
              </div>
              <div class="form-group font-weight-bold">
                <label for="example1">Điện thoại </label>
                <input
                  type="number"
                  id="example1"
                  class="form-control form-control-lg"
                />
              </div>
              <mdb-row>
                <mdb-col cols="2">
                  <div class="form-group font-weight-bold">
                    <label for="example1"> Người lớn</label>
                    <input
                      type="number"
                      min="1"
                      :max="tour.numberTicket"
                      id="numberAdults"
                      ref="numberAdults"
                      class="form-control form-control-lg"
                      v-model="inforBook.numberAdults"
                      required="required"
                      @change="totalOfPeople()"
                    />
                  </div>
                </mdb-col>
                <mdb-col cols="2" class="pl-0">
                  <div class="form-group font-weight-bold">
                    <label for="example1"> Trẻ em </label>
                    <input
                      type="number"
                      id="example1"
                      class="form-control form-control-lg"
                      v-model="inforBook.numberChildren"
                      min="0"
                      required="required"
                      @change="totalOfPeople()"
                    />
                  </div>
                </mdb-col>
                <mdb-col cols="2" class="pl-0">
                  <div class="form-group font-weight-bold">
                    <label for="example1"> Em bé </label>
                    <input
                      type="number"
                      id="example1"
                      class="form-control form-control-lg"
                      min="0"
                      v-model="inforBook.numberYoung"
                      required="required"
                      @change="totalOfPeople()"
                    />
                  </div>
                </mdb-col>

                <mdb-col cols="2" class="pl-0">
                  <div class="form-group font-weight-bold">
                    <label for="example1">Số khách</label>
                    <input
                      type="number"
                      id="example1"
                      class="form-control form-control-lg"
                      v-model="inforBook.totalPeople"
                      readonly
                    />
                  </div>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>

          <!-- quy định tính tuổi  -->
          <mdb-row
            style="background-color: #f1f1f1"
            class="mt-4 border-left border-danger border-left-custom"
          >
            <mdb-col cols="6">
              <p class="mt-4 text-monospace">
                Người lớn sinh từ:
                <span class="font-weight-bold">20/04/1951</span> đến
                <span class="font-weight-bold">20/04/2009</span>
              </p>
              <p class="mt-4 text-monospace">
                Trẻ nhỏ sinh từ:
                <span class="font-weight-bold">21/04/2016</span> đến
                <span class="font-weight-bold">20/04/2019</span>
              </p>
            </mdb-col>
            <mdb-col cols="6">
              <p class="mt-4 text-monospace">
                Trẻ em sinh từ:
                <span class="font-weight-bold"> 21/04/2009</span> đến
                <span class="font-weight-bold">20/04/2016</span>
              </p>
              <p class="text-monospace">
                Em bé sinh từ:
                <span class="font-weight-bold">21/04/2019</span> đến
                <span class="font-weight-bold">14/04/2021</span>
              </p>
            </mdb-col>
          </mdb-row>
        </div>
        <!-- danh sách khách hàng  -->
        <div>
          <mdb-row class="mt-3">
            <mdb-col cols="12" class="pl-0 text-center">
              <p class="price-tour">Danh sách khách hàng</p>
            </mdb-col>
          </mdb-row>
          <mdb-tbl bordered>
            <!--Số người lớn  -->

            <mdb-tbl bordered v-for="(item, index) of inforAdults" :key="index">
              <tr style="background-color: #f1f1f1">
                <td class="font-weight-bold">Người lớn {{ index + 1 }}</td>
              </tr>
              <tr style="height: 4rem">
                <mdb-row>
                  <mdb-col class="ml-2">
                    <div class="form-group font-weight-bold">
                      <label for="example1">
                        Họ tên (<span style="color: red">*</span>)
                      </label>
                      <input
                        type="text"
                        id="example1"
                        class="form-control form-control-lg"
                        v-model="item.name"
                        required="required"
                        @change="totalOfPeople()"
                      />
                    </div>
                  </mdb-col>
                  <mdb-col>
                    <div class="form-group font-weight-bold">
                      <label for="example1">
                        Ngày sinh (<span style="color: red">*</span>)
                      </label>
                      <input
                        type="date"
                        id="example1"
                        class="form-control form-control-lg"
                        v-model="item.birthday"
                        required="required"
                      />
                    </div>
                  </mdb-col>
                  <mdb-col class="mr-2">
                    <div class="form-group font-weight-bold">
                      <label for="example1 ">
                        Giới tính (<span style="color: red">*</span>)
                      </label>
                      <select
                        class="browser-default custom-select"
                        style="height: 48px"
                        v-model="item.gender"
                        required="required"
                      >
                        <option selected value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                      </select>
                    </div>
                  </mdb-col>
                </mdb-row>
              </tr>

              <tr>
                <td class="text-right">
                  <span class="font-weight-bold" style="color: red">
                    {{ formatMoney(tour.priceDetail.adult) }}
                  </span>
                </td>
              </tr>
            </mdb-tbl>

            <!--Số trẻ em  -->
            <div v-if="inforBook.numberChildren >= 1">
              <mdb-tbl
                bordered
                v-for="(item, index) of inforChildren"
                :key="index"
              >
                <tr style="background-color: #f1f1f1">
                  <td class="font-weight-bold">Trẻ em {{ index + 1 }}</td>
                </tr>
                <tr style="height: 4rem">
                  <mdb-row>
                    <mdb-col class="ml-2">
                      <div class="form-group font-weight-bold">
                        <label for="example1">
                          Họ tên (<span style="color: red">*</span>)
                        </label>
                        <input
                          type="text"
                          id="example1"
                          class="form-control form-control-lg"
                          v-model="item.name"
                          required="required"
                        />
                      </div>
                    </mdb-col>
                    <mdb-col>
                      <div class="form-group font-weight-bold">
                        <label for="example1">
                          Ngày sinh (<span style="color: red">*</span>)
                        </label>
                        <input
                          type="date"
                          id="example1"
                          class="form-control form-control-lg"
                          v-model="item.birthday"
                          required="required"
                        />
                      </div>
                    </mdb-col>
                    <mdb-col class="mr-2">
                      <div class="form-group font-weight-bold">
                        <label for="example1 ">
                          Giới tính (<span style="color: red">*</span>)
                        </label>
                        <select
                          class="browser-default custom-select"
                          style="height: 48px"
                          v-model="item.gender"
                          required="required"
                        >
                          <option selected value="Nam">Nam</option>
                          <option value="Nữa">Nữ</option>
                        </select>
                      </div>
                    </mdb-col>
                  </mdb-row>
                </tr>
                <tr>
                  <td class="text-right">
                    <span class="font-weight-bold" style="color: red">
                      {{ formatMoney(tour.priceDetail.underTheAgeOfTwelve) }}
                    </span>
                  </td>
                </tr>
              </mdb-tbl>
            </div>

            <!-- Số em bé  -->
            <div v-if="inforBook.numberYoung >= 1">
              <mdb-tbl
                bordered
                v-for="(item, index) of inforYoung"
                :key="index"
              >
                <tr style="background-color: #f1f1f1">
                  <td class="font-weight-bold">Em bé {{ index + 1 }}</td>
                </tr>
                <tr style="height: 4rem">
                  <mdb-row>
                    <mdb-col class="ml-2">
                      <div class="form-group font-weight-bold">
                        <label for="example1">
                          Họ tên (<span style="color: red">*</span>)
                        </label>
                        <input
                          type="text"
                          id="example1"
                          class="form-control form-control-lg"
                          v-model="item.name"
                          required="required"
                        />
                      </div>
                    </mdb-col>
                    <mdb-col>
                      <div class="form-group font-weight-bold">
                        <label for="example1">
                          Ngày sinh (<span style="color: red">*</span>)
                        </label>
                        <input
                          type="date"
                          id="example1"
                          class="form-control form-control-lg"
                          v-model="item.birthday"
                          required="required"
                        />
                      </div>
                    </mdb-col>
                    <mdb-col class="mr-2">
                      <div class="form-group font-weight-bold">
                        <label for="example1 ">
                          Giới tính (<span style="color: red">*</span>)
                        </label>
                        <select
                          class="browser-default custom-select"
                          style="height: 48px"
                          v-model="item.gender"
                          required="required"
                        >
                          <option selected value="Nam">Nam</option>
                          <option value="Nữ">Nữ</option>
                        </select>
                      </div>
                    </mdb-col>
                  </mdb-row>
                </tr>
                <tr>
                  <td class="text-right">
                    <span class="font-weight-bold" style="color: red">
                      {{ formatMoney(tour.priceDetail.underTheAgeOfFive) }}
                    </span>
                  </td>
                </tr>
              </mdb-tbl>
            </div>

            <!-- Phụ thu  -->
            <mdb-tbl bordered>
              <tr style="background-color: #f1f1f1">
                <td class="font-weight-bold">Thuê thêm Phòng đơn</td>
              </tr>
              <tr style="height: 4rem">
                <mdb-row>
                  <mdb-col class="ml-2">
                    <div class="form-group font-weight-bold">
                      <label for="example1"> Số phòng </label>
                      <input
                        type="number"
                        id="example1"
                        class="form-control form-control-lg text-center"
                        min="0"
                        v-model="inforBook.numberClass"
                        required="required"
                        @mouseleave="totalOfPeople()"
                      />
                    </div>
                  </mdb-col>
                </mdb-row>
              </tr>
              <tr>
                <td class="text-right">
                  <span class="font-weight-bold" style="color: red">
                    {{ formatMoney(moneyRoom) }}
                  </span>
                </td>
              </tr>
            </mdb-tbl>

            <!-- Tổng tiền phải thanh toán  -->
            <tr>
              <td class="text-right">
                <span class="font-weight-bold" style="color: red">
                  Tổng tiền: {{ formatMoney(inforBook.totalMoney) }}
                </span>
              </td>
            </tr>
          </mdb-tbl>
        </div>

        <!-- lựa chọn thanh toán  -->
        <div>
          <mdb-row class="mt-3">
            <mdb-col cols="12" class="pl-0 text-center">
              <p class="price-tour">Xin quý khách chọn hình thức thanh toán</p>
            </mdb-col>
          </mdb-row>

          <mdb-row class="backgroup-color pt-4 pb-4">
            <mdb-col col="12">
              <!-- Group of default radios - option 1 -->
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="defaultGroupExample1"
                  name="groupOfDefaultRadios"
                  v-model="inforBook.payments"
                  value="TIỀN MẶT"
                />
                <label class="custom-control-label" for="defaultGroupExample1">
                  TIỀN MẶT
                </label>
              </div>
              <div v-if="inforBook.payments === 'TIỀN MẶT'">
                <p class="ml-4 mt-2">
                  Quý khách vui lòng thanh toán tại bất kỳ văn phòng Panda Fly
                  trên toàn quốc và các chi nhánh ngoài nước. Chi tiết Xin lưu
                  ý, Quý khách nên liên lạc trước khi đến để biết rõ hơn về giờ
                  làm việc và các hồ sơ cần chuẩn bị khi thanh toán.
                </p>
              </div>

              <!-- Group of default radios - option 2 -->
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="defaultGroupExample2"
                  name="groupOfDefaultRadios"
                  value="CHUYỂN KHOẢN"
                  v-model="inforBook.payments"
                />
                <label class="custom-control-label" for="defaultGroupExample2">
                  CHUYỂN KHOẢN
                </label>
              </div>
              <div v-if="inforBook.payments === 'CHUYỂN KHOẢN'">
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  class="ml-4 mt-2"
                >
                  <tbody>
                    <tr>
                      <td style="color: #fc3400">
                        <strong>PHƯƠNG THỨC THANH TOÁN CHUYỂN KHOẢN :</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p style="margin-left: 10px">
                          - Panda Fly chấp nhận thanh toán chuyển khoản từ ATM /
                          Internet Banking / Quầy giao dịch khách hàng
                        </p>
                        <p style="margin-left: 10px">
                          - Quý khách sau khi thực hiện việc chuyển khoản vui
                          lòng gửi email đến
                          <a href="#"> PandaFly@gmail.com </a>
                          hoặc gọi tổng đài 1900.1839 để được xác nhận từ công
                          ty chúng tôi.
                        </p>
                        <p style="margin-left: 10px">
                          - Panda Fly xin gửi thông tin chuyển khoản như bên
                          dưới để Quý khách thanh toán trước thời hạn ghi trên
                          Thông tin đặt tour. Sau thời gian trên nếu Quý khách
                          không chuyển khoản thanh toán, booking sẽ tự động huỷ
                          ra.
                        </p>
                        <p style="margin-left: 10px">
                          - Panda Fly sẽ không giải quyết các trường hợp booking
                          tự động hủy nếu quý khách không thực hiện đúng các
                          hướng dẫn trên.
                        </p>
                        <p style="margin-left: 10px">
                          <span style="color: #c00000"
                            >Tên Tài Khoản :
                            <strong
                              >Công ty CP Du lịch và Tiếp thị GTVT Việt Nam –
                              Panda Fly</strong
                            ></span
                          >
                        </p>
                        <p style="margin-left: 10px">
                          <span style="color: #c00000"
                            >Tên tài khoản viết tắt :
                            <strong>Panda Fly</strong></span
                          >
                        </p>
                        <p style="margin-left: 10px">
                          <span style="color: #c00000"
                            >Số Tài khoản :
                            <strong>007 100 115 1480</strong></span
                          >
                        </p>
                        <p style="margin-left: 10px">
                          <span style="color: #c00000"
                            >Ngân hàng :
                            <strong>Vietcombank – CN Tp.HCM</strong></span
                          >
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Group of default radios - option 3 -->
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="defaultGroupExample3"
                  name="groupOfDefaultRadios"
                  value="ATM/Internet Banking"
                  v-model="inforBook.payments"
                />
                <label class="custom-control-label" for="defaultGroupExample3">
                  ATM/Internet Banking</label
                >
              </div>
              <div v-if="inforBook.payments === 'ATM/Internet Banking'">
                <div
                  class="frame-cards conditionPament ml-4 mt-2"
                  id="conditionPament9"
                  style="display: block"
                >
                  <title></title>

                  <p align="left">
                    <strong>
                      <font color="#fc3400">
                        HÌNH THỨC THANH TOÁN BẰNG THẺ ATM/ INTERNET BANKING
                      </font>
                    </strong>
                  </p>
                  <p>
                    Panda Fly chấp nhận thanh toán bằng thẻ ATM qua cổng thanh
                    toán 123 pay.
                  </p>
                  <p>
                    Hãy đảm bảo bạn đang sử dụng thẻ ATM do ngân hàng trong nước
                    phát hành và đã được kích hoạt chức năng thanh toán trực
                    tuyến.
                  </p>
                  <p>
                    Hướng dẫn thanh toán thẻ qua cồng 123 pay :
                    <a
                      href="https://123pay.vn/info/huong-dan/huong-dan"
                      target="_blank"
                      >https://123pay.vn/info/huong-dan/huong-dan</a
                    >
                  </p>
                </div>
              </div>

              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="defaultGroupExample4"
                  name="groupOfDefaultRadios"
                  value="THANH TOÁN BẰNG THẺ TÍN DỤNG VÀ GHI NỢ QUỐC TẾ"
                  v-model="inforBook.payments"
                />
                <label class="custom-control-label" for="defaultGroupExample4">
                  THANH TOÁN BẰNG THẺ TÍN DỤNG VÀ GHI NỢ QUỐC TẾ
                </label>
              </div>
              <div
                v-if="
                  inforBook.payments ===
                  'THANH TOÁN BẰNG THẺ TÍN DỤNG VÀ GHI NỢ QUỐC TẾ'
                "
              >
                <div
                  class="frame-cards conditionPament ml-4 mt-2"
                  id="conditionPament15"
                  style=""
                >
                  <p>
                    <strong>
                      <font color="#fc3400">
                        THANH TOÁN BẰNG THẺ TÍN DỤNG VÀ GHI NỢ QUỐC TẾ
                      </font>
                    </strong>
                  </p>
                  <p>
                    <br />
                    Quý khách sử dụng Thẻ tín dụng hoặc Thẻ ghi nợ quốc tế được
                    phát hành bởi các Ngân hàng, Công ty tài chính và các tổ
                    chức thẻ quốc tế <b>Visa, MasterCard, JCB</b>. Giao dịch
                    thanh toán của quý khách được xử lý an toàn bởi CyberSource,
                    công ty con của tổ chức thẻ quốc tế VISA.<br />
                    <br />
                    CyberSource đạt chuẩn <b>PCI DSS</b> là một tiêu chuẩn an
                    ninh thông tin bắt buộc dành cho các doanh nghiệp lưu trữ,
                    truyền tải và xử lý thẻ thanh toán, được quản lý bởi Hội
                    đồng Tiêu chuẩn An toàn Ngành thanh toán thẻ
                    <b>PCI SSC</b> được thành lập bởi các tổ chức thẻ quốc tế.
                    Panda Fly sử dụng giao thức HTTPS (giao thức kết hợp giữa
                    giao thức HTTP và giao thức bảo mật SSL) cho toàn bộ
                    website, ứng dụng di động, cùng với CyberSource nhằm đảm bảo
                    thông tin thanh toán của Quý khách được mã hóa trong quá
                    trình truyền tải, xử lý thanh toán thẻ, ngăn cản sự xâm nhập
                    trái phép, giả mạo thông tin.<br />
                    <br />
                    Panda Fly phối hợp với các tổ chức thẻ triển khai thành công
                    dịch vụ xác thực chủ thẻ giao dịch trực tuyến
                    <b>3-D Secure</b> bao gồm:
                    <b>Verified by Visa, MasterCard SecureCode, J/Secure</b>
                    nhằm gia tăng bảo mật, hạn chế gian lận thanh toán thẻ trực
                    tuyến.<br />
                    <br />
                    Sau khi thanh toán thành công, Quý khách sẽ nhận được vé
                    điện tử qua email tự động, nhanh chóng và vẫn đảm bảo an
                    toàn tuyệt đối trong quá trình thanh toán.
                  </p>
                </div>
              </div>

              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  class="custom-control-input"
                  id="defaultGroupExample5"
                  name="groupOfDefaultRadios"
                  value="THANH TOÁN BẰNG THẺ TÍN DỤNG VÀ GHI NỢ QUỐC TẾ"
                  v-model="inforBook.payments"
                />
                <label class="custom-control-label" for="defaultGroupExample5">
                  Thanh toán quét mã QRCode
                </label>
              </div>
              <div
                v-if="
                  inforBook.payments ===
                  'THANH TOÁN BẰNG THẺ TÍN DỤNG VÀ GHI NỢ QUỐC TẾ'
                "
              >
                <div
                  class="frame-cards conditionPament ml-4 mt-2"
                  id="conditionPament16"
                  style="display: block"
                >
                  <div>&nbsp;</div>
                  <div>
                    Đây là cổng thanh toán cho phép Quý khách thanh toán từ tài
                    khoản ngân hàng thông qua hình thức quét mã QR trên tính
                    năng QR Pay trong ứng dụng Mobile Banking của các Ngân hàng.
                  </div>
                  <div>&nbsp;</div>
                  <div>
                    Sau khi Thông tin đặt tour của Quý khách được xác nhận, hệ
                    thống sẽ hiển thị mã QR để Quý khách dùng thiết bị di động
                    quét mã thanh toán.&nbsp;
                  </div>
                  <div>&nbsp;</div>
                </div>
              </div>
              <mdb-row class="mt-4 border-bottom"></mdb-row>
            </mdb-col>
          </mdb-row>
        </div>

        <!-- điều kiện đăng kí online  -->
        <div>
          <mdb-row class="mt-4">
            <mdb-col cols="12" class="pl-0 text-center">
              <p class="price-tour">ĐIỀU KIỆN KHI ĐĂNG KÝ ONLINE</p>
            </mdb-col>
          </mdb-row>

          <mdb-row class="mt-4">
            <mdb-col
              cols="12"
              class="pl-0 overflow-auto backgroup-color p-3"
              style="height: 190px"
            >
              <div class="rule-content">
                <p>
                  <strong
                    >ĐIỀU KIỆN BÁN VÉ CÁC CHƯƠNG TRÌNH DU LỊCH TRONG
                    NƯỚC</strong
                  >
                </p>
                <p>
                  <strong>I.&nbsp;&nbsp; GIÁ VÉ DU LỊCH</strong>
                </p>
                <p>
                  Giá vé du lịch được tính theo tiền Đồng (Việt Nam - VNĐ).
                  Trường hợp khách thanh toán bằng USD sẽ được quy đổi ra VNĐ
                  theo tỉ giá của ngân hàng Đầu Tư và Phát Triển Việt Nam - Chi
                  nhánh TP.HCM tại thời điểm thanh toán.
                </p>
                <p>
                  Giá vé chỉ bao gồm những khoản được liệt kê một cách rõ ràng
                  trong phần “Bao gồm” trong các chương trình du lịch. Panda Fly
                  không có nghĩa vụ thanh toán bất cứ chi phí nào không nằm
                  trong phần “Bao gồm”.
                </p>
                <p>
                  <strong>II.&nbsp;&nbsp; GIÁ DÀNH CHO TRẺ EM</strong>
                </p>
                <p>
                  - Trẻ em dưới 5 tuổi:&nbsp; không thu phí dịch vụ, bố mẹ tự lo
                  cho bé và thanh toán các chi phí phát sinh (đối với các dịch
                  vụ tính phí theo chiều cao…). Hai người lớn chỉ được kèm 1 trẻ
                  em dưới 5 tuổi, trẻ em thứ 2 sẽ đóng phí theo qui định dành
                  cho độ tuổi từ 5 đến dưới 12 tuổi và phụ thu phòng đơn. Vé máy
                  bay, tàu hỏa, phương tiện vận chuyển công cộng mua vé theo qui
                  định của các đơn vị vận chuyển (nếu có)
                </p>
                <p>
                  - Trẻ em từ 5 tuổi đến dưới 12 tuổi:&nbsp; 50% giá tour người
                  lớn đối với tuyến xe, 75% giá tour người lớn đối với tuyến có
                  vé máy bay (không có chế độ giường riêng). Hai người lớn chỉ
                  được kèm 1 trẻ em từ 5 - dưới 12 tuổi, em thứ hai trở lên phải
                  mua 1 suất giường đơn.
                </p>
                <p>- Trẻ em từ 12 tuổi trở lên: mua một vé như người lớn.</p>
                <p>
                  <strong
                    >III. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; THANH
                    TOÁN</strong
                  >
                </p>
                <p>
                  Khi thanh toán, Quý khách vui lòng cung cấp đầy đủ thông tin
                  và đặt cọc ít nhất 50% tổng số tiền tour để giữ chỗ, số tiền
                  còn lại Quý khách sẽ thanh toán trước ngày khởi hành 05 ngày
                  làm việc (tour ngày thường) và trước 10 ngày làm việc (tour
                  dịp Lễ, Tết)”.
                </p>
                <p>
                  Thanh toán bằng tiền mặt hoặc chuyển khoản tới tài khoản ngân
                  hàng của Panda Fly.
                </p>
                <p>
                  <span style="color: rgb(192, 0, 0)"
                    >Tên Tài Khoản :&nbsp;<strong
                      >Công ty CP Du lịch và Tiếp thị GTVT Việt Nam – Panda
                      Fly</strong
                    ></span
                  >
                </p>
                <p>
                  <span style="color: rgb(192, 0, 0)"
                    >Tên tài khoản viết tắt :&nbsp;<strong
                      >Panda Fly</strong
                    ></span
                  >
                </p>
                <p>
                  <span style="color: rgb(192, 0, 0)"
                    >Số Tài khoản :&nbsp;<strong>007 100 115 1480</strong></span
                  >
                </p>
                <p>
                  <span style="color: rgb(192, 0, 0)"
                    >Ngân hàng :&nbsp;<strong
                      >Vietcombank – CN Tp.HCM</strong
                    ></span
                  >
                </p>
                <p>
                  Việc thanh toán được xem là hoàn tất khi Panda Fly nhận được
                  đủ tiền vé du lịch trước lúc khởi hành hoặc theo hợp đồng thỏa
                  thuận giữa hai bên. Bất kỳ mọi sự thanh toán chậm trễ dẫn đến
                  việc hủy dịch vụ không thuộc trách nhiệm của Panda Fly.
                </p>
                <p>
                  Khách hàng có nhu cầu xuất hóa đơn, vui lòng cung cấp thông
                  tin xuất hóa đơn ngay tại thời điểm đăng ký. Panda Fly có
                  trách nhiệm xuất hóa đơn cho khách hàng trong vòng 7 ngày sau
                  khi tour kết thúc.
                </p>
                <p>
                  <strong
                    >DÀNH CHO KHÁCH HÀNG ĐĂNG KÝ TRÊN TRANG WWW.TRAVEL.COM.VN
                    THANH TOÁN CHUYỂN KHOẢN:</strong
                  >
                </p>
                <p>
                  Khi thực hiện việc chuyển khoản, Quý khách
                  <strong
                    >vui lòng ghi rõ Tên họ, Số điện thoại và Nội dung
                    chuyển</strong
                  >
                  cho chương trình du lịch cụ thể đã được Quý khách chọn đăng
                  ký. Sau khi thực hiện việc chuyển khoản, Quý khách vui lòng
                  gửi Ủy Nhiệm Chi về công ty Panda Fly theo địa chỉ email
                  sales@Panda Fly.com và liên hệ với nhân viên phụ trách tuyến
                  để nhận được Vé du lịch chính thức từ công ty Panda Fly. Panda
                  Fly sẽ không giải quyết các trường hợp hệ thống tự động hủy
                  phiếu đăng ký nếu Quý khách không thực hiện đúng qui định
                  trên.
                </p>
                <p>
                  <strong>IV.&nbsp;&nbsp; HỦY VÉ VÀ PHÍ HỦY VÉ DU LỊCH</strong>
                </p>
                <p>
                  <strong
                    >1.&nbsp;&nbsp; Trường hợp bị hủy bỏ do Panda Fly:</strong
                  >
                </p>
                <p>
                  Nếu Panda Fly không thực hiện được chuyến du lịch, Panda Fly
                  phải báo ngay cho khách hàng biết và thanh toán lại cho khách
                  hàng toàn bộ số tiền khách hàng đã đóng trong vòng 3 ngày kể
                  từ lúc việc thông báo hủy chuyến du lịch bằng tiền mặt hoặc
                  chuyển khoản.
                </p>
                <p>
                  <strong
                    >2.&nbsp;&nbsp; Trường hợp bị hủy bỏ do khách hàng:</strong
                  >
                </p>
                <p>
                  Sau khi đóng tiền, nếu Quý khách muốn chuyển/hủy tour xin vui
                  lòng mang Vé Du Lịch đến văn phòng đăng ký tour để làm thủ tục
                  chuyển/hủy tour và chịu mất phí theo quy định của Panda Fly.
                  Không giải quyết các trường hợp liên hệ chuyển/hủy tour qua
                  điện thoại.
                </p>
                <p>
                  <strong
                    >•&nbsp;&nbsp;&nbsp;&nbsp; Đối với ngày thường:</strong
                  >
                </p>
                <p>
                  -&nbsp;&nbsp; Được chuyển sang các tuyến du lịch khác trước
                  ngày khởi&nbsp; hành 20 ngày : Không mất chi phí.
                </p>
                <p>
                  -&nbsp;&nbsp; Hủy hoặc chuyển sang các chuyến du lịch khác
                  ngay sau khi đăng ký đến từ 15 - 19 ngày trước ngày khởi hành:
                  Chi phí chuyển/hủy tour: 50% tiền cọc tour.
                </p>
                <p>
                  <strong
                    >•&nbsp;&nbsp;&nbsp;&nbsp; Đối với ngày lễ, Tết:&nbsp;
                  </strong>
                </p>
                <p>
                  -&nbsp;&nbsp; Được chuyển sang các tuyến du lịch khác trước
                  ngày khởi &nbsp;hành 30 ngày : Không mất chi phí.
                </p>
                <p>
                  -&nbsp;&nbsp; Hủy hoặc chuyển sang các chuyến du lịch khác
                  ngay sau khi đăng ký đến từ 25 - 29 ngày trước ngày khởi hành:
                  Chi phí chuyển/hủy tour: 50% tiền cọc tour.
                </p>
                <p>
                  <strong
                    ><em
                      >* Các tour ngày Lễ, Tết là các tour có thời gian diễn ra
                      rơi vào một trong các ngày lễ, tết theo qui định.</em
                    ></strong
                  >
                </p>
                <p>
                  <strong
                    ><em
                      >* Thời gian hủy tour được tính cho ngày làm việc, không
                      tính thứ 7, Chủ Nhật và các ngày Lễ, Tết.</em
                    ></strong
                  >
                </p>
                <p>
                  <strong
                    >DÀNH CHO KHÁCH HÀNG ĐĂNG KÝ TRÊN TRANG WWW.TRAVEL.COM.VN
                    THANH TOÁN TRỰC TUYẾN:</strong
                  >
                </p>
                <p>
                  Khách hàng hủy Vé du lịch trong thời điểm ngày Thường và Lễ
                  Tết theo đúng những qui định trên, trong trường hợp khách
                  thanh toán trực tuyến, nếu hủy Vé du lịch khách hàng sẽ chịu
                  toàn bộ phí ngân hàng cho việc thanh toán tiền Vé du lịch.
                  Việc hoàn trả tiền cho khách sẽ được Panda Fly thực hiện ngay
                  sau khi ngân hàng thông báo tiền đã vào tài khoản của Panda
                  Fly.
                </p>
                <p>
                  <strong>3.&nbsp;&nbsp; Trường hợp bất khả kháng:</strong>
                </p>
                <p>
                  Nếu chương trình du lịch bị hủy bỏ hoặc thay đổi bởi một trong
                  hai bên vì một lý do bất khả kháng (hỏa hoạn, thời tiết, tai
                  nạn, thiên tai, chiến tranh, dịch bệnh, hoãn, dời, hủy chuyến
                  hoặc thay đổi khác của các phương tiện vận chuyển công cộng
                  hoặc các sự kiến bất khả kháng khác theo quy định pháp luật…),
                  thì hai bên sẽ không chịu bất kỳ nghĩa vụ bồi hoàn các tổn
                  thất đã xảy ra và không chịu bất kỳ trách nhiệm pháp lý nào.
                  Tuy nhiên mỗi bên có trách nhiệm cố gắng tối đa để giúp đỡ bên
                  bị thiệt hại nhằm giảm thiểu các tổn thất gây ra vì lý do bất
                  khả kháng. Thời gian hoàn tiền dịch vụ do hủy tour vì trường
                  hợp bất khả kháng sẽ được hoàn tất trong vòng 60 – 90 ngày phụ
                  thuộc điều kiện các đối tác cung ứng dịch vụ.
                </p>
                <p>
                  <strong
                    >4. &nbsp;&nbsp;&nbsp;Thay đổi lộ trình:&nbsp;
                  </strong>
                </p>
                <p>
                  Tùy theo tình hình thực tế, Panda Fly giữ quyền thay đổi lộ
                  trình, sắp xếp lại thứ tự các điểm tham quan hoặc hủy bỏ
                  chuyến đi du lịch bất cứ lúc nào mà Panda Fly thấy cần thiết
                  vì sự thuận tiện hoặc an toàn cho khách hàng.
                </p>
                <p>
                  <strong
                    >V.&nbsp;&nbsp; NHỮNG YÊU CẦU ĐẶC BIỆT TRONG CHUYẾN DU
                    LỊCH</strong
                  >
                </p>
                <p>
                  Các yêu cầu đặc biệt của Quý khách phải được báo trước cho
                  Panda Fly ngay tại thời điểm đăng ký. Panda Fly sẽ cố gắng đáp
                  ứng những yêu cầu này trong khả năng của mình song sẽ không
                  chịu trách nhiệm về bất kỳ sự từ chối cung cấp dịch vụ từ phía
                  các nhà vận chuyển, khách sạn, nhà hàng và các nhà cung cấp
                  dịch vụ độc lập khác.
                </p>
                <p>
                  <strong>VI.&nbsp;&nbsp; KHÁCH SẠN</strong>
                </p>
                <p>
                  Khách sạn được cung cấp trên cơ sở những phòng có hai giường
                  đơn (TWN) hoặc một giường đôi (DBL) tùy theo cơ cấu phòng của
                  các khách sạn. Khách sạn do Panda Fly đặt cho các chương trình
                  tham quan có tiêu chuẩn tương ứng với các mức giá vé mà khách
                  chọn khi đăng ký đi du lịch. Nếu cần thiết thay đổi về bất kỳ
                  lý do nào, khách sạn thay thế sẽ tương đương với tiêu chuẩn
                  của khách sạn ban đầu và sẽ được báo cho du khách trước khi
                  khởi hành. Những yêu cầu đặc biệt của khách hàng nếu thông báo
                  trước cho Panda Fly sẽ được đáp ứng tùy theo khả năng cung cấp
                  của khách sạn và khách hàng phải trả thêm tiền đối với các yêu
                  cầu này (nếu có). Panda Fly có quyền không đáp ứng những yêu
                  cầu này nếu khách sạn từ chối cung cấp dịch vụ. Thời gian nhận
                  phòng theo qui định tại các khách sạn là sau 14:00 và phải trả
                  phòng trước 12:00. Đối với các trường hợp khách lưu trú tại hệ
                  thống khách sạn/Resort 5 sao (Vinpearl, FLC, Grand Ho Tram
                  Strip…) tuân thủ theo điều kiện hủy phạt của khách sạn/Resort
                  cho từng thời điểm.
                </p>
                <p>
                  <strong>VII.&nbsp;&nbsp; VẬN CHUYỂN</strong>
                </p>
                <p>
                  Phương tiện vận chuyển tùy thuộc theo từng chương trình du
                  lịch.
                </p>
                <p>
                  Với chương trình đi bằng xe: xe máy lạnh (4, 7, 15, 25, 35, 45
                  chỗ) sẽ được Panda Fly sắp xếp tùy theo số lượng khách từng
                  đoàn, phục vụ suốt chương trình tham quan.
                </p>
                <p>
                  Với chương trình đi bằng xe lửa - máy bay - tàu cánh ngầm
                  (phương tiện vận chuyển công cộng), trong một số chương trình
                  các nhà cung cấp dịch vụ có thể thay đổi giờ khởi hành mà
                  không báo trước, việc thay đổi này sẽ được Panda Fly thông báo
                  cho khách hàng nếu thời gian cho phép.
                </p>
                <p>
                  Panda Fly không chịu trách nhiệm bồi hoàn và trách nhiệm pháp
                  lý với những thiệt hại về vật chất lẫn tinh thần do việc chậm
                  trễ, thay đổi giờ giấc khởi hành của các phương tiện vận
                  chuyển công cộng hoặc sự chậm trễ do chính hành khách gây ra.
                  Panda Fly chỉ thực hiện hành vi giúp đỡ để giảm bớt tổn thất
                  cho hành khách.
                </p>
                <p>
                  <strong>VIII.&nbsp;&nbsp; HÀNH LÝ</strong>
                </p>
                <p>
                  Hành lý gọn nhẹ, với các chương trình sử dụng dịch vụ hàng
                  không, hành lý miễn cước sẽ do các hãng hàng không qui định.
                  Panda Fly không chịu trách nhiệm về sự thất lạc, hư hỏng hành
                  lý hoặc bất kỳ vật dụng gì của du khách trong suốt chuyến đi,
                  du khách tự bảo quản hành lý của mình. Nếu khách hàng bị mất
                  hay thất lạc hành lý thì Panda Fly sẽ giúp hành khách liên lạc
                  và khai báo với các bộ phận liên quan truy tìm hành lý bị mất
                  hay thất lạc. Việc bồi thường hành lý bị mất hay thất lạc sẽ
                  theo qui định của các đơn vị cung cấp dịch vụ hoặc các đơn vị
                  bảo hiểm (nếu có).
                </p>
                <p>
                  <strong>IX.&nbsp;&nbsp; BẢO HIỂM DU LỊCH</strong>
                </p>
                <p>
                  Giá dịch vụ du lịch trọn gói đã bao gồm bảo hiểm du lịch trong
                  nước với mức đền bù cao nhất là 120.000.000đ/khách Việt Nam/vụ
                  cho nhân mạng và 12.000.000 VNĐ/khách Việt Nam/vụ cho hành lý
                  .
                </p>
                <p>
                  Điều kiện, điều khoản bảo hiểm: Theo quy tắc bảo hiểm khách du
                  lịch trong nước QĐ số: 001321/2006 – BM/BHCN.
                </p>
                <p>
                  Số hotline tư vấn về các điều kiện, điều khoản bảo hiểm 0938
                  30 1234
                </p>
                <p>
                  <strong>X.&nbsp;&nbsp;&nbsp; </strong>Trong quá trình thực
                  hiện, nếu xảy ra tranh chấp sẽ được giải quyết trên cơ sở
                  thương lượng trong thời hạn 30 ngày kể từ ngày một trong hai
                  bên đưa tranh chấp ra thương lượng. Hết thời hạn này nếu tranh
                  chấp không được giải quyết hoặc một trong hai bên không đồng ý
                  với kết quả thương lượng thì có quyền đưa tranh chấp ra giải
                  quyết tại Tòa án thẩm quyền.
                </p>
                <p>
                  <strong
                    ><em
                      >* Vé du lịch được xem như Hợp đồng lữ hành và được lập
                      thành 2 bản, mỗi bên giữ một bản, có giá trị như nhau.</em
                    ></strong
                  >
                </p>
                <p>&nbsp;</p>
              </div>
            </mdb-col>
          </mdb-row>

          <mdb-row class="mt-4">
            <mdb-col>
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="accept"
                  v-model="accept"
                />
                <label class="custom-control-label" for="accept">
                  Tôi đồng ý với các điều kiện trên
                </label>
              </div>
            </mdb-col>
          </mdb-row>
        </div>

        <!-- Button đặt tour  -->
        <mdb-row>
          <mdb-col class="text-center">
            <mdb-btn type="submit" color="danger">
              Đặt tour <mdb-icon icon="arrow-right" class="ml-1" />
            </mdb-btn>
          </mdb-col>
        </mdb-row>
      </form>

      <!-- thông báo  -->
      <notifications
        group="auth"
        position="bottom top right"
        closeOnClick
        class="my-custom-class"
      />
      <!-- các tour tương tự -->
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
      <FlashMessage></FlashMessage>
    </mdb-container>
    <footer-b></footer-b>
  </div>
</template>

<script>
import CardsTour from "../components/Cards-tour.vue";
import FooterB from "../components/FooterB.vue";
import NavPage from "../components/NavPage.vue";
import NavUser from "../components/NavUser.vue";
import moment from "moment";
export default {
  components: { NavUser, FooterB, NavPage, CardsTour },
  data() {
    return {
      items: [],
      moneyRoom: null,
      udAdults: 1,
      udChildren: 0,
      udYoung: 0,
      tour: {
        priceDetail: {
          adult: null,
        },
      },
      user: {
        fullName: null,
        email: null,
        phone: null,
        address: null,
      },
      inforBook: {
        numberAdults: 1,
        numberChildren: 0,
        numberYoung: 0,
        numberClass: 0,
        dateBook: null,
        payments: "CHUYỂN KHOẢN",
        totalMoney: null,
        bookId: null,
        totalPeople: 1,
      },
      inforAdults: [
        {
          name: "",
          birthday: "",
          gender: "",
          typeOfTicket: "Người lớn",
        },
      ],
      inforChildren: [],
      inforYoung: [],
      post: { token: null },
      accept: true,
    };
  },
  mounted() {
    this.findTour();
    this.sumTotalMoney();
    this.userLogin();
  },
  methods: {
    userLogin() {
      this.post.token = JSON.parse(localStorage.getItem("token"));
      if (this.post.token !== null) {
        let uri = `${process.env.VUE_APP_PORT}/account/profileByToken`;
        this.axios.post(uri, this.post).then((response) => {
          this.user = response.data;
        });
      }
    },
    // tổng tiền
    sumTotalMoney() {
      // tiền phụ thu phòng riêng
      this.moneyRoom =
        parseInt(this.inforBook.numberClass) * this.tour.surcharge;

      // tổng tiền khi mua vé
      this.inforBook.totalMoney =
        parseInt(this.inforBook.numberAdults) * this.tour.priceDetail.adult +
        parseInt(this.inforBook.numberChildren) *
          this.tour.priceDetail.underTheAgeOfTwelve +
        parseInt(this.inforBook.numberYoung) *
          this.tour.priceDetail.underTheAgeOfFive +
        parseInt(this.moneyRoom);
    },
    // danh sach thoong tin khach hang mua ves
    listInforCustomer() {
      // danh sách người lớn tham gia tour
      if (parseInt(this.inforBook.numberAdults) > this.udAdults) {
        let count = parseInt(this.inforBook.numberAdults) - this.udAdults;
        for (let i = 0; i < count; i++) {
          this.inforAdults.push({
            name: null,
            birthday: null,
            gender: null,
            typeOfTicket: "Người lớn",
          });
        }

        this.udAdults = parseInt(this.inforBook.numberAdults);
      } else {
        this.udAdults = parseInt(this.inforBook.numberAdults);
        this.inforAdults.length = parseInt(this.inforBook.numberAdults);
      }
      // danh sách trẻ em
      if (parseInt(this.inforBook.numberChildren) > this.udChildren) {
        let count = parseInt(this.inforBook.numberChildren) - this.udChildren;
        for (let i = 0; i < count; i++) {
          this.inforChildren.push({
            name: null,
            birthday: null,
            gender: null,
            typeOfTicket: "Trẻ em",
          });
        }

        this.udChildren = parseInt(this.inforBook.numberChildren);
      } else {
        this.udChildren = parseInt(this.inforBook.numberChildren);
        this.inforChildren.length = parseInt(this.inforBook.numberChildren);
      }

      // danh sách em bé

      if (parseInt(this.inforBook.numberYoung) > this.udYoung) {
        let count = parseInt(this.inforBook.numberYoung) - this.udYoung;
        for (let i = 0; i < count; i++) {
          this.inforYoung.push({
            name: null,
            birthday: null,
            gender: null,
            typeOfTicket: "Em bé",
          });
        }

        this.udYoung = parseInt(this.inforBook.numberYoung);
      } else {
        this.udYoung = parseInt(this.inforBook.numberYoung);
        this.inforYoung.length = parseInt(this.inforBook.numberYoung);
      }
    },
    // tổng số người
    totalOfPeople() {
      this.listInforCustomer();
      // tổng số  vé
      this.inforBook.totalPeople =
        parseInt(this.inforBook.numberAdults) +
        parseInt(this.inforBook.numberChildren) +
        parseInt(this.inforBook.numberYoung);

      // không mua vượt số vé còn trống
      if (this.inforBook.totalPeople <= this.tour.numberTicket) {
        this.sumTotalMoney();
      } else {
        this.notification();
        this.$refs.numberAdults.focus();
      }
    },

    // thông báo số vé không đủ số lượng để đăng ký
    notification() {
      this.flashMessage.error(
        {
          title: "Cảnh báo",
          message: `Số vé còn lại không đủ chỉ còn lại ${this.tour.numberTicket} vé`,
          icon: true,
        },
        { mounted: this.showText, destroyed: this.clearText }
      );
    },
    showText() {
      this.callbackText = "Hello from callback! FlashMessage is appear";
    },
    clearText() {
      this.callbackText = "My time has passed! I will disappear in 3 second...";
      setTimeout(() => (this.callbackText = ""), 1000);
    },
    // tìm tour được chọn theo ID
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
    // định dạng ngày
    formatDate(value) {
      return moment(value).format("MMMM-DD-YYYY");
    },
    // định dạng tiền
    formatMoney(money) {
      const formatter = new Intl.NumberFormat("vi", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(money);
    },
    formatDateMakeIDTouk(value) {
      return moment(value).format("MMMM-DD-YYYY-h-mm-ss");
    },

    notificationAcceptConditions() {
      this.flashMessage.error(
        {
          title: "Cảnh báo",
          message: `Bạn nên đọc điều kiện đăng ký online mà đồng ý trước khi tiếp tục`,
          icon: true,
        },
        { mounted: this.showText, destroyed: this.clearText }
      );
    },

    // đẩy dữ liệu vào giỏ hàng, chuyển trang gợi ý sản phẩm
    productSuggestion() {
      if (this.accept === true) {
        // random id booking tour
        const dateNow = new Date();
        this.inforBook.dateBook = dateNow;
        this.inforBook.bookId =
          this.tour.tourId.trim() + "-" + this.formatDateMakeIDTouk(dateNow);

        // thêm dữ liệu vào store

        this.$store.dispatch("addToTour", this.tour);
        this.$store.dispatch("addToUser", this.user);
        this.$store.dispatch("addTotAdults", this.inforAdults);
        this.$store.dispatch("addToChildren", this.inforChildren);
        this.$store.dispatch("addToYoung", this.inforYoung);
        this.$store.dispatch("addToBooking", this.inforBook);

        // chuyen trang
        this.$router.push({ name: "ProductSuggestion" });
      } else {
        this.notificationAcceptConditions();
      }
    },
    // set vị trí input
    setFocus() {
      this.form.email.focus();
    },
  },
};
</script>

<style lang="scss">
.border-bottom {
  border-width: 1px;
  border-bottom: 1px dashed #ccc;
}
.backgroup-color {
  background-color: #f1f1f1;
}

.view-img-custom {
  height: 22rem !important;
}
.view-img-custom img {
  height: 22rem !important;
}

.border-left-custom {
  border-left: 4px solid #dee2e6 !important;
}
.price-tour {
  color: #ff002d;
  font-weight: 600;
  font-size: 26.5px;
}
.progressbar {
  counter-reset: step;
  padding: 0;

  display: table;
  table-layout: fixed;
  width: 100%;
}

.progressbar li {
  list-style: none;
  position: relative;
  text-align: center;

  display: table-cell;
}

.progressbar li:before {
  background: #fff;
  border: 2px solid #bebebe;
  border-radius: 50%;
  color: #bebebe;
  content: counter(step);
  counter-increment: step;
  display: block;
  font-weight: 700;
  height: 30px;
  line-height: 27px;
  margin: 0 auto 10px;
  text-align: center;
  width: 30px;
}

.progressbar li:after {
  background: #979797;
  content: "";
  height: 3px;
  left: 50%;
  position: absolute;
  top: 15px;
  width: 100%;
  z-index: -1;
}

.progressbar li:last-child:after {
  content: none;
}

.progressbar li.complete:after {
  background: #3aac5d;
}

.progressbar li.active:before,
.progressbar li.complete:before {
  background: #3aac5d;
  border-color: #3aac5d;
  color: #fff;
}

.progressbar li.active {
  color: #3aac5d;
  font-weight: 700;
}

.progressbar li.complete {
  color: #333;
  font-weight: 700;
}
</style>
