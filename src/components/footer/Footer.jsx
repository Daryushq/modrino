import '../footer/footer.css'; 
import Nav from '../nav/Nav';
import logo from '../../img/icons/MODRINO-logo.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                <div className="footer__nav">
                    <img src={logo} alt="modrino logo" className="footer__logo logo" />
                    <Nav />
                </div>
                <div className="footer__contacts">
                    <p className="footer__number">(456) 789-12301</p>
                    <p className="footer__info">info@modrino.co.uk</p>
                    <p className="footer__info">South 13th street</p>
                    <p className="footer__info">New york America</p>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer 