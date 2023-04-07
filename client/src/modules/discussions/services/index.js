import axios from 'axios';


const _instance = axios.create({
  baseURL: 'http://localhost:5000/api/',
  timeout: 1000
})


export const getCommentsApi = async () => {
  return await _instance.get('comments')
}

export const createCommentApi = async ({ text }) => {
  return await _instance.post('comments', { text: text })
}

export const updateCommentApi = async ({ commentId, obj }) => {
  return await _instance.patch(`comments/${commentId}`, obj)
}
export const getUserApi = async ({ phone, password }) => {
  return await _instance.post('auth/login', { phone: phone, password: password })
}
