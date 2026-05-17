
import { Link } from 'react-router-dom';
import * as styles from '../Footer.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>

                <div className={styles.divider}>

                    <div className={styles.grid}>

                        {/* BRAND */}
                        <div>
                            <h3 className={styles.brandTitle}>
                                Epiphany AI
                            </h3>
                            <p className={styles.paragraph}>
                                Crafting intelligent systems and delightful user experiences
                            </p>

                            <div 
                            className={styles.socialRow}
                            >
                                <a href="https://github.com/epiphanyai-uk" target="_blank">
                                    <svg
                                        className={styles.socialIcon}
                                        role="presentation"
                                        aria-hidden="true"
                                    >
                                        <use href="/icons.svg#github-icon"></use>
                                    </svg>
                                </a>


                                <a href="https://www.linkedin.com/company/epiphanyartificialintelligence/" target="_blank">
                                    <svg
                                        className={styles.socialIcon}
                                        role="presentation"
                                        aria-hidden="true"
                                    >
                                        <use href="/icons.svg#discord-icon"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* COMPANY */}
                        <div>
                            <h3 className={styles.sectionTitle}>Company</h3>

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
                        </div>
                    </div>
                     <div className={styles.bottom}>
                        <p>© {new Date().getFullYear()} Epiphany Labs. All rights reserved.</p>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;