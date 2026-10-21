import styles from 'components/skills.module.css';

export default function Skills() {
  return (
    <>
      <h2 id="skills">Skills</h2>
      <h3 className={styles.heading}>Software Engineering</h3>
      <p className={styles.text}>
        Full-stack software engineering and cloud architecture.
        <br />
        Python (Django). React. Docker. Serveless.
      </p>
      <h3 className={styles.heading}>Product Management</h3>
      <p className={styles.text}>
        From conception to driving a development team.
      </p>
    </>
  );
}
