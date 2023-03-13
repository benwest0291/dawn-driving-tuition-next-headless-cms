import Image from "next/image";

const ImagePartial = ({ info }) => {
  const { bodyImage } = info.fields

  return (
    <>
      <Image alt="Dawn driving main image" src={"https:" + bodyImage.fields.file.url} width={400} height={400} className="main__image mt-3" />
    </>
  )
}

export default ImagePartial
