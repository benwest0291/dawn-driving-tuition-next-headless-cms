import Image from "next/image";
import Link from 'next/link'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {

  return (
    <nav className="nav">
      <div className="container">
        <div className="row">
            <div className="col-12 col-lg-6">
            <Link href="/"><Image src="/logo.jpeg" width={220} height={100} className="mt-4 mb-3" /></Link>
          </div>
          <div className="col-12 col-lg-6 nav__mobile">
            <div className="d-flex justify-content-end">
              <FaFacebookSquare className="facebook mt-4" />
              <FaInstagram className="instagram mt-4" />
            </div>
             <ul className="d-flex justify-content-end">
              <li className="nav__link m-2"><Link href="/#about">About</Link></li>
              <li className="nav__link  m-2"><Link href="/gallery">Gallery</Link></li>
              <li className="nav__link  m-2"><Link href="/blog">Blog</Link> </li>
              <li className="nav__link m-2"><Link href="/contact">Contact</Link> </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
