import Image from "next/image";

const ImagePartial = () => {
  return (
    <>
      <Image src="/road.png" width={500} height={600} className="main__image mt-3" />
    </>
  )
}

export default ImagePartial
