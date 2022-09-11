import React from "react";
import styles from './styles.module.css'
import { ColorText, DateTxt, Heading, Parragraph } from "./utils";

const TextCard = (props) => {

  const { item, ...rest } = props;
  return (
    <article className={styles.TextCard} {...rest}>
      <section className={styles.TextCard__Content}>
        <ColorText text={item.category} />
        <Heading title={item.title} />
        <Parragraph text={item.content} />
        <Heading title={item.username} style={{ fontSize: '14px'}} />
        <DateTxt text={item.date} />
      </section>
    </article>
  )
}

export default TextCard;