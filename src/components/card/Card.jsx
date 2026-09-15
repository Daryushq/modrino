import '../card/card.css'

function Card({img, carType}) {
    return (
        <div className="card">
            <div className="card__body">
                <img className="card__img" src={img} alt={carType} />
                <p className="card__desc">{carType}</p>
            </div>
        </div>
    )
}

export default Card