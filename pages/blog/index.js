import BlogCard from '@/components/Blog/BlogCard'
import Masthead from '@/components/Masthead/Masthead'
import React from 'react'

const blogIndexPage = () => {
  return (
    <>
      <Masthead />
      <main className="blog">
        <div className="container">
          <h2 className="mt-5">From the blog</h2>
          <BlogCard />
        </div>
      </main>
    </>
  )
}

export default blogIndexPage
