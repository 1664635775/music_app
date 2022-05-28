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

// import { searchMusicApi } from "@/api";
// async function myfun() {
//   const res = await searchMusicApi({keywords:'海阔天空'});
//   console.log(res);   
// }
// myfun()
// axio测试

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
