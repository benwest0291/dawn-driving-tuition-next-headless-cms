import BlogCard from '@/components/Blog/BlogCard'
import { createClient } from 'contentful'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'blog' })

  return {
    props: { blog: res.items },
    revalidate: 10
  }
}

const blogIndexPage = ({ blog }) => {

  return (
    <>
      <main className="blog">
        <div className="container">
          <h2 className="mt-4 mb-4">From the blog</h2>
          <div className="global__grid">
            {blog.map(post => (
              <div key={post.sys.id} className="global__card mb-4">
                <BlogCard
                  post={post}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default blogIndexPage
