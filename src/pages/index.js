import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/profile.jpg"
            alt="Tammie Koh"
            className={styles.profileImage}
            width={120}
            height={120}
          />
        </div>
        <h1>Hi, I'm Tammie Koh</h1>
        <h2>Data Scientist</h2>
        <p>Welcome to my personal website! I specialize in data analysis and machine learning. Let's explore the world of data together!</p>
      </section>
      <footer className={styles.footer}>
        <p>© 2024 Tammie Koh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
