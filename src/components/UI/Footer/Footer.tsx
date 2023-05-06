import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__wrapper}`}>Vilkor &copy; 2023</div>
    </footer>
  );
}
