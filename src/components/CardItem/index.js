import './index.css'

const CardItem = props => {
  const {cardItem} = props
  const {title, description, imgUrl, className} = cardItem
  return (
    <li className={`card-item-container ${className}`}>
      <div className="card">
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imgUrl} alt={title} className="card-image" />
      </div>
    </li>
  )
}

export default CardItem
