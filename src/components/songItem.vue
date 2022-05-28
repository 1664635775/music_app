<template>
  <div>
    <van-cell :title="name" center :label="author">
      <template #right-icon>
        <van-icon name="play-circle-o" @touchstart="playMusic" size="1.6rem"/>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'MusicAppSongItem',
  props:{
    name: String,
    author: String,
    id: Number,
  },
  methods:{
    playMusic(){
      this.$router.push({
        path:'/play',
        query:{
          id: this.id
        }
      })
    }
  }
};
</script>

<style scoped>
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>