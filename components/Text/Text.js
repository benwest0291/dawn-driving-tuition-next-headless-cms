import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Text = ({ info }) => {

  const { pageTitle, bodyText } = info.fields

  return (
    <div className="text">
      <h2 className="mb-4 mt-4">{pageTitle}</h2>
      {documentToReactComponents(bodyText)}
      <Image src="/DVSA.png" width={300} height={30} className="mt-3"/>
    </div>
  )
}

export default Text
