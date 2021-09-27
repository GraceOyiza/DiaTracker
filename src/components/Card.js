const Card = () => {
  return (
    <div className="d-flex py-4 px-4 align-items-center justify-content-between m-3 measurement__card">
      <p className="mb-0">{new Date().toLocaleString()}</p>
      <p className="mb-0">200kg</p>
    </div>
  )
}

export default Card
