import Axios from 'axios'

const axios = Axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT as string,
  headers: {
    'Content-Type': 'application/json'
  }
})

let isRefreshing = false
let refreshPromise: Promise<unknown> | null = null

const refreshAccessToken = async () => {
  if (!isRefreshing) {
    isRefreshing = true
    refreshPromise = axios
      .post('/api/token/refresh', {})
      .then(responce => {
        // リフレッシュトークンが正常に取得された場合の処理をここに追加
        isRefreshing = false
        return responce
      })
      .catch(error => {
        isRefreshing = false
        if (error?.responce?.status === 401) {
          window.location.href = '/'
        }
        throw error
      })
  }
}

axios.interceptors.response.use(
  response => response,
  async error => {
    if (
      error?.response?.status === 401 &&
      error.config.url !== '/api/token/refresh'
    ) {
      try {
        await refreshAccessToken()
        // もとのリクエストを再試行
        return await axios.request(error.config)
      } catch (refreshError) {
        // リフレッシュトークンの取得に失敗した場合のエラーハンドリング
        window.location.href = '/'
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  }
)
axios.interceptors.request.use(config => config)

export default axios
