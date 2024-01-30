import axios from 'lib/axios'
import { NextRouter } from 'next/router'

const updateUserInfo = async (
  router: NextRouter,
  username: string,
  userid: string
) => {
  axios
    .patch('/api/users/me', {
      username,
      userid
    })
    .then(response => {
      router.push('/home')
    })
    .catch(error => {
      //todo エラーが出た時の処理を書く
    })
}

export default updateUserInfo
