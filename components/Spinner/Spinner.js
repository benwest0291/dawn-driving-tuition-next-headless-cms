import Layout from "../Layout"

const Skeleton = ({ errorMessage }) => {

  return (
    <div className="container">
      <p className="mt-5 text-center h2">{ errorMessage }</p>
      <div className="spinner mb-5 mt-5">
        <div class="loader"></div>
      </div>
    </div>
  )
}

export default Skeleton
