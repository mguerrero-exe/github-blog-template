import React from "react";
import Header from '../header/header';
import styles from './layout.module.css';

const Layout = (props) => {
  const { children } = props;
  return (
    <section className={styles.Layout__Container}>
      <Header />
      {children}
    </section>
  )
}

export default Layout