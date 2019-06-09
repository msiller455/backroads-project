import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

const About = () => {
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="us"/>
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="about company" />
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>explore the difference</h4>
                    <p>Tempor exercitation velit nisi fugiat irure duis. Adipisicing ea aute tempor veniam.</p>
                    <p>Do in labore ipsum non. Eu consectetur est ad consectetur elit mollit Lorem labore ipsum adipisicing voluptate id. Do deserunt aliquip cillum quis aliquip consequat dolor mollit esse magna duis.</p>
                    <button type="button" className="btn-primary">read more</button>
                </article>
            </div>
        </section>
    )
}

export default About
