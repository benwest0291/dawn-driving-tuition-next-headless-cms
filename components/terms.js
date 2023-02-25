import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Terms = ({ info }) => {
const { termsAndConditionText} = info.fields
  return (
    <div>
          { documentToReactComponents (termsAndConditionText)}
    </div>
  )
}

export default Terms
