import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from '../components/goods/goods';
import ratings from '../components/ratings/ratings';
import seller from '../components/seller/seller';
Vue.use(VueRouter);
Vue.use(VueResource);
export default new VueRouter({
  /* 去除# */
  mode: 'history',
  /* 设置router-link的class */
  linkActiveClass: 'active',
  routes: [
    /* 默认页面 */
    {path: '/',
      component: goods
    },
    {path: '/goods',
      component: goods
    },
    {path: '/ratings',
      component: ratings
    },
    {path: '/seller',
      component: seller
    }
  ]

});
