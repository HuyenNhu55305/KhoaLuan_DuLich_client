<template>
  <div>
    <div>
      <form @submit.prevent="registerChangePass">
        <div class="form-group">
          <label for="example1">
            Nhập email (<span style="color: red">*</span>)
          </label>
          <input
            type="email"
            id="email"
            placeholder="Nhập email để nhân password mặc định"
            class="form-control"
            v-model="ChangePass.email"
            @change="sendEmailChangePass()"
            :class="{
              'is-invalid': submitted && $v.ChangePass.email.$error,
            }"
          />
          <div
            v-if="submitted && !$v.ChangePass.email.required"
            class="invalid-feedback"
          >
            Nhập mật khẩu mặc định hệ thống cung cấp qua email
          </div>
        </div>
        <div class="form-group">
          <label for="example1">
            Mật khẩu mặc định (<span style="color: red">*</span>)
          </label>
          <input
            type="text"
            id="checkPass"
            placeholder="Mật khẩu mặc định"
            class="form-control"
            v-model="ChangePass.checkPass"
            :class="{
              'is-invalid': submitted && $v.ChangePass.checkPass.$error,
            }"
          />
          <div
            v-if="submitted && !$v.ChangePass.checkPass.required"
            class="invalid-feedback"
          >
            Nhập mật khẩu mặc định hệ thống cung cấp qua email
          </div>
        </div>
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
        <mdb-btn outline="success" style="width: 100%" type="submit">
          Lưu
        </mdb-btn>
      </form>
    </div>
  </div>
</template>

<script>
import { required, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      modalChangePass: false,
      submitted: false,
      ChangePass: {
        email: "",
        password: "",
        checkPass: "",
        passdefaut: "pandafly123",
      },
    };
  },

  validations: {
    ChangePass: {
      email: { required },
      password: { required },
      passdefaut: { required },
      checkPass: { required, sameAsPassword: sameAs("passdefaut") },
    },
  },
  methods: {
    registerChangePass() {
      // validate
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      // ----------
      let uri = `${process.env.VUE_APP_PORT}/account/back-password`;
      this.axios.put(uri, this.ChangePass).then(() => {
        this.$emit("offModal");
      });
    },
    sendEmailChangePass() {
      let uri = `${process.env.VUE_APP_PORT}/sentEmail-changePass`;
      this.axios.post(uri, this.ChangePass).then(() => {
        this.$emit("notification");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>