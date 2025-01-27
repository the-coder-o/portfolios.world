import { get } from 'lodash'
import Cookies from 'js-cookie'
import { useQuery } from '@tanstack/react-query'

import { GetAllUsers } from '@/modules/home/services/api'
import { getUserProfiles } from '@/modules/home/hooks/adapter'

export const useGetAllUsers = () => {
  const initialData = {
    data: getUserProfiles(),
  }
  const token = Cookies.get('access_token')

  const { data = initialData, ...args } = useQuery({
    queryKey: ['users', token],
    queryFn: () => GetAllUsers(),
    select: (data) => ({
      data: getUserProfiles(get(data, 'data.data')),
    }),
  })

  return {
    ...data,
    ...args,
  }
}
