import React from 'react';
import styles from './styles.module.css';

export const ColorText = ({ text, ...rest }) => (
  <section style={{ marginBottom: 4, width: '100%' }}>
    <p className={styles.ColorText} {...rest}>
      {text}
    </p>
  </section>
);

export const Heading = ({ title, ...rest }) => (
  <h3 className={styles.Heading} {...rest}>
    {title}
  </h3>
);

export const Parragraph = ({ text, ...rest }) => (
  <p className={styles.Parragraph} {...rest}>
    {text}
  </p>
);

export const DateTxt = ({ text, ...rest }) => (
  <time className={styles.DateTxt} {...rest}>{text}</time>
)
