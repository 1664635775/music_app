import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import {List,PullRefresh, Search,Button,NavBar,Tabbar, TabbarItem,Col, Row,Image as VanImage,Cell, CellGroup,Icon} from 'vant';
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
Vue.use(PullRefresh);
Vue.use(List);

import { LoginMusicApi } from '@/api'
// import { getCommentApi } from '@/api'
async function myfun() {
  const res = await LoginMusicApi({
    email:'sowegn2941@163.com',
    password:'20011031Czczcz'
  });
  console.log(res);   
}
myfun()
// async function myfun1() {
//   const res = await getCommentApi(347233);
//   console.log(res);   
// }
// myfun1()
// axio测试

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
