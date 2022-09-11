import React from 'react';
import styles from './styles.module.css';
import { ColorText, DateTxt, Heading, Parragraph } from './utils';

const CardMain = (props) => {
  const { item } = props;
  return (
    <article className={styles.CardMain}>
      <section className={styles.ImgContainer}>
        <svg aria-hidden='true' width='708' height='440' style={{ visibility: 'hidden', pointerEvents: 'none' }}></svg>
        <img src={item.image} alt={item.title} className={styles.Image} />
      </section>
      <ColorText text={item.category}/>
      <Heading
        title={item.title}
        style={{ letterSpacing: '-.03em', lineHeight: '52px', fontSize: 48 }}
      />
      <Parragraph text={item.content} />
      <section className={styles.Card__Author}>
        <img src={item.userProfilePicture} className={styles.Card__Profile} />
        <Heading title={item.username} style={{ fontSize: '14.65px', marginBottom: 0, marginLeft: 10}} />
        <DateTxt text={item.date} style={{ marginTop: 2, marginLeft: 10}} />
      </section>
    </article>
  );
};

export default CardMain;
