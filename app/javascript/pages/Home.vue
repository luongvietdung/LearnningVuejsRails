<template>
  <div>
    <Product :product="product" :key="product.name" v-for="product in products" />
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Product from '../components/products/Product';

  export default {
    computed: mapState({
      products: state => state.product.all
    }),
    data() {
      return {};
    },
    components: {
      Product
    },
    created() {
      this.$store.dispatch('product/getAllProducts')
    }
  };
</script>