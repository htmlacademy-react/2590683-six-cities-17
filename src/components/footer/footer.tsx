import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer container">
      <Link to={'/'}>
        <div className="footer__logo-link">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </div>
      </Link>
    </footer>
  );
}

export default Footer;
