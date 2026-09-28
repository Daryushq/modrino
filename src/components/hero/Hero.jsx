import heroCar from '../../img/hero-white-car.png';
import '../hero/hero.css'

function Hero() {
	return (
		<section className="hero">
				<div className="bg-circle">
					<div className="circle"></div>
				</div>
			<div className="container hero__container">
				<div className="hero__wrapper">
				<div className="hero__text">
					<h1 className="hero__title title">Find Your Dream Car</h1>
					<p className="hero__desc">
						Lorem Ipsum has been the industry's standard dummy text ever since
					</p>
                    <a href="#!" className="btn hero--btn">Read More</a>
				</div>
				<div className="hero__img">
					<img src={heroCar} alt="hero car" />
				</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
