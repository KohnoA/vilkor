import { useInView } from 'react-intersection-observer';
import styles from './MulchInfo.module.scss';

export default function MulchInfo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`container section single-section-page ${styles.section} ${
        inView ? styles.section_animate : ''
      }`}
    >
      <h2 className={`title title_left ${styles.title}`}>Мульчирующие изделия</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fuga voluptatem nihil,
        cumque optio modi? Soluta optio repellendus iusto. Suscipit incidunt voluptatum maiores
        inventore velit in error, dolores obcaecati quam illum fugit ipsum nihil beatae reiciendis
        illo distinctio. Quod aperiam architecto nisi voluptas quia quisquam placeat incidunt,
        quibusdam illo tempora sapiente optio quasi sed porro similique assumenda accusamus quidem
        quaerat autem ipsam! Perspiciatis dicta totam hic sunt deserunt quae doloribus cumque,
        deleniti magnam. Libero dicta velit, quas, aperiam excepturi itaque nulla iure temporibus
        tempora suscipit alias laudantium, veritatis repudiandae. Eveniet ducimus, doloremque ad
        cumque tenetur quas voluptate. Non, excepturi vero!
      </p>
    </section>
  );
}
