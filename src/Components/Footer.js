import { COMPANY } from '../data/content';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">{COMPANY.name}</p>
        <a className="site-footer__email" href={`mailto:${COMPANY.email}`}>
          {COMPANY.email}
        </a>
        <p className="site-footer__copy">
          © {year} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
