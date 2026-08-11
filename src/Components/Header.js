import { useEffect, useState } from 'react';
import { COMPANY, NAV_LINKS } from '../data/content';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <a
          href="#top"
          className="site-header__brand"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMenuOpen(false);
          }}
        >
          <img src={`${process.env.PUBLIC_URL}/summit.png`} alt="" />
          <span>{COMPANY.name}</span>
        </a>

        <button
          type="button"
          className={`site-header__toggle${menuOpen ? ' is-open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-nav"
          className={`site-header__nav${menuOpen ? ' is-open' : ''}`}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              className="site-header__link"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <a
            className="site-header__link site-header__link--email"
            href={`mailto:${COMPANY.email}`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
