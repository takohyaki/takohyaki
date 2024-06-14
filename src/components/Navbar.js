// src/components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <ul className={styles.navList}>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/resume">Resume</Link></li>
      <li><Link href="/projects">Projects</Link></li>
      <li><Link href="/blog">Blog</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;


