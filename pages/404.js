import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const notFoundPage = () => {

  const router = useRouter()

  useEffect(() => {
      setTimeout(() => {
        router.push('/')
      }, 4000);
  }, [])

  return (
     <div className="container mt-5 mb-5">
      <h2 className="mt-5 mb-5 not__found__heading">404</h2>
      <h2> Oopps.... sorry hat page cannot be found 🤔</h2>
      <p>Redirecting to <Link className=" not__found__heading__link" href="/">Homepage</Link> for more information 😀</p>
    </div>
  )
}

export default notFoundPage
