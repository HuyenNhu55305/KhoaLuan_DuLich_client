<template>
  <div>
    <mdb-row style="background-color: #e1e1e1; height: 55px;">
      <mdb-col col="12">
        <br />
        <span class="font-weight-bold ">Ý KIẾN KHÁCH HÀNG</span>
      </mdb-col>
    </mdb-row>
    <hr />
    <mdb-container>
      <form>
        <mdb-row class="mt-3">
          <mdb-col cols="12">
            <p class="form-title ">
              Gửi ý kiến
            </p>
          </mdb-col>
        </mdb-row>
        <mdb-row class="mt-3">
          <mdb-col cols="6">
            <div class="form-group">
              <label for="example1">Họ tên</label>
              <input
                type="text"
                id="example1"
                class="form-control form-control-lg"
              />
            </div>
          </mdb-col>
          <mdb-col cols="6">
            <div class="form-group">
              <label for="example1">Email</label>
              <input
                type="email"
                id="example1"
                class="form-control form-control-lg"
              />
            </div>
          </mdb-col>
        </mdb-row>
        <mdb-row class="mt-3">
          <mdb-col cols="12" class="p-0" style="background-color: white;">
            <vue-editor v-model="content"></vue-editor>
          </mdb-col>
        </mdb-row>
        <mdb-row class="m-3">
          <mdb-col col="12" class="text-center">
            <mdb-btn color="danger">Gửi</mdb-btn>
          </mdb-col>
        </mdb-row>
      </form>
    </mdb-container>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      content: null,
    };
  },
};
</script>

<style></style>
