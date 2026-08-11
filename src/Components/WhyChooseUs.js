import { WHY_CHOOSE_US } from '../data/content';

function WhyChooseUs() {
  return (
    <section className="section section--dark" id="why-us">
      <div className="section__inner">
        <header className="section__header section__header--light">
          <h2>Why Choose Us?</h2>
          <p>
            Partnerships built on experience, focus, and practical innovation.
          </p>
        </header>
        <ul className="reason-list">
          {WHY_CHOOSE_US.map((item) => (
            <li className="reason-list__item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyChooseUs;
