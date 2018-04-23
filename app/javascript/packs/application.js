import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import router from '../router';
import store from '../store';
import App from '../App';

Vue.use(BootstrapVue);

document.addEventListener('DOMContentLoaded', () => {
  const appElement = document.body.appendChild(document.createElement('app'))
  new Vue({
    el: appElement,
    router,
    store,
    render: h => h(App)
  });
})
