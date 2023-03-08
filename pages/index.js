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
      revalidate: 10
    }
  }
}

export default function HomePage ({ home }) {

  return (
            <>
              {home.map(info => (
                <Masthead
                    key={ info.sys.id }
                    info={info}
                 />
              ))}
              <main>
                <div className="container mt-5 mb-5" id="about">
                    <div className="row flip">
                        <div className="col-12 col-lg-7">
                          {home.map(info => (
                            <Text
                              key={ info.sys.id }
                              info={info}
                              />
                          ))}
                        </div>
                        <div className="col-12 col-lg-5">
                          {home.map(info => (
                           <ImagePartial
                              key={info.sys.id}
                              info={info}
                            />
                          ))}
                        </div>
                   </div>
              </div>
        </main>
    </>
  )
}
