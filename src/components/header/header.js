import logo from '../../assets/icons/logo.png';
import './header.scss';

function Header() {

    return (
        <header className='header' >
            <section className='header__logo-box'>
                <img src={logo} className='header__logo' />
            </section>

            <nav className='header__nav' >
                <ul className='header__list' >
                    <li className='header__list-item'>ABOUT</li>
                    <li className='header__list-item' >PORTFOLIO</li>
                    <li className='header__list-item header__list-item-selected' >HIRE</li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;