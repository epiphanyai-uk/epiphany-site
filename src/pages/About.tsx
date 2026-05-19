import * as styles from "../styles/About.css"
import epiphanyImg from '../assets/epiphanyai-logo.png';

const About = () => {

  return (
    <div>

      {/*  Main Content */}
      <div
        className={styles.page}
      >
        <div
          className={styles.card}
        >
          <img className={styles.img} src={epiphanyImg} width={100} height={100} alt="Epiphany Logo" />

          <p className={styles.text}>
            Epiphany is a UK based, AI startup with an agentic software creation platform designed to transform ideas into fully deployed applications without the need for extensive technical expertise.
            By removing the complexity traditionally associated with software development, Epiphany enables you to bring your ideas to life faster, with fewer barriers to entry and at a fraction of the cost.
          </p>

          <div className={styles.divider}></div>

          <p className={styles.text}>
            Our mission is to make the benefits of state of the art AI technology available to everyone, so we can all flourish in a rapidly automating ecosystem.
            Through a combination of cutting-edge technology and a human-centered approach, we can help turn your ideas into tangible results.
            At our core, we are a team of innovators, problem-solvers, and technology specialists committed to shaping the future through responsible and impactful AI.
          </p>

        </div>
      </div>
    </div>
  );
};

export default About;
