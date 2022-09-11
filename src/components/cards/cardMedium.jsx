import React from 'react';
import styles from './styles.module.css';
import { ColorText, DateTxt, Heading, Parragraph } from './utils';

const CardMedium = (props) => {
  const { item, ...rest } = props;
  return (
    <article className={styles.CardMedium} {...rest}>
      <section className={styles.CardMedium__Content}>
        <section className={styles.ImgContainer}>
          <svg
            aria-hidden='true'
            width='395'
            height='310'
            style={{ visibility: 'hidden', pointerEvents: 'none', height: 'auto !important' }}
          ></svg>
          <img src={item.image} alt={item.title} className={styles.Image} width='780' height='440' />
        </section>
        <ColorText text={item.category} />
        <Heading title={item.title} />
        <Parragraph text={item.content} />
        <Heading title={item.username} />
        <DateTxt text={item.date} />
      </section>
    </article>
  );
};

export default CardMedium;
