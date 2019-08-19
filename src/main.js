import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

//Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle,
    faExclamationCircle, faArrowUp, faAngleRight, faAngleLeft, faAngleDown, faAngleUp,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faSearch, faShoppingCart,
    faSortDown, faSortUp, faMobileAlt
} from "@fortawesome/free-solid-svg-icons";
import { faWeixin, faQq, faWeibo, faBattleNet } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle,
    faExclamationCircle, faArrowUp, faAngleRight, faAngleLeft, faAngleDown, faAngleUp,
    faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faSearch, faShoppingCart,
    faSortDown, faSortUp, faMobileAlt
);
library.add(faWeixin, faQq, faWeibo, faBattleNet)
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
