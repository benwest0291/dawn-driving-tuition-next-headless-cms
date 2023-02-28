import Image from "next/image";
import Link from 'next/link'

const Masthead = ({ info }) => {

  const { mastheadTitle, mastheadText, mastheadImage } = info.fields

  return (
      <section className="masthead">
        <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="masthead__text">
                    <h2>{ mastheadTitle } </h2>
                    <p>{ mastheadText }</p>
                    <Link className="masthead__btn" href="/#about">About</Link>
                    <Link className="masthead__btn"  href="/contact">Contact</Link>
                </div>
              </div>
              <div className="col-12 col-lg-6 mt-2">
                  <Image src={ "https:" + mastheadImage.fields.file.url }  width={400} height={400} className="masthead__img mt-3" alt={ mastheadTitle } />
              </div>
            </div>
          </div>
      </section>
   )
}

export default Masthead
