import '../carTypes/carTypes.css';
import Card from '../card/Card';
import cabriolet from '../../img/icons/cabriolet-icon.svg';
import coupe from '../../img/icons/coupe-icon.svg';
import micro from '../../img/icons/micro-icon.svg';
import sedan from '../../img/icons/sedan-icon.svg';
import suv from '../../img/icons/suv-icon.svg';

function CarTypes() {
	return (
		<section className="car-types">
			<div className="container">
				<div className="car-types__wrapper">
					<Card img={sedan} carType="Sedan" />
                    <Card img={cabriolet} carType="Cabriolet" />
                    <Card img={coupe} carType="Couple" />
                    <Card img={suv} carType="SUV" />
                    <Card img={micro} carType="Micro" />
				</div>
			</div>
		</section>
	);
}

export default CarTypes;
