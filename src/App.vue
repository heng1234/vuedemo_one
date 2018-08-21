<template>
  <div>
      <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
       <a><router-link :to="{path:'/goods'}">商品
        </router-link></a>
      </div>
      <div class="tab-item">
        <a><router-link :to="{path:'/ratings'}">评论
        </router-link></a>
      </div>
      <div class="tab-item">
      <a><router-link :to="{path:'/seller'}">商家
        </router-link></a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue';
  const ERR_OK = 0;
  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
         response = response.body;
         if (response.errno === ERR_OK) {
            this.seller = response.data;
          //  console.log(this.seller);
          }
      });
    },
     components: {
       'v-header': header
     }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  /*Flex布局*/
   .tab
     display:flex
     width: 100%
     height: 40px
     line-height: 40px
     border-1px(rgba(7,17,21,0.1))
     //border-bottom: 1px solid rgba(7,17,21,0.1)
     .tab-item
       flex: 1
       text-align :center
       & > a/* &表示父元素 > a表示父元素下面的a标签*/
         display block
         font-size 14px
         color rgb(77,85,93)
         .active
           color rgb(240,20,20)
</style>
