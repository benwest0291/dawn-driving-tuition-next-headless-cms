import { FaFacebookSquare, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import BaseFoorer from './BaseFooter'
import Image from "next/image";
import Link from 'next/link'


const Footer = () =>
{

  return (
    <footer className="footer">
        <div className="container">
           <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                  <Image src="/logo.jpeg" width={220} height={100} className="mt-3 mb-3" alt="logo"/>
                   <ul>
                      <li className="mb-4"><FaPhoneAlt className="phone__logo" /> 07980413955  </li>
                      <li className="mb-4"><AiOutlineMail className="mail__logo"/>   dawn@dawndriving.co.uk</li>
                      <li className="footer__terms"><Link href="/policy">Terms and conditions</Link></li>
                  </ul>
                </div>

                <div className="col-12 col-md-6 col-lg-3 footer__responsive__lg">
                    <h2>From the blog</h2>
                     <ul className="mt-4">
                        <li><Link href="" >Blog title</Link></li>
                        <li><Link href="" >Blog title</Link></li>
                        <li><Link href="" >Blog title</Link></li>
                    </ul>
                </div>

                <div className="col-12 col-md-6 col-lg-3 footer__responsive__lg">
                    <h2>Infomation</h2>
                    <ul className="mt-4">
                        <li><Link href="/#about" >About</Link></li>
                        <li><Link href="/gallery" >Gallery </Link></li>
                        <li><Link href="/contact" >Contact</Link></li>
                    </ul>
                </div>

                <div className="col-12 col-md-6 col-lg-3 footer__responsive__lg">
                  <h2>My Socials</h2>
                  <FaFacebookSquare className="facebook mt-4" />
                  <FaInstagram className="instagram mt-4" />
                </div>

              </div>
            </div>
          <BaseFoorer />
        </footer>
  )
}

export default Footer
