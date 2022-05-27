<template>
  <div class="main">
    <van-search background="#4fc08d" shape="round" v-model="value" placeholder="请输入搜索关键词" input-align="left"
      @search="onSearch" />
    <p>最佳匹配</p>
    <van-cell :title="obj.name"  center v-for="obj in songlist" :key="obj.id">
      <template #right-icon>
        <van-icon name="play-circle-o" />
      </template>
    </van-cell>

  </div>
</template>

<script>
import { Toast } from 'vant';
import searchMusicApi from '@/api'
export default {
  name: "SearchIndex",
  data() {
    return {
      value: '海阔天空',
      songlist: []
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    }
  },
   async create() {
    const res =await searchMusicApi({keywords:this.value});
    this.songlist = res.data.result.songs;
  }
};
</script>

<style scoped>
.main {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>