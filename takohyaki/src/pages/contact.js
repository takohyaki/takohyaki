// src/pages/contact.js
import Layout from '../components/Layout';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => (
  <Layout>
    <section className={styles.contact}>
      <h1>Contact</h1>
      <p>Email: <a href="mailto:tammiekoh1518@gmail.com">tammiekoh1518@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/tammiekohszehui/">https://www.linkedin.com/in/tammiekohszehui/</a></p>
        <p>GitHub: <a href="https://github.com/takohyaki">https://github.com/takohyaki</a></p>
    </section>
  </Layout>
);

export default ContactPage;
