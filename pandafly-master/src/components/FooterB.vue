<template>
  <!-- Footer -->

  <mdb-footer color="" class="font-small background_color pt-4 mt-4">
    <mdb-container class="text-center text-md-left">
      <mdb-row class="my-4">
        <mdb-col md="4" lg="4">
          <h5 class="text-uppercase mb-4 font-weight-bold">
            Panda Fly Content
          </h5>
          <p>
            Người sống nhiều nhất
          </p>
          <p>
            Không phải là người sống lâu năm nhất
          </p>
          <p>Mà là người có nhiều trải nghiệm phong phú nhất</p>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="2" lg="2" class="ml-auto">
          <h5 class="text-uppercase mb-4 font-weight-bold">About</h5>
          <ul class="list-unstyled">
            <p><a href="#!">PROJECTS</a></p>
            <p><a href="#!">ABOUT US</a></p>
            <p><a href="#!">BLOG</a></p>
            <p><a href="#!">AWARDS</a></p>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="5" lg="3">
          <h5 class="text-uppercase mb-4 font-weight-bold">Lien Hệ</h5>
          <p>
            <mdb-icon icon="home" class="mr-3" /> Số 4 Bình Lợi Phường 13 Quận
            Bình Thạnh
          </p>
          <p><mdb-icon icon="envelope" class="mr-3" /> pandaFly@gmail.com</p>
          <p><mdb-icon icon="phone" class="mr-3" /> + 01 234 567 88</p>
          <p><mdb-icon icon="print" class="mr-3" /> + 01 234 567 89</p>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="2" lg="2" class="text-center">
          <h5 class="text-uppercase mb-4 font-weight-bold">About</h5>
          <div class="mt-2 ">
            <a type="button" class="btn-floating btn-small btn-fb">
              <mdb-icon fab icon="facebook" />
            </a>
            <a type="button" class="btn-floating btn-small btn-tw">
              <mdb-icon fab icon="twitter" />
            </a>
            <a type="button" class="btn-floating btn-small btn-gplus">
              <mdb-icon fab icon="google-plus" />
            </a>
            <a type="button" class="btn-floating btn-small btn-dribbble">
              <mdb-icon fab icon="dribbble" />
            </a>
          </div>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright:
        <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';
export default {
  name: 'FooterPage',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
  },
};
</script>
<style>
.background_color {
  background-color: #0a0c10 !important;
}
</style>
