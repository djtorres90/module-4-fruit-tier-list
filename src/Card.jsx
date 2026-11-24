import styles from './Card.module.css';

export default function Card({ title, children }) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      {children}
    </article>
  );
}
