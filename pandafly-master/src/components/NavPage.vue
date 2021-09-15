<template>
  <div>
    <mdb-row class="mb-4">
      <mdb-col col="4">
        <img
          src="../assets/logo_v2.png"
          class="img-fluid logo"
          style="height: 101px;"
          v-on:click="home()"
        />
      </mdb-col>
      <mdb-col col="8">
        <mdb-navbar class="mb-3 pr-0 box-shadow">
          <mdb-navbar-nav right style="height: 40px;">
            <mdb-nav-item href="#" class="mr-4 font-weight-bold ">
              Du lịch
            </mdb-nav-item>
            <mdb-nav-item href="#" class="mr-4 font-weight-bold ">
              Tin tức
            </mdb-nav-item>
            <mdb-nav-item href="#" class="mr-4  font-weight-bold">
              Khuyễn mãi
            </mdb-nav-item>
            <mdb-nav-item href="#" class="font-weight-bold"
              >Liên hệ</mdb-nav-item
            >
          </mdb-navbar-nav>
        </mdb-navbar></mdb-col
      >
    </mdb-row>
  </div>
</template>

<script>
import { mdbNavbar, mdbNavbarNav } from 'mdbvue';
export default {
  name: 'NavbarPage',
  components: {
    mdbNavbar,
    mdbNavbarNav,
  },
  methods: {
    home() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style>
.box-shadow {
  box-shadow: none !important;
}
.logo {
  margin-top: -22px;
  margin-left: -20px;
  position: absolute;
}
</style>
