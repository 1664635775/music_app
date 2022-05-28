<template>
  <div class="main">
    <!-- 搜索框 -->
    <van-search background="#4fc08d" shape="round" v-model="searchValue" placeholder="请输入搜索关键词" input-align="left" />

    <!-- 热搜标签 -->
    <div class="li_song" v-if="this.songlist.length === 0">
      <p>实时热搜</p>
      <ul>
        <li class="hot_item" v-for="obj in daysonglist" :key="obj.id" v-on:click="onsearch(obj.name)">{{obj.name}}</li>
      </ul>
    </div>

    <!-- 搜索结果 -->
    <div class="song" v-else>
      <p>最佳匹配</p>
      <van-cell :title="obj.name" center  :label="obj.artists[0].name" v-for="obj in songlist" :key="obj.id">
        <template #right-icon>
          <van-icon name="play-circle-o" />
        </template>
      </van-cell>
    </div>

  </div>
</template>

<script>
import { searchMusicApi,newMusicApi } from '@/api';

export default {
  name: "SearchIndex",
  data() {
    return {
      searchValue: '',
      songlist: [],
      daysonglist:[],
      timer: null
    };
  },

  async created(){
    const res = await newMusicApi()
    this.daysonglist = res.data.result;
  },

  methods:{
    async onsearch(val) {
      this.searchValue = val
      const res = await searchMusicApi({keywords: this.searchValue})
      this.songlist = res.data.result.songs
      setTimeout(() => {
        clearTimeout(this.timer)
      });
    }
  },

  watch: {
    async searchValue(){
      clearTimeout(this.timer)
      if(this.searchValue.length === 0){
        return this.songlist = []
      }
      this.timer = setTimeout(async () => {
      const res = await searchMusicApi({keywords: this.searchValue})
      this.songlist = res.data.result.songs
      }, 2000);
    }
  }
};
</script>

<style scoped>
.main {
  padding-top: 50px;
  padding-bottom: 50px;
}

.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  border-color: #a8a8ab;
  border-radius: 0.853333rem;
  border: 1px solid #b4b3b3;
}
</style>