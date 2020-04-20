<template>
  <div class='MainTabBar'>
     <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="@assets/img\tabbar\home.svg" alt="">
        <img slot="item-icon-red" src="@assets/img\tabbar\home_active.svg" alt="">
        <div slot="item-text" class="tab-bar-item">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="@assets/img\tabbar\shopcart.svg" alt="">
        <img slot="item-icon-red" src="@assets/img\tabbar\shopcart_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" >
        <img slot="item-icon" src="@assets/img\tabbar\category.svg" alt="">
        <img slot="item-icon-red" src="@assets/img\tabbar\category_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="@assets/img\tabbar\profile.svg" alt="">
        <img slot="item-icon-red" src="@assets/img\tabbar\profile_active.svg" alt="">
        <div slot="item-text">我的</div></tab-bar-item>    
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@components/common/tabbar/tabBar'
import TabBarItem from '@components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  data(){
    return {}
  },
  components: {
    TabBar,
    TabBarItem,
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
</style>
