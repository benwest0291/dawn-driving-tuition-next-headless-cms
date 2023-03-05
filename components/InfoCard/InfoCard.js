const InfoCard = ({heading, infomation}) => {
  return (
    <div className="info__card">
      <div className="p-4 d-flex flex-column">
        <h2>{ heading }</h2>
        <p className="mt-3">{infomation}</p>
        <button className="secondary__btn mt-2">View more</button>
      </div>
    </div>
  )
}

export default InfoCard
