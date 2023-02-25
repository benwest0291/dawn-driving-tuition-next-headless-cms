import ContactForm from "@/components/ContactForm/ContactForm"
import Masthead from "@/components/Masthead/Masthead"
import { createClient } from 'contentful'
import Map from "@/components/Map/Map"

export async function getStaticProps ()
{
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'contactPage' })

  return {
    props: {
      contact: res.items,
       revalidate: 1
    }
  }
}

const contactPage = ( {contact} ) => {
  return (
       <>
          <main className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <h2 className="mt-5 mb-5">Area's covered</h2>
                  {contact.map(info => (
                    <p>{info.fields.textarea }</p>
                  ))}
                  <Map />
                </div>
                <div className="col-12 col-md-6">
                  <h2 className="mt-5 mb-5">Contact me </h2>
                    <ContactForm />
                </div>
              </div>
            </main>
       </>
  )
}

export default contactPage
