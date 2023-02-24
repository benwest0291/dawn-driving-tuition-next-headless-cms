import Image from "next/image";
import Link from 'next/link'

const BlogCard = () => {
  return (
    <div className="blog__card mt-5 mb-5">
      <Image src="/blog-img.png" width={290} height={290} className="mb-3" />
      <div className="p-2">
      <h2>Blog title</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
    </div>
  )
}

export default BlogCard
