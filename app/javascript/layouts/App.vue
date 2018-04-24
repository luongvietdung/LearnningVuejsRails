<template>
  <div id="app">
    <Header />
    <div class='main-wrapper'>
      <div class='container-mini'>
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from './Header';
  import Footer from './Footer';
  export default {
    components: {
      Header,
      Footer
    }
  };
</script>
