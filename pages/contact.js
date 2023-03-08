import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from "@/components/ContactForm/ContactForm"
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
      revalidate: 10
    }
  }
}

const contactPage = ({ contact }) => {

  return (
       <>
          <main className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <h2 className="mt-5 mb-5">Area's covered</h2>
                  {contact.map(info => (
                    <p key={info.sys.id }>{info.fields.textarea }</p>
                  ))}
                   <div className="contacts">
                      <p><FaPhoneAlt className="phone__contact" /><span className="p-3">07980413955</span></p>
                      <p className="mb-4"><FaEnvelope className="mail__contact" /><span className="p-3">dawn@dawndriving.co.uk</span></p>
                  </div>
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
