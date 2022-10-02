import logo from '../../assets/icons/logo.png';
import { HashLink } from 'react-router-hash-link';
import './header.scss';

function Header() {

    return (
        <header className='header' >
            <section className='header__logo-box'>
                <HashLink
                 to='../../App.js#home'
                 smooth>
                 <img src={logo} className='header__logo' alt='logo' />
                </HashLink>
            </section>

            <nav className='header__nav' >
                <ul className='header__list' >
                    <li> 
                        <HashLink
                          className='header__list-item'
                          smooth 
                          to='../about/about.js#about'>
                            ABOUT
                        </HashLink>
                    </li>
                    <li> 
                        <HashLink
                          className='header__list-item'
                          smooth
                          to='../projects/project.js#projects' >
                            PROJECTS
                        </HashLink>
                    </li>
                    <li> 
                        <HashLink
                          className='header__list-item header__list-item-selected'
                          smooth
                          to='../contact/contact.js#contact' >
                            HIRE
                        </HashLink>
                    </li>
                    
                </ul>
            </nav>
        </header>

    )
}

export default Header;