import React from "react";
import styles from "./Hero.module.css";
export const Hero =() =>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi,I'm Ayushi</h1>
            <p className={styles.desc}>I am a freshman at IIITL with great enthusiasm in web development and Machine learning.</p>
            <a className={styles.btn}href="mailto:awasthiayushi301@gamil.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src="../assets/heroImage.png"></img>
        <div className={styles.top}></div>
        <div className={styles.bottom}/>
    </section>;
}