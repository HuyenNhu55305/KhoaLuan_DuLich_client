<template>
  <div>
    <template v-for="product in items.slice(0, number)">
      <mdb-card
        :key="product._id"
        style="width: 20rem;float: left;"
        class="m-3"
      >
        <mdb-card-image
          :src="product.image"
          alt="Card image cap"
          class="imgProduct"
        ></mdb-card-image>
        <mdb-card-body>
          <mdb-card-title class="text-truncate" style="max-width: 300px;">
            {{ product.productName }}</mdb-card-title
          >
          <mdb-card-text>
            Loại hình: {{ product.typesOftourism[1] }}
          </mdb-card-text>
        </mdb-card-body>
        <mdb-card-footer color="white" textColor="black" class="px-1">
          <span
            class="float-left font-weight-bold ml-3"
            style="margin-top: 15px; color: red"
          >
            <strong>{{ formatMoney(product.price) }}</strong>
          </span>
          <span class="float-right">
            <mdb-btn style="bottom" flat @click="addCart(product)">
              <mdb-icon size="lg" class="black-text" icon="shopping-cart" />
            </mdb-btn>

            <a class="active">
              <mdb-icon
                slot="reference"
                icon="heart"
                class="ml-1 mr-4"
              ></mdb-icon>
            </a>
          </span>
        </mdb-card-footer>
      </mdb-card>
    </template>
  </div>
</template>

<script>
import { mdbCard, mdbCardText, mdbCardBody } from 'mdbvue';
export default {
  components: {
    mdbCard,
    mdbCardText,
    mdbCardBody,
  },
  props: {
    typeTravel: Object,
  },
  data() {
    return {
      items: [],
      number: null,

      post: {
        typesOftourism: null,
      },
    };
  },
  mounted() {
    this.getListProduct();
  },
  methods: {
    addCart(product) {
      product.quantity = 1;
      this.$store.dispatch('addToCart', product);
    },
    getListProduct() {
      // lấy loại tour để gợi ý sản phẩm

      this.post.typesOftourism = this.typeTravel.type;
      this.number = this.typeTravel.numberProduct;
      // gọi API get list sản phẩm

      let uri = `${process.env.VUE_APP_PORT}/productByType`;
      this.axios.post(uri, this.post).then((response) => {
        this.items = response.data;
      });
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
.btn {
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.imgProduct img {
  height: 166px;
}
</style>
