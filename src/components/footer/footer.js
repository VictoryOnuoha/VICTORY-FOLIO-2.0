import { HashLink } from "react-router-hash-link";
import logo from '../../assets/icons/logo.png';

function Footer() {
    return (
        <main className='footer'>
            <section className='footer__image-box' >
                <img src='' className='footer__image' />
            </section>

            <section className='footer__link-box' >
                <ul className='footer__link' > 
                    <li className='footer__link-item' >
                        <HashLink 
                         to='' >
                        HOME
                        </HashLink> 
                    </li>
                    <li className='footer__link-item'  >
                        <HashLink>
                        PORTFOLIO
                        </HashLink> 
                    </li>
                    <li className='footer__link-item'>
                        <HashLink>
                        HIRE
                        </HashLink> 
                    </li>
                </ul>
            </section>
    </main>
    )
}

export default Footer;  