import React from 'react';
import { Heading, Parragraph } from '../cards/utils';
import styles from './changelog.module.css';

const ChanelogCard = (props) => {
  const { item, ...rest } = props;
  return (
    <article className={styles.ChanelogCard} {...rest}>
      <section className={styles.ChanelogCard__Content}>
        <div
          style={{
            top: 0,
            left: 0,
            position: 'absolute',
            border: `2px solid ${item.color}`,
            width: 12,
            height: 12,
            backgroundColor: '#f6f8fa',
            boxSizing: 'border-box',
            borderRadius: 12 / 2,
            marginTop: -8
          }}
        />
        <Heading title={item.title} />
        <Parragraph text={item.date} />
      </section>
    </article>
  );
};

const Changelog = () => {

  const items = [
    {
      title: 'New Audit Log events and event context',
      date: 'September 9, 2022',
      color: '#ea6cb6'
    },
    {
      title: 'GitHub Actions: Use the GITHUB_TOKEN with workflow_dispatch and repository_dispatch',
      date: 'September 9, 2022',
      color: '#cb74cb'
    },
    {
      title: 'Dependabot unlocks transitive dependencies for npm projects',
      date: 'September 9, 2022',
      color: '#ae7cdf'
    },
    {
      title: 'Custom repository role creation APIs are now available in public beta',
      date: 'September 9, 2022',
      color: '#8f83f3'
    },
  ]
  return (
    <section className={styles.Changelog}>
      <secction className={styles.Changelog__Heading}>
        <h2>Chanelog</h2>
        <Heading title={'View all changes'} style={{ fontWeight: '500', fontSize: '14px' }} />
      </secction>
      <section style={{ position: 'relative' }}>
        <section className={styles.Chanelog__WidgetLine} />
        <secction className={styles.Changelog__Wrapper}>
          {items.map((item, i) => <ChanelogCard item={item} key={i} />)}
          <ChanelogCard style={{ width: 0}} item={{ title: '', content: '', color: '#7a87ff'}} />
        </secction>
      </section>
    </section>
  );
};

export default Changelog;
