import { ReactComponent as BurgerMenu } from '../../img/icons/burger-menu.svg';
import { ReactComponent as CloseIcon } from '../../img/icons/close-icon.svg';
import Nav from '../nav/Nav';
import logoIcon from '../../img/icons/MODRINO-logo.svg';
import '../header/header.css';
import { useState, useEffect} from 'react';

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [isOpen])
	return (
		<header className="header" id="header">
			<div className="container">
				<div className="header__wrapper">
					<img
						src={logoIcon}
						alt="modrino logo"
						className="header__logo logo"
					/>
					<Nav />
					<BurgerMenu
						width="40"
						height="40"
						className="header__burger-icon"
						onClick={() => setIsOpen(true)}
					/>
					<div className={`overlay ${isOpen ? 'overlay--active' : ''}`}></div>
					<div className={`header__burger-menu ${isOpen ? 'burger-menu--open' : ''}`} >
						<div className="header__burger-menu-wrapper burger-menu--open">
							<ul className="header__burger-menu-list">
								<li className="item">
									<a href="#header" onClick={() => setIsOpen(false)}>Home</a>
								</li>
								<li className="item">
									<a href="#categories" onClick={() => setIsOpen(false)}>About</a>
								</li>
								<li className="item">
									<a href="#services" onClick={() => setIsOpen(false)}>Services</a>
								</li>
								<li className="item">
									<a href="#footer" onClick={() => setIsOpen(false)}>Contacts</a>
								</li>
							</ul>
							<div className="header__burger-menu-icon">
								<CloseIcon width="40" height="40" onClick={() => setIsOpen(false)}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
