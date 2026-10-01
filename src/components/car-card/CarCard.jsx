import '../car-card/car-card.css'
import {ReactComponent as Star} from '../../img/icons/star-icon.svg'
import { useState } from 'react'

function CarCard({carImg, carName}) {
        const [favoriteIcon, setFavoriteIcon] = useState(false)
        
        const toggleClass = () => {
            setFavoriteIcon(!favoriteIcon)
        }
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
                    <Star width="20" height="19" fill="currentColor" className={favoriteIcon ? " car-card__star-icon--favorite" : "car-card__star-icon"}
                    onClick={toggleClass}/>
                </div>
            </div>
        </div>
    )
}

export default CarCard