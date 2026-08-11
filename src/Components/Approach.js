import { APPROACH_ITEMS } from '../data/content';

function Approach() {
  return (
    <section className="section section--light" id="approach">
      <div className="section__inner">
        <header className="section__header">
          <h2>Our Approach</h2>
          <p>
            A clear process designed to move your business from goals to
            results.
          </p>
        </header>
        <ul className="approach-list">
          {APPROACH_ITEMS.map((item, index) => (
            <li className="approach-list__item" key={item.title}>
              <span className="approach-list__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Approach;
