import Image from "next/image";
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const BlogCard = ({ post }) =>
{
  const { title, slug, thumbnail, blogDescription } = post.fields

  return (
    <div className="blog__card">
      <Image src={"https:" + thumbnail.fields.file.url} width={400} height={360} alt="blog image" className="mb-3" />
      <div className="p-2">
        <h2>{title}</h2>
        <p className="mb-4">{ blogDescription }</p>
        <Link href={"/blog/" + slug }>View post</Link>
      </div>
    </div>
  )
}

export default BlogCard
