import logo from '../../assets/icons/logoo.png';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {

    return (
        <header className='header' >
            <section className='header__logo-box'>
                <Link
                 to='/'
                 smooth>
                 <img src={logo} className='header__logo' alt='logo' />
                </Link>
            </section>

            <nav className='header__nav' >
                <ul className='header__list' >
                    <li> 
                        <Link
                          className='header__list-item'
                          smooth 
                          to='/about'>
                            ABOUT
                        </Link>
                    </li>
                    <li> 
                        <Link
                          className='header__list-item'
                          smooth
                          to='/projects' >
                            PROJECTS
                        </Link>
                    </li>
                    <li> 
                        <Link
                          className='header__list-item header__list-item-selected'
                          smooth
                          to='/contact' >
                            HIRE
                        </Link>
                    </li>
                    
                </ul>
            </nav>
        </header>

    )
}

export default Header;