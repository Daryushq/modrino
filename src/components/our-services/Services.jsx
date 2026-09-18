import '../our-services/services.css';
import allBrands from '../../img/all-brands.png';
import freeSupport from '../../img/free-support.png';
import OurServicesCard from '../our-services-card/OurServicesCard';

function Services() {
    return (
        <section className="services">
            <div className="container">
                <h2 className="services__title title">Our Services</h2>
                <div className="services__wrapper">
                    <OurServicesCard title="All Brands"/>
                    <img src={allBrands} alt="all brands" />
                    <img src={freeSupport} alt="all brands" />
                    <OurServicesCard title="Free Support"/>
                </div>
            </div>
        </section>
    )
}

export default Services