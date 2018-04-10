import request from 'axios'
import { API_ADMIN , API_AUTH } from '@/utils/lib/CommonConstant';



const  API =API_ADMIN +"information/";


export function page(query) {
  return request({
    url: API + '/page',
    method: 'get',
    params: query
  });
}

export function getRecommends() {
  return request({
    url: API + 'recommends',
    method: 'get'
  });

}

export function getObj(id) {

  return request({
    url: API+id,
    method: 'get'
  })

}


export function getAll() {
  return request({
    url: API+"all",
    method: 'get'
  })

}



