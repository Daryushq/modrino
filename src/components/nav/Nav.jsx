import '../nav/nav.css'

function Nav() {
    return (
        <ul className="list">
            <li className="item"><a href="#header">Home</a></li>
            <li className="item"><a href="#categories">About</a></li>
            <li className="item"><a href="#services">Services</a></li>
            <li className="item"><a href="#footer">Contacts</a></li>
        </ul>
    )
}

export default Nav