import { createClient } from 'contentful'
import Terms from '../components/terms';

export async function getStaticProps (){
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'termsAndConditionsPage' })

  return {
    props: { policy: res.items },
      revalidate: 10
    }
}




const policyPage = ({ policy }) =>{

  return (
    <section className="mt-5">
      <main className="container policy">
        {policy.map(info => (
          <Terms
              info={info}
          />
        ))}
      </main>
    </section>
  )
}

export default policyPage
