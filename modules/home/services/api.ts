import http from '@/services/api'

export const GetAllUsers = async () => {
  return await http.get('/profile/all')
}
