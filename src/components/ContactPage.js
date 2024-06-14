// src/pages/contact.js
import Layout from '../components/Layout';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => (
  <Layout>
    <section className={styles.contact}>
      <h1>Contact</h1>
      <p>Email: <a href="mailto:tammiekoh1518@gmail.com">tammiekoh1518@gmail.com</a></p>
      <p>Phone: +65 9099 1234</p>
    </section>
  </Layout>
);

export default ContactPage;
