import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>

            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/email.png")} 
                         alt="Email Icon" 
                    />
                    <a href="mailto:neha@gmail.com">neha@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedin.png")} 
                         alt="LinkedIn Icon" 
                    />
                    <a href="https://www.linkedin.com/neha">linkedin.com/neha</a>
                </li>

                <li className={styles.link}>
                    <img src={getImageUrl("contact/github.png")} 
                         alt="GitHub Icon" 
                    />
                    <a href="https://www.github.com/neha-neha">github.com/neha-neha</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}