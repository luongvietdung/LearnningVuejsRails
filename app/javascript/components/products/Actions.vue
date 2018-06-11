<template>
  <div class="actions">
    <div class="row">
      <div class="col-sm-7">
        <button class="btn love">
          <i class="ion-ios-heart" />
          <span class="ml-small">Like</span>
        </button>

        <div class="psr dib">
          <button class="btn share ml-small" @click="toggleShare">
            <i class="ion-android-share-alt" />
            <span class="ml-small">Share</span>
          </button>
          <div class="share-list animated bounceIn" v-if="showShareList"
            v-click-outside:delay="toggleShare">
            <a class="twitter"
              href="http://twitter.com/home?status=Check the Vue Mini Shop Out! It's either example App, built with Vue js https://bosnaufal.github.io/vue-mini-shop #vuejs #javascript #rails">
              <i class="ion-social-twitter" />
              <span>Twitter</span>
            </a>
            <a href="http://www.facebook.com/share.php?u=https://bosnaufal.github.io/vue-mini-shop">
              <i class="ion-social-facebook" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-5 text-right">
        <button class="psr btn buy">Add To Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
  import ClickOutside from 'vue-click-outside'

  export default {
    data: function() {
      return {
        showShareList: false
      }
    },
    methods: {
      toggleShare: function() {
        this.showShareList = !this.showShareList;
      }
    },
    directives: {
      ClickOutside
    }
  };
</script>
