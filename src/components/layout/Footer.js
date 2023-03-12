import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href='https://github.com/BrunoBronzeri'>
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/BrunoBronzeri/blubotics'>
                        <FaInstagram />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/bruno-bueno-bronzeri-261b51219/'>
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>SmartCart</span> &copy; 2023
            </p>
        </footer>
    );
}