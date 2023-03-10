import Image from "next/image";
import Link from 'next/link'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import Hamburger from 'hamburger-react'

const Navbar = () => {

  const [ isOpen, setOpen ] = useState(false)

  function navBar() {
    setOpen(isOpen => !isOpen)
  }

  let toggleMenu = isOpen ? 'active' : ' '

  return (
    <nav className="nav">
      <div className="container">
        <div className="row">
            <div className="col-12 col-lg-6 d-flex justify-content-between">
            <Link href=" / "><Image alt="Dawn driving tuition logo" src="/logo.png" width={180} height={90} className="mt-4 mb-3" /></Link>
            <Hamburger onClick={ navBar } className="hamburger" toggled={isOpen} toggle={setOpen} />
          </div>
          <div className="">
            <div className="d-flex justify-content-end socials__nav">
              <FaFacebookSquare className="facebook mt-4" />
              <FaInstagram className="instagram mt-4" />
            </div>
            <ul className={ `nav__bar ${toggleMenu}`}>
              <li onClick={ navBar }  className="nav__link m-2"><Link href="/#about">About</Link></li>
              <li onClick={ navBar }  className="nav__link  m-2"><Link href="/gallery">Gallery</Link></li>
              <li onClick={ navBar }  className="nav__link  m-2"><Link href="/blog">Blog</Link> </li>
              <li onClick={ navBar }  className="nav__link m-2"><Link href="/contact">Contact</Link> </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
