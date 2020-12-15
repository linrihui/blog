import request from '@/utils/request'

export default {
  test() {
    return request({ // Promise
      url: '/test', //  /dev-api/test
      method: 'post',
      data:{
        "name":'test'
      }
    })
  }
}
