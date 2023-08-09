import Layout from '@/components/Layout/Layout';
import Table from '@/components/UI/Table/Table';
import { A1_NUMBER } from '@/constants';
import { SERVICES } from '@/constants/services';
import { ServicesDataTypeGroup } from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import styles from './Service.module.scss';
import { useInView } from 'react-intersection-observer';
import Accordion from '@/components/UI/Accordion/Accordion';
import AccordionItem from '@/components/UI/Accordion/AccordionItem/AccordionItem';

interface ServicesCategoryPageProps {
  data: ServicesDataTypeGroup;
}

export default function ServicesCategoryPage({ data }: ServicesCategoryPageProps) {
  const { category, list } = data;
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <Layout title={category}>
      <section
        ref={ref}
        className={`container section ${styles.section} ${inView ? styles.section_animate : ''}`}
      >
        <h2 className={`title title_center ${styles.title}`}>{category}</h2>

        <p className={`subTitle ${styles.moreInfo}`}>
          За подробной информацией обращайтесь к нам по телефону:{' '}
          <span className={styles.number}>{A1_NUMBER}</span>
        </p>

        {list.length > 1 ? (
          <Accordion className={styles.accordion}>
            {list.map(({ id, title, services }) => (
              <AccordionItem key={id} title={title}>
                <Table
                  className={styles.tableInAccordion}
                  firstColTitle="Наименование услуги"
                  data={services}
                />
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <Table
            className={styles.table}
            firstColTitle="Наименование услуги"
            data={list[0]?.services ?? []}
          />
        )}
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { service: serviceRoute } = context.params ?? {};
  const service = SERVICES.find((service) => service.category === serviceRoute);

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: service,
    },
  };
};
