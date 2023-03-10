import { FaFacebookSquare, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import BaseFoorer from './BaseFooter'
import Image from "next/image";
import Link from 'next/link'


const Footer = () => {

  return (
    <footer className="footer">
        <div className="container p-2 p-3">
           <div className="row">
              <div className="col-12 col-md-4 al">
                  <Image alt="Dawn driving tuition logo" src="/logo.svg" width={180} height={100} className="mt-3 mb-3"/>
                   <ul>
                      <li className="mb-1"><FaPhoneAlt className="phone__logo" /><span className="footer__contact">07980413955</span></li>
                      <li className="mb-4"><FaEnvelope className="mail__logo"/> <span className="footer__contact-email">dawn@dawndriving.co.uk</span></li>
                      <li className="footer__terms"><Link className="footer__links" href="/policy">Terms and conditions</Link></li>
                  </ul>

                </div>
                <div className="col-12 col-md-4 footer__responsive__lg">
                    <h2>Infomation</h2>
                    <ul className="mt-4">
                        <li className="mb-1"><Link className="footer__links"  href="/#about" >About</Link></li>
                        <li className="mb-1"><Link className="footer__links"  href="/gallery" >Gallery </Link></li>
                        <li className="mb-1"><Link className="footer__links"  href="/contact" >Contact</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 footer__responsive__lg">
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
