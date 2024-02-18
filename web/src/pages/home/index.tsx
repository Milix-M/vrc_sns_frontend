import React from 'react'
import PostArea from '@/components/layouts/main/Post/PostArea'
import getLayout from '@/components/layouts/main'
import PostList from '@/components/layouts/main/Post/PostList'

const Home = () => (
  <div className='border-x dark:border-slate-600/80'>
    <div className='p-2 border-b dark:border-slate-700/70'>
      <h1 className='text-center'>ホーム</h1>
    </div>
    <PostArea />
    <PostList />
  </div>
)

Home.getLayout = getLayout

export default Home
