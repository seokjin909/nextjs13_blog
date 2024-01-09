import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '@/service/posts'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "All Posts",
  description: '포스팅 관련 블로그 글',
}

async function Postspage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map(post=>post.category))]
  return (
    <FilterablePosts posts={posts} categories={categories} />
  )
}

export default Postspage