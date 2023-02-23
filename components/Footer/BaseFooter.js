const BaseFooter = () =>
{
  return (
    <>
       <div class="footer__base w-100 p-2 text-center">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 pt-2">
                        <p><span>Dawn driving tuition</span> &copy; {new Date().getFullYear()} </p>
                    </div>
                    <div class="col-12 col-md-6 pt-2">
                        <p>Website by Ben West</p>
                    </div>
                </div>
            </div>
         </div>
      </>
  )
}

export default BaseFooter
