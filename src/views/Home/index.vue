<template>
  <div class="main">
    <div class="header">推荐歌单</div>
    <van-row type="flex" justify="space-between" gutter="6">
      <van-col span="8" v-for="obj in resList" :key="obj.id">
        <van-image fit="contain" width="100" height="100" :src="obj.picUrl" />
        <p>{{ obj.name }}</p>
      </van-col>
    </van-row>

    <div class="header">最新音乐</div>
    <song-item :name="obj.name"  v-for="obj in newsongList" :key="obj.id"
    :author="obj.song.artists[0].name" :id="obj.id">
    </song-item>
    
  </div>
</template>

<script>
import { recommendMusicApi,newMusicApi } from "@/api";
import  SongItem  from "@/components/songItem.vue";
export default {
  name: "HomeIndex",
  data() {
    return {
      resList: [],
      newsongList: []
    }
  },
  async created() {
    const res = await recommendMusicApi({ limit: 6 });
    this.resList = res.data.result;
    const newSong = await newMusicApi();
    // console.log(newSong);
    this.newsongList = newSong.data.result;
  },

  components: {
    SongItem
  }

};
</script>

<style scoped>
.main {
  padding-top: 50px;
  padding-bottom: 50px;
}

.header {
  background-color: #4fc08d;
  margin: 5px 0;
}

p {
  width: "100";
  display: inline-block;
  margin: 0%;
  font-size: 0.32rem;
  text-overflow: ellipsis;
}
</style>