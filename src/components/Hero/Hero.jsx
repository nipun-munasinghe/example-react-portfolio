import React from 'react';
import styles from './Hero.module.css';
import {getImageUrl} from '../../utils';

// rafc
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi👋🏻. I'm Neha</h1>
            <p className={styles.description}>I'm a frontend developer with 3 years of experience using React and NodeJS.
                Reach out to me if you need help with your next project.
            </p>
            <a href="mailto:neha@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/hero.png")} alt="Hero image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}