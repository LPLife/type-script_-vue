import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button, Select, Dialog } from 'element-ui';
Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Select);
Vue.use(Dialog);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
