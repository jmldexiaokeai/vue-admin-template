import request from '@/utils/request'

export default {
  getUserList(searchModel) {
    return request({
      url: '/user/list',
      method: 'get',
      params: { // 传给后端的参数，对应后端的 @RequestParam
        pageNo: searchModel.pageNo,
        pageSize: searchModel.pageSize,
        username: searchModel.username,
        phone: searchModel.phone
      }

    })
  },

  addUser(user) {
    return request({
      url: '/user',
      method: 'post',
      data: user // 传回后端的实体数据
    })
  },

  saveUser(user) {
    if (user.id == null || user.id === undefined) {
      return this.addUser(user)
    } else {
      return this.updateUser(user)
    }
  },

  updateUser(user) {
    return request({
      url: '/user',
      method: 'put',
      data: user
    })
  },

  getUserById(id) {
    return request({
      // url:'/user/' + id,   // 写法一
      url: `/user/${id}`, // 写法二 ，对应后端的 @PathVariable
      method: 'get'
    })
  },

  deleteUserById(id) {
    return request({
      url: `/user/${id}`, // 对应后端的 @PathVariable
      method: 'delete'
    })
  }

}
