import request from '@/utils/request'
export const searchMusic = (params) =>request({ 
  url:'/search',
  params
})