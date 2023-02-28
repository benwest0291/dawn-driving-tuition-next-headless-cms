import Image from "next/image";

const ImagePartial = ({info}) => {
  const { bodyImage } = info.fields

  return (
    <>
      <Image src={"https:" + bodyImage.fields.file.url} alt="homepage main image" width={400} height={400} className="main__image mt-3" />
    </>
  )
}

export default ImagePartial
