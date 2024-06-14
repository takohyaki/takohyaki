import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
        <li><Link href="/resume"><a>Resume</a></Link></li>
        <li><Link href="/projects"><a>Projects</a></Link></li>
        <li><Link href="/blog"><a>Blog</a></Link></li>
        <li><Link href="/contact"><a>Contact</a></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;



