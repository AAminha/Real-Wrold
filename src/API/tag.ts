import { GetTagResponse } from '@/types/tags'

import { client } from './client'

export const tagsAPI = {
  get: async () => {
    // Auth not required
    const response = await client.get<GetTagResponse>('/tags')
    return response.data
  },
}
