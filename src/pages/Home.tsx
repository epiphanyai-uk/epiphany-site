import { Button } from '../components/Button'
import epiphanyImg from '../assets/epiphanyai-logo.png';

const Home = () => {


  return (
    <>
      <div>


        <section id="center">
          <div className="hero">
            <img src={epiphanyImg} width="100" height="100" alt="Epiphany Logo" />
            <h1 className="epiphanyAI">Epiphany AI</h1>
            <p>
              Build personalised AI-powered learning journeys tailored to your style
            </p>
            <div>
              <Button to={''} children={''} />

            </div>

          </div>
        </section>

        <section id="next-steps">

          <div id="social">
            <svg className="icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#social-icon"></use>
            </svg>
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
        </section>
      </div>
    </>
  );
};

export default Home;