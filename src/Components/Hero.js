import { COMPANY } from '../data/content';

function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div
        className="hero__media"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/anotherImg.jpg)`,
        }}
        role="img"
        aria-label="Consulting services"
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__brand">{COMPANY.name}</p>
        <h1 className="hero__headline">{COMPANY.headline}</h1>
        <p className="hero__tagline">{COMPANY.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={`mailto:${COMPANY.email}`}>
            Get in touch
          </a>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              document
                .getElementById('approach')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Our approach
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
