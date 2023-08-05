import Button from '@/components/UI/Button/Button';
import Layout from '@/components/Layout/Layout';
import { AppRoutes } from '@/constants';
import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <Layout title="404 Not Found">
      <section className={`single-section-page ${styles.section}`}>
        <h2 className={styles.statusCode}>404</h2>
        <p className={`title ${styles.errorMessage}`}>Страница не найдена</p>
        <p className={styles.desc}>Упс... К сожалению такой страницы не существует!</p>
        <Button href={AppRoutes.MAIN}>&lsaquo; Вернутся на главную</Button>
      </section>
    </Layout>
  );
}
