// src/pages/projects.js
import Layout from '../components/Layout';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = () => (
  <Layout>
    <section className={styles.projects}>
      <h1>Projects</h1>
      <ul>
        <li><a href="https://github.com/yourusername/project1">Project 1</a> - Brief description of the project.</li>
        <li><a href="https://github.com/yourusername/project2">Project 2</a> - Brief description of the project.</li>
      </ul>
    </section>
  </Layout>
);

export default ProjectsPage;
