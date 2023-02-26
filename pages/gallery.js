import Masthead from "@/components/Masthead/Masthead"
import Image from "next/image"

import { createClient } from 'contentful'

export async function getStaticProps ()
{
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'gallery' })

  return {
    props: {
      gallery: res.items,
       revalidate: 1
    }
  }
}

const galleryPage = ({ gallery }) =>
{
  console.log(gallery)
  return (
            <>
              <main className="blog">
                <div className="container">
                <h2 className="mt-5 mb-5">Gallery</h2>
                <div className="global__grid">
                    {gallery.map(info => (
                      <div key={ info.id} className="global__card">
                      <Image src={"https:" + info.fields.galleryImage.fields.file.url}  width={400} height={380} className="mt-3 mb-3 gallery__img" alt="gallery image" />
                        <h5>{info.fields.comment}</h5>
                      </div>
                      ))}
                  </div>
                </div>
              </main>
            </>
     )
}

export default galleryPage
