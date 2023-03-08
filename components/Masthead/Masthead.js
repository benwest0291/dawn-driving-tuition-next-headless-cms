import Image from "next/image";
import Link from 'next/link'

const Masthead = ({ info }) => {

  const { mastheadTitle, mastheadText, mastheadImage } = info.fields

  return (
      <section className="masthead">
        <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                <div className="masthead__text">
                    <h1 className="h2">{ mastheadTitle } </h1>
                    <p>{ mastheadText }</p>
                    <div className="mb-3">
                    <Link className="masthead__btn mb-5" href="/#about">About</Link>
                    <Link className="masthead__btn mb-5" href="/contact">Contact</Link>
                   </div>
                </div>
              </div>
              <div className="col-12 col-md-5 mt-3">
                  <Image alt={ mastheadTitle }  src={ "https:" + mastheadImage.fields.file.url }  width={200} height={200} className="masthead__img" />
              </div>
            </div>
          </div>
      </section>
   )
}

export default Masthead
