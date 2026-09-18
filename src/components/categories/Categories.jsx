import '../categories/categories.css';
import Button from '../button/Button';
import CarCard from '../car-card/CarCard';
import rollsRoyce from '../../img/categories-rolls-royce.png';
import backgroundImgGarage from '../../img/categories-background.png';
import ferrari from '../../img/ferrari.png';
import audi from '../../img/audi.png';
import tesla from '../../img/tesla.png';
import bmw from '../../img/bmw.png';

function Categories() {
	return (
		<section className="categories">
			<div className="container">
				<h2 className="categories__title title">Top Categories</h2>
				<ul className="categories__list">
					<li>
						<a href="#!" className="link link--active">
							In stock
						</a>
					</li>
					<li>
						<a href="#!">Used Cars</a>
					</li>
					<li>
						<a href="#!">Any Modals</a>
					</li>
					<li>
						<a href="#!">Any Motors</a>
					</li>
					<li>
						<a href="#!">All Prices</a>
					</li>
				</ul>
				<div className="categories__content">
					<div className="categories__head-img">
						<div className="categories__desc">
							<h3 className="categories__text title">Rolls Royce Wraith</h3>
                            <Button text="Learn More"/>
						</div>
						<img src={backgroundImgGarage} alt="garage img" />
						<div className="rolls-royce-img">
							<img src={rollsRoyce} alt="rolls royce" />
						</div>
					</div>
					<div className="categories__car-cards">
						<CarCard carImg={audi} carName="Audi"/>
						<CarCard carImg={ferrari} carName="Ferrari"/>
						<CarCard carImg={tesla} carName="Tesla"/>
						<CarCard carImg={bmw} carName="Bmw"/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Categories;
