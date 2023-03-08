import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Text = ({ info }) => {

  const { pageTitle, bodyText } = info.fields

  return (
    <div className="text">
      <h2 className="mb-4 mt-4">{pageTitle}</h2>
      {documentToReactComponents(bodyText)}
      <Image alt="driving and vehicle standards agency" src="/DVSA.JPG" width={160} height={100} className="mt-1"/>
    </div>
  )
}

export default Text
