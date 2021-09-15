<template>
  <div>
    <form @submit.prevent="changePassword">
      <div class="form-group">
        <label for="example1">
          Mật khẩu mới (<span style="color: red">*</span>)
        </label>
        <input
          type="text"
          id="password"
          placeholder="Nhập mật khẩu mới"
          class="form-control"
          v-model="ChangePass.password"
          :class="{
            'is-invalid': submitted && $v.ChangePass.password.$error,
          }"
        />
        <div
          v-if="submitted && !$v.ChangePass.password.required"
          class="invalid-feedback"
        >
          Không để trống mật khẩu mới
        </div>
      </div>
      <mdb-btn class="m-0" outline="success" style="width: 100%" type="submit">
        Lưu
      </mdb-btn>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  validations: {
    ChangePass: {
      password: { required },
    },
  },
  data() {
    return {
      submitted: false,
      ChangePass: {
        password: "",
       
      },
    };
  },
  mounted() {
    this.getToken();
  },
  methods: {
    getToken() {
      this.ChangePass.token = JSON.parse(localStorage.getItem("token"));
    },
    changePassword() {
      // validate
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      // ----------
      let uri = `${process.env.VUE_APP_PORT}/account/changePass`;
      this.axios.put(uri, this.ChangePass).then(() => {
        this.$emit("offModal");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>