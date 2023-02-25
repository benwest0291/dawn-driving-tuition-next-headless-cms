import Image from "next/image";
import Link from 'next/link'

const BlogCard = ({ post }) =>
{
  const { title, slug, thumbnail } = post.fields

  return (
    <div className="blog__card">
      <Image src={"https:" + thumbnail.fields.file.url} width={400} height={300} alt="blog image" className="mb-3" />
      <div className="p-2">
        <h2>{title}</h2>
        <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <Link href={"/blog/" + slug }>View post</Link>
      </div>
    </div>
  )
}

export default BlogCard
