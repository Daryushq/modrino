import '../our-services-card/our-services-card.css';
import arrow from '../../img/icons/arrow-icon.svg';

function OurServicesCard({ title }) {
	return (
		<div className="services__card">
			<h3 className="services__card-title title">{title}</h3>
			<p className="services__card-desc">
				Lorem Ipsum has been the industry's standard dummy text ever since.
			</p>
			<p className="services__card-desc">
				Lorem Ipsum has been the industry's standard dummy text ever since.
			</p>
			<div className="services__card-btn">
				<a href="#!">Learn More</a>
				<img src={arrow} alt="arrow right" />
			</div>
		</div>
	);
}

export default OurServicesCard;
