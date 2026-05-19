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
            Epiphany AI is a next-generation AI workspace that brings together creative ideation,
            technical automation, and data intelligence all in one place.
            We’re building tools that empower developers, learners, and innovators
            to turn ideas into fully realised systems with clarity, speed, and adaptability.
          </p>

          <p className={styles.text}>
            At the heart of Epiphany AI lies a belief: <em>ideas deserve to grow</em>.
            Whether you're exploring, experimenting, or scaling a vision,
            we aim to provide the intelligence and infrastructure to get you there.
          </p>

          <div className={styles.divider}></div>

          <h1 className={styles.title}>Our Vision</h1>
          <p className={styles.text}>
            To redefine how humans interact with knowledge, automation, and AI.
            Empowering everyone to co-create with intelligent systems,
            not just consume them.
          </p>

        </div>
      </div>
    </div>
  );
};

export default About;
