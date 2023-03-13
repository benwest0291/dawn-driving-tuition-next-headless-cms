import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful'
import Image from "next/image"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import Link from "next/link"
import Spinner from "../../components/Spinner/Spinner"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blog'
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug
  })

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  return {
    props: {
      blog: items[0]
    },
    revalidate: 10
  }
}

const singleBlogPage = ({ blog }) => {

  if (!blog) return <Spinner errorMessage={"Loading"} />

  const { title, mainContent, featuredImage } = blog.fields

  return (
    <>
      <main className="container">
        <h2 className="mt-4 mb-3">{title}</h2>
        <div className="row">
          <div className="col-12 col-md-7">
            {documentToReactComponents(mainContent)}
            <div>
              <h5 className="mt-4">Share this article on </h5>
              <Link href="http://www.facebook.com"><FaFacebookSquare className="facebook__blog mt-1 mb-4" /></Link>
              <Link href="https://www.instagram.com"><FaInstagram className="instagram__blog mt-1 mb-4" /></Link>
            </div>
            <Image src="/DVSA.jpg" width={160} height={100} className="mt-1 mb-3" />
          </div>
          <div className="col-12 col-md-5">
            <Image
              alt="blog article image"
              src={'http:' + featuredImage.fields.file.url}
              width={600} height={500}
              className="mb-5 blog__image"
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default singleBlogPage
