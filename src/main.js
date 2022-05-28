import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import { Search,Button,NavBar,Tabbar, TabbarItem,Col, Row,Image as VanImage,Cell, CellGroup,Icon} from 'vant';
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Icon);
Vue.use(Search);

// import { getSongByIdApi, getLyricByIdApi } from '@/api'
// async function myfun() {
//   const res = await getSongByIdApi(347231);
//   console.log(res);   
// }
// async function myfun1() {
//   const res = await getLyricByIdApi(347233);
//   console.log(res);   
// }
// myfun()
// myfun1()
// axio测试

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
