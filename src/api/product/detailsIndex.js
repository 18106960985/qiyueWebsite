import request from '@/utils/request'
import { API_ADMIN , API_AUTH } from '@/utils/lib/CommonConstant';



const  API =API_ADMIN +"productDetails/";



export function page(query){
  return request({
    url: API +"page",
    method: "get",
    params: query
  })
}

export function getProductList(id){
  return request({
    url: API +"getProductList",
    method: "get",
    params:{id:id}
  })
}


export function addObj(obj) {
  return request({
    url: API,
    method: 'post',
    data: obj
  });
}

export function getObj(id) {
  return request({
    url: API+ id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: API + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return request({
    url:API + id,
    method: 'put',
    data: obj
  })
}

