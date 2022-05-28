<template>
  <div>
    <van-nav-bar :title="layout_title" fixed />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <van-tabbar route>
      <van-tabbar-item replace to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "LayoutIndex",
  data() {
    return {
      layout_title: this.$route.meta.title,
    };
  },
  watch: {
    $route() {
      this.layout_title = this.$route.meta.title;
    }
  }
};
</script>

<style scoped>
</style>