import request from '@/utils/request'
export const LoginMusic = (data) => request({
  url:`/login`,
  data,
  method:'post'
})