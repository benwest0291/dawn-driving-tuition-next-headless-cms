import Masthead from '@/components/Masthead/Masthead'
import Text from '@/components/Text/Text'
import ImagePartial from '@/components/Image/ImagePartial'

import { createClient } from 'contentful'

export async function getStaticProps (){
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'homePage' })

  return {
    props: {
      home: res.items,
      revalidate: 1
    }
  }
}

export default function HomePage ({ home }) {

  return (
    <>
      {home.map(info => (

        <Masthead
            key={info.id}
            info={info}
             />
          ))}

            <main className="container mt-5 mb-5" id="about">
              <div className="row flip">
                {home.map(info => (
                <div key={ info.id } className="col-12 col-lg-6">
                    <Text
                      info={info}
                    />
                </div>
                ))}

                  {home.map(info => (
                <div key={info.id} className="col-12 col-lg-6">
                      <ImagePartial
                        info={info}
                      />
                    </div>
                  ))}

              </div>
            </main>
        </>
      )
  }
