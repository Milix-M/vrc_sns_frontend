import axios from 'lib/axios'
import { NextRouter } from 'next/router'

const updateUserInfo = async (
  router: NextRouter,
  username: string,
  display_id?: string,
  profile?: string,
  date_of_birth?: string,
  updateOnly?: boolean,
) => {
  axios
    .patch('/api/users/me', {
      username,
      display_id,
      profile,
      date_of_birth,
    })
    .then(response => {
      if (updateOnly) {
        return
      }
      router.push('/home')
    })
    .catch(error => {
      //todo エラーが出た時の処理を書く
    })
}

export default updateUserInfo
