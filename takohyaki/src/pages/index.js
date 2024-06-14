import Layout from '../components/Layout';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.imageContainer}>
          <img src="/images/profile.jpg" alt="Tammie Koh" className={styles.profileImage} />
        </div>
        <h1>Tammie Koh ᓚᘏᗢ</h1>
        <h2>Aspiring Data Scientist</h2>
        <p>Welcome to my personal website! I specialise in machine learning and data analysis.</p>
      </section>
    </Layout>
  );
};

export default HomePage;


