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
            <div className={styles.buttonContainer}>
              <Button to="/about">Learn More</Button>
              <Button to="/contact">Get in Touch</Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;