import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful'
import Image from "next/image"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";



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

export async function getStaticProps ({ params }) {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug' : params.slug
  })

  return {
    props: {
      blog: items[ 0 ]},
       revalidate: 1
  }
}

const singleBlogPage = ({ blog }) =>{

  const { title, mainContent, featuredImage } = blog.fields

  return (
      <>
      <main className="container">
        <h2 className="mt-5 mb-5">{title}</h2>
         <div className="row">
          <div className="col-12 col-md-6">
            {documentToReactComponents(mainContent)}
            <div>
            <h5 className="mt-4">Share this article on </h5>
            <FaFacebookSquare className="facebook__blog mt-1 mb-4" />
            <FaInstagram className="instagram__blog mt-1 mb-4" />
            </div>
            <Image src="/DVSA.png" width={300} height={30} className="mt-1 mb-3" />
          </div>
          <div className="col-12 col-md-6">
            <Image
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

export default  singleBlogPage
