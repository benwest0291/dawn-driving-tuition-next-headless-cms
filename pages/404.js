import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Spinner from "../components/Spinner/Spinner"

const notFoundPage = () => {

  const router = useRouter()

  useEffect(() => {
      setTimeout(() => {
        router.push('/')
      }, 4000);
  }, [])

  return (
     <div className="container mt-5 mb-5">
        <p className="not__found__heading mt-5 mb-5 text-center">404</p>
           <p className="h2 text-center"> Oopps.... sorry hat page cannot be found 🤔</p>
          <Spinner
            errorMessage={"Redirecting to homepage"}
          />
    </div>
  )
}

export default notFoundPage
