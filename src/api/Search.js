import request from '@/utils/request'
export const searchMusic = (params) =>request({ 
  url:'/search',
  params
})
export const daySong = (params) => request({
  url:'/personalized/newsong',
  params
})