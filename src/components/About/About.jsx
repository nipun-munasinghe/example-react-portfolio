import React from 'react'
import styles from './About.module.css';
import {getImageUrl} from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} 
                alt="Me sitting and working with my laptop" 
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursor.png")} alt="Cursor Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a frontend developer with experience in building 
                            responsive and optimized websites.
                        </p>
                    </div>
                </li>
                
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cpu.png")} alt="CPU Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I have experience developing fast and optimized 
                            back-end systems & APIs.
                        </p>
                    </div>
                </li>


                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/desktop.png")} alt="Desktop Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI UX Designer</h3>
                        <p>
                            I have designed multiple landing pages and have 
                            created design system as well using Figma.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}