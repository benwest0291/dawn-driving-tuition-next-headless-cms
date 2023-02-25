import ImagePartial from "@/components/Image/ImagePartial"
import Text from "../../components/Text/Text"

const singleBlogPage = () => {
  return (
      <>
      <main className="container">
        <h2>Single blog page</h2>
         <div className="row">
          <div className="col-12 col-md-6">
              <Text />
          </div>
            <div className="col-12 col-md-6">
              <ImagePartial />
          </div>
        </div>
      </main>
    </>
  )
}

export default  singleBlogPage
