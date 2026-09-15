import Nav from '../nav/Nav';
import logoIcon from '../../img/icons/MODRINO-logo.svg'
import'../header/header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                <div className="header__logo">
                    <img src={logoIcon} alt="modrino logo" />
                </div>
                <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header