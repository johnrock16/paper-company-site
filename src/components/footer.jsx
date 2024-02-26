import Link from "next/link";
import "../sytles/components/footer.scss";

export default function Footer () {
    return (
    <footer className='pa-footer'>
        <div className='container'>
          <div className='pa-footer__top row'>
            <div className='pa-footer__company'>
              <span className='pa-footer__companyTitle'>Paper View</span>
              <p>Paper View transforms renewable resources into products people depend on every day, from planet-friendly Our company will save dreams and money with paper</p>
              <div className='pa-footer__socialMedia'>
                <Link href="https://www.facebook.com">Facebook</Link>
                <Link href="https://www.instagram.com">Instagram</Link>
                <Link href="https://www.linkedin.com">Linkedin</Link>
                <Link href="https://www.twitter.com">Twitter</Link>
              </div>
            </div>
            <div className='pa-footer__redirects'>
              <ul className='pa-footer__links'>
                <li className="pa-footer__link"><span>Pages new</span></li>
                <li className='pa-footer__link'>
                  <Link href="https://www.linkedin.com">Page content</Link>
                </li>
                <li className='pa-footer__link'><Link href="https://www.linkedin.com">New page content</Link></li>
                <li className='pa-footer__link'><Link href="https://www.linkedin.com">Page incredible</Link></li>
                <li className='pa-footer__link'><Link href="https://www.linkedin.com">Page craziest page</Link></li>
                <li className='pa-footer__link'><Link href="https://www.linkedin.com">Page of us</Link></li>
              </ul>
              <ul className='pa-footer__links'>
                <li className="pa-footer__link"><span>Brand new</span></li>
                <li className='pa-footer__link'><Link href="https://www.linkedin.com">Page content</Link></li>
                <li className='pa-footer__link'><Link href="https://www.linkedin.com">New page content</Link></li>
                <li className='pa-footer__link'><Link href="https://www.linkedin.com">Page incredible</Link></li>
                <li className='pa-footer__link'><Link href="https://www.linkedin.com">Page craziest page</Link></li>
                <li className='pa-footer__link'><Link href="https://www.linkedin.com">Page of us</Link></li>
              </ul>
              <ul className='pa-footer__links'>
                <li className="pa-footer__link"><span>Company</span></li>
                <li className='pa-footer__link'><Link href="https://www.linkedin.com">Page content</Link></li>
                <li className='pa-footer__link'><Link href="https://www.linkedin.com">New page content</Link></li>
                <li className='pa-footer__link'><Link href="https://www.linkedin.com">Page incredible</Link></li>
                <li className='pa-footer__link'><Link href="https://www.linkedin.com">Page craziest page</Link></li>
                <li className='pa-footer__link'><Link href="https://www.linkedin.com">Page of us</Link></li>
              </ul>
            </div>
          </div>
          <div className='pa-footer__bottom row'>
            <ul className='pa-footer__links pa-footer__links--row'>
              <li className='pa-footer__link'><Link href="https://www.linkedin.com">Page 1</Link></li>
              <li className='pa-footer__link'><Link href="https://www.linkedin.com">Page 1</Link></li>
              <li className='pa-footer__link'><Link href="https://www.linkedin.com">Page 1</Link></li>
              <li className='pa-footer__link'><Link href="https://www.linkedin.com">Page 1</Link></li>
            </ul>
            <span className='pa-footer__rightsText'>Paper View. None of rights are reserved.</span>
          </div>
        </div>
      </footer>
    );
};
