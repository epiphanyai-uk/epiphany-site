
import { Link } from 'react-router-dom';
import * as styles from '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>

            {/* DIVIDER */}
            <div className={styles.divider} />

            <div className={styles.content}>

                <div className={styles.flex}>
                    <section className={styles.section}>
                        {/* BRAND */}
                        <h3 className={styles.brandTitle}>
                            Epiphany AI
                        </h3>
                        <p className={styles.paragraph}>
                            Crafting intelligent systems and delightful user experiences
                        </p>

                        <div
                            className={styles.socialRow}
                        >
                            <a href="https://www.instagram.com/epiphanyartificialintelligence" className={styles.socialLink} target="_blank">
                                <svg
                                    className={styles.socialIcon}
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#instagram-icon"></use>
                                </svg>
                            </a>

                            {/* Debug instagram icon missing on desktop until hard refresh */}

                            <a href="https://www.linkedin.com/company/epiphanyartificialintelligence/" className={styles.socialLink} target="_blank">
                                <svg
                                    className={styles.socialIcon}
                                    role="presentation"
                                    aria-hidden="true"
                                >
                                    <use href="/icons.svg#linkedin-icon"></use>
                                </svg>
                            </a>
                        </div>
                    </section>
                </div>



                {/* COMPANY */}

                <div className={styles.flex}>
                    <section className={styles.section}>
                        <h3 className={styles.brandTitle}>Company</h3>

                        <ul className={styles.list}>
                            <li>
                                <Link to="/about" className={styles.link}>
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className={styles.link}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
            <div className={styles.bottom}>

                {/* DIVIDER */}
                <div className={styles.divider} />

                <p>© {new Date().getFullYear()} Epiphany AI Ltd.</p>
            </div>
        </footer>
    );
};

export default Footer;