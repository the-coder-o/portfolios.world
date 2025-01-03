import { get } from 'lodash'
import Cookies from 'js-cookie'
import { useQuery } from '@tanstack/react-query'

import { GetPortfolios } from '../services/api'

import { getPortfolios } from './adapter'

export const useGetPortfoliosList = () => {
  const initialData = {
    data: getPortfolios(),
  }
  const token = Cookies.get('access_token')

  const { data = initialData, ...args } = useQuery({
    queryKey: ['portfolio_list', token],
    queryFn: () => GetPortfolios(),
    select: (data) => ({
      data: getPortfolios(get(data, 'data.data')),
    }),
  })

  return {
    ...data,
    ...args,
  }
}
