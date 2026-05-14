import { Button } from '../components/Button'
import epiphanyImg from '../assets/epiphanyai-logo.png';
import * as styles from "../Home.css"

const Home = () => {

  return (
    <>
      <div className={styles.page}>
        <div className={styles.container}>

          {/* HERO */}
          <section className={styles.hero}>

            <img src={epiphanyImg} width={100} height={100} alt="Epiphany Logo" />
            <h1 className="epiphanyAI">Epiphany AI</h1>
            <p>
              Build personalised AI-powered learning journeys tailored to your style
            </p>
            <div>
              <Button to="/about">Learn More</Button>
              <Button to="/contact">Get in Touch</Button>
            </div>
          </section>
        </div>
      </div>

      {/* SOCIAL LINKS */}

      <div id="social">
        <h2>Follow us here</h2>
        <ul>
          <li>
            <a href="https://github.com/epiphanyai-uk" target="_blank">
              <svg
                className="button-icon"
                role="presentation"
                aria-hidden="true"
              >
                <use href="/icons.svg#github-icon"></use>
              </svg>
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/epiphanyartificialintelligence" target="_blank">
              <svg
                className="button-icon"
                role="presentation"
                aria-hidden="true"
              >
                <use href="/icons.svg#discord-icon"></use>
              </svg>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;