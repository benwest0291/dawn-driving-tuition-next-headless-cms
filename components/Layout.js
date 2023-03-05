import Header from './Header/Header'
import Footer from './Footer/Footer'
import Head from 'next/head'

const Layout = ({ children }) => {

  return (
    <>
      <Header />
        <Head>
            <title>Dawn Driving Tuition</title>
            <meta name="description" content="Female Driving Instructor, Individually Tailored Driving Lessons for pupils of all ages and abilities" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="format-detection" content="telephone=no"></meta>
            <link rel="icon" href="/lplate.png" />
          </Head>
          <main className="main__content">
            { children }
          </main>
      <Footer />
    </>
  )
}

export default Layout
