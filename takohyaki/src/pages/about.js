// src/pages/about.js
import Layout from '../components/Layout';
import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <Layout>
      <section className={styles.about}>
        <h1>About Me</h1>
        <p>Detail about yourself and your experience.</p>
      </section>
    </Layout>
  );
};

export default AboutPage;
