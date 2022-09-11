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
        <Heading title={item.title} style={{ fontSize: '32px' }} />
        <Parragraph text={item.content} />
        <section style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
          <Heading title={item.username} style={{ marginRight: 10}} />
          <DateTxt text={item.date} style={{ marginTop: -5}} />
        </section>
      </section>
    </article>
  );
};

export default CardMedium;
