// src/components/ResumePage.js
import Layout from '../components/Layout';
import styles from '../styles/ResumePage.module.css';

const ResumePage = () => (
  <Layout>
    <section className={styles.resume}>
      <h1>Resume</h1>
      <h2>Education</h2>
      <ul>
        <li>Bachelor&apos;s degree in Data Science, Yale-NUS College</li>
      </ul>
      <h2>Experience</h2>
      <ul>
        <li>Data Scientist Intern at TikTok (Monetisation Strategy and Operations)</li>
        <li>Data Analyst Intern at foodpanda</li>
        <li>DeFi Content Creator Intern at Treehouse Finance</li>
      </ul>
    </section>
  </Layout>
);

export default ResumePage;

