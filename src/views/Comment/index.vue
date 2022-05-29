<template>
  <div>
    <van-nav-bar
      title="评论"
      left-text="返回"
      left-arrow
      @click-left="$router.back()"
    />

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell title="item" v-for="obj in commentlist" :key="obj.commentId">
          <van-image
            slot="icon"
            round
            width="30"
            height="30"
            style="margin-right: 10px"
            :src="obj.user.avatarUrl"
          />
          <span style="color: #466b9d" slot="title">{{
            obj.user.nickname
          }}</span>
          <div slot="label">
            <p style="color: #363636">{{ obj.content }}</p>
            <p>
              <span style="margin-right: 10px">{{ obj.timeStr }}</span>
            </p>
          </div>
          <van-icon slot="right-icon" name="like-o" />
        </van-cell>
      </van-list>

    </van-pull-refresh>
  </div>
</template>

<script>
import { getCommentApi } from "@/api";
export default {
  data() {
    return {
      isLoading: false,
      commentlist: [],
      id: this.$route.query.id,
      loading:false,
      finished:false,
      page:1
    };
  },
  name: "MusicAppIndex",
  methods: {
    async getlist() {
      const res = await getCommentApi({
        id:this.id,
        limit:10,
        offset:(this.page - 1)*10
      });
      res.data.comments.forEach(obj => { this.commentlist.push(obj)
      });
      // this.commentlist = res.data.comments;
      this.isLoading = false;
      this.loading = false;

    },
    async onRefresh() {
      (this.commentlist = []), this.getlist(), (this.isLoading = false),
      this.page = 1
    },
    async onLoad(){
      this.getlist();
      this.page++;
    }
  },
};
</script>

<style  scoped>
</style>