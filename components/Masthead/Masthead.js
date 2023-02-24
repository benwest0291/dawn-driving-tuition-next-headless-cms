import Image from "next/image";
import Link from 'next/link'

const Masthead = () =>
{
  return (
<section class="masthead">
   <div class="container">
       <div class="row">
        <div class="col-12 col-lg-6">
          <div class="masthead__text">
                  <h2>This is the title secrion</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                  <Link href="/about">About</Link>
                  <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div class="col-12 col-lg-6 mt-2">
             <Image src="/header-image.png" width={400} height={400} className="masthead__img mt-3" />
        </div>
      </div>
    </div>
</section>
  )
}

export default Masthead
