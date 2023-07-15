/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchBlog } from './fetchBlog'


export const getBlogAsync = createAppAsyncThunk(
  'blog/fetchBlog',
  async () => {
    const response = await fetchBlog()

    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)


