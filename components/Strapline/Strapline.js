import React from 'react'
import Link from 'next/link'

const Strapline = ({text}) => {
  return (
    <section className="strapline">
      <h2 className="mb-5"> { text }</h2>
      <Link href="/contact"><button className="btn__main">Get in contact</button></Link>
    </section>
  )
}

export default Strapline
