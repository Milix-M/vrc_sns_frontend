import React from 'react'
import PostArea from '@/components/layouts/main/Post/PostArea'
import getLayout from '@/components/layouts/main'
import PostList from '@/components/layouts/main/Post/PostList'

const Home = () => (
  <div>
    <PostArea />
    <PostList />
  </div>
)

Home.getLayout = getLayout

export default Home
