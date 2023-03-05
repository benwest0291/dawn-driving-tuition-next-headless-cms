import Masthead from '@/components/Masthead/Masthead'
import Text from '@/components/Text/Text'
import ImagePartial from '@/components/Image/ImagePartial'
import Strapline from '../components/Strapline/Strapline'
import InfoCard from '@/components/InfoCard/InfoCard'

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
          <main>
            <div className="container mt-5 mb-5" id="about">
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
          </div>
              <Strapline
                text={ "Book your first driving lessions today" }
               />
          <div className="container">
              <div className="global__grid">
                  <InfoCard
                    heading={"Are you a beginner?"}
                    infomation={"My lessions are designed to ensure you become a safe and confident driver"}
                  />
                  <InfoCard
                    heading={"Failed driving test?"}
                    infomation={"I will help you figure out what went wrong the first time around"}
                  />
                  <InfoCard
                    heading={"Need a Refresher?"}
                    infomation={"At Dawns driving tuition my refersher courses cover a wide rangle of driving situations"}
                  />
          </div>
        </div>
        </main>
        </>
      )
  }
