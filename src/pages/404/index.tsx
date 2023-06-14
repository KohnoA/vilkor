import Button from '@/components/UI/Button/Button';
import Layout from '@/components/UI/Layout/Layout';
import { AppRoutes } from '@/constants';
import styles from './NotFound.module.scss';
import Texture from '@/components/UI/Texture/Texture';

export default function NotFound() {
  return (
    <Layout title="404 Not Found">
      <Texture>
        <section className={`single-section-page ${styles.section}`}>
          <h2 className={`title_center ${styles.statusCode}`}>404</h2>
          <p className={`title ${styles.errorMessage}`}>Страница не найдена</p>
          <p className={styles.desc}>Упс... К сожалению такой страницы не существует!</p>
          <Button href={AppRoutes.MAIN}>&lsaquo; Вернутся на главную</Button>
        </section>
      </Texture>
    </Layout>
  );
}
