<template>
  <div class="product">
    <div class="img">
      <a href="#!">
        <img :src="product.imageUrl" />
      </a>
    </div>
    <div class="content">
      <a class="name" href="#!">{{product.name}}</a>
      <p class="price">
        <b>
          Rp. <vue-numeric :value="product.price" :read-only="true"></vue-numeric>
        </b>
      </p>
      <p class="stock text-right">
        <b>Stocks:</b>
        <span>
          &nbsp; {{ totalStock }} pcs
          </span>
      </p>
    </div>
    <Actions />
  </div>
</template>

<script>
  import Actions from './Actions';

  export default {
    props: {
      product: {
        type: Object
      }
    },
    components: {
      Actions
    },
    computed: {
      totalStock() {
        let total = 0
        this.product.stocks.forEach((item) => {
          total += item.stock
        });
        return total
      }
    }
  };
</script>