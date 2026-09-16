import '../car-card/car-card.css'
import star from '../../img/icons/star-icon.svg'

function CarCard({carImg, carName}) {
    return (
        <div className="car-card">
            <div className="car-card__img">
                <img src={carImg} alt={carName} />
            </div>
            <div className="car-card__body">
                <div className="car-card__head">
                <p className="car-card__car-name">{carName}</p>
                <p className="car-card__car-price">$78,000</p>
                </div>
                <div className="car-card__favorite">
                    <p className="car-card__desc">Lorem Ipsum</p>
                    <img src={star} alt="star icon" className="car-card__star-icon" />
                </div>
            </div>
        </div>
    )
}

export default CarCard