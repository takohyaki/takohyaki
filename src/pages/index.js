import Layout from '../components/Layout';
import styles from '../styles/HomePage.module.css';
import Image from 'next/image';

const HomePage = () => {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.imageContainer}>
          <Image src="/images/profile.jpg" alt="Tammie Koh" className={styles.profileImage} width={120} height={120} />
        </div>
        <h1>Hi, I&apos;m Tammie Koh</h1>
        <h2>Data Scientist & Web Developer</h2>
        <p>Welcome to my personal website! I specialize in data analysis, machine learning, and creating stunning web applications. Let&apos;s explore the world of data together.</p>
      </section>
    </Layout>
  );
};

export default HomePage;


