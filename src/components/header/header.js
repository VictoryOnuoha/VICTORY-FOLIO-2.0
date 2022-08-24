import logo from '../../assets/icons/logo.png';
import './header.scss';

const Header = () => {

    return (
        <header className='header' >
            <section className='header__logo-box'>
                <img src={logo} className='header__logo' />
            </section>

            <nav className='header__nav' >
                <ul className='header__list' >
                    <li className='header__list-item'>ABOUT ME</li>
                    <li className='header__list-item' >PORTFOLIO</li>
                    <li className='header__list-item' >CONTACT ME </li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;