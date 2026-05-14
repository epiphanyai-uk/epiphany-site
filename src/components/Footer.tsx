
import { Link } from 'react-router-dom';
import * as styles from '../Footer.css'

const Footer = () => {


    return (


        <footer className={styles.footer}>
            {/* Gradient Divider */}
            <div className={styles.divider}>


                {/* Main Grid */}
                <div className={styles.grid}>



                    <h3 className={styles.brandTitle}>
                        Epiphany AI</h3>
                    <p className={styles.paragraph}>
                        Crafting intelligent systems and delightful user experiences
                    </p>

                    <div className={styles.socialRow}>
                        <a href="https://github.com/epiphanyai-uk" className={styles.socialIcon}>
                            <i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/company/epiphanyartificialintelligence/" className={styles.socialIcon}>
                            <i className="fab fa-linkedin"></i></a>
                    </div>
                </div>

                <div>
                    <h3 className={styles.sectionTitle}>
                        Company
                    </h3>

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


                {/* Divider */}
                <div className={styles.bottom}>

                    <p>© {new Date().getFullYear()} Epiphany Labs. All rights reserved.</p>

                </div>

            </div>


        </footer>

    );
};

export default Footer;