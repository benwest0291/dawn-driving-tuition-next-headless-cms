import Image from "next/image";
import Link from 'next/link'

const BlogCard = ({ post }) => {

  const { title, slug, thumbnail, blogDescription } = post.fields

  return (
    <div className="blog__card">
      <Image src={"https:" + thumbnail.fields.file.url} width={450} height={280} alt="blog image" className="mb-3 blog__card__image" />
      <div className="p-2">
        <h2>{title}</h2>
        <p className="mb-4">{blogDescription}</p>
        <Link className="btn__main" href={"/blog/" + slug}>View post</Link>
      </div>
    </div>
  )
}

export default BlogCard
