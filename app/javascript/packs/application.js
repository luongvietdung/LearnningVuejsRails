import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../assets/stylesheets/custom.scss';
import '../assets/stylesheets/ionicons.scss';
import BootstrapVue from 'bootstrap-vue'
import router from '../router';
import store from '../store';
import App from '../layouts/App';

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
