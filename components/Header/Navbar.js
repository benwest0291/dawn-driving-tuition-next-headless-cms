import Image from "next/image";
import Link from 'next/link'
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";


const Navbar = () =>
{
  return (
    <nav className="nav">
      <div className="container">
        <div class="row">
            <div class="col-12 col-lg-6">
            <Image src="/logo.png" width={220} height={100} className="mt-3 mb-3" />
          </div>
          <div class="col-12 col-lg-6">
            <div className="d-flex justify-content-end">
               <FaFacebookSquare className="facebook mt-4" />
              <FaInstagram className="instagram mt-4" />
            </div>
             <ul className="d-flex justify-content-end nav__mobile">
              <li className="m-2"><Link href="/about">About</Link></li>
              <li className="m-2"><Link href="/gallery">Gallery</Link></li>
              <li className="m-2"><Link href="/blog">Blog</Link> </li>
              <li className="m-2"><Link href="/contact">Contact</Link> </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
