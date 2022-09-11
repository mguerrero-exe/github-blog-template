import React from 'react';
import styles from './styles.module.css';
import { ColorText, DateTxt, Heading, Parragraph } from './utils';

const CardMini = (props) => {
  const { item, ...rest } = props;

  return (
    <article className={styles.CardMini} {...rest}>
      <section className={styles.CardMini__Content}>
        <section style={{ padding: '0 14px', maxWidth: 168 }}>
          <section className={styles.ImgContainer}>
            <svg
              aria-hidden='true'
              width='168'
              height='176'
              style={{visibility: 'hidden', pointerEvents: 'none'}}
            ></svg>
            <img src={item.image} alt={item.title} className={styles.Image} height="200" />
          </section>
        </section>
        <section style={{ padding: '0 14px', width: '66.6%'}}>
          <ColorText text={item.category}/>
          <Heading title={item.title} />
          <Parragraph text={item.content} />
          <Heading title={item.username} style={{fontSize: '14.65px'}} />
          <DateTxt text={item.date} />
        </section>
      </section>
    </article>
  );
};

export default CardMini;
