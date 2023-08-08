import styles from './BarkInfo.module.scss';
import { useInView } from 'react-intersection-observer';

export default function BarkInfo() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`container section ${styles.section} ${inView ? styles.section_animate : ''}`}
    >
      <h2 className={`title title_center ${styles.title}`}>Полезная информация</h2>

      <p>
        <b className={styles.mark}>Сосновая кора</b> – это натуральный мульчирующий материал.
        Применяется для агротехнических и ландшафтно-дизайнерских работ на приусадебных участках,
        клумбах, садах. Используется при оформлении парков, открытых площадок и дорожек.
        Мульчирование применяют под все плодовые и ягодные растения, и в первую очередь на
        новосадках.
      </p>

      <div>
        <h4 className={`title title_left ${styles.listTitle}`}>Сфера применения:</h4>

        <ul className={styles.list}>
          <li>
            <span className={styles.itemTitle}>Приусадебный участок.</span> Практически 100%
            сорняков не может пробиться сквозь толщу мульчи. Отдельные поросли со слабой корневой
            системой легко будут удаляться вручную. Вы избавитесь от необходимости быть привязанными
            к огороду и саду, т.к. значительно сократится число поливов. А в дождливую погоду не
            будете переживать, что растения загниют.
          </li>

          <li>
            <span className={styles.itemTitle}>Ландшафтный дизайн.</span> Любая дизайнерская идея
            так или иначе включает в себя оформление различных зон при помощи мульчи из сосны.
            Последние сразу приобретают красивый ухоженный вид и выглядят более выразителтно на фоне
            коры. Также покрытие применяют для отсыпки дорожек, детских площадок, зон отдыха…
          </li>

          <li>
            <span className={styles.itemTitle}>Интерьер.</span> Преимущество мульчи оценили не
            только ландшафтные дизайнеры. В современных квартирах и частных домах все чаще
            встречаются различные инсталляции из крупных кусков коры, в т.ч. ее используют для
            декоративной отделки стен.
          </li>
        </ul>
      </div>

      <div>
        <h4 className={`title title_left ${styles.listTitle}`}>Преимущества сосновой коры:</h4>

        <ul className={styles.list}>
          <li>Надежная защита почвы от потери влаги.</li>

          <li>Хорошее пропускание воздуха.</li>

          <li>Высокая защита корневой системы растений от промерзания в зимнее время года.</li>

          <li>Возможность сократить регулярность удобрения растений.</li>

          <li>
            Обеспечение высокого уровня подкисления почвы (при использовании компостированной
            сосновой мульчи). Тем не менее, в этом отношении крайне важно знать меру. Поэтому
            сосновый опад лучше перемешивать с соломой или с опавшими листьями. Также можно 1 раз в
            2 года добавлять в мульчу золу.
          </li>

          <li>Повышенная защита от грибковых заболеваний и вредителей.</li>

          <li>Натуральное происхождение – это 100% природный материал.</li>

          <li>
            Универсальность в использовании – кора сосны отлично подходит для использования в
            ландшафтном дизайне, например, на приусадебных участках, клумбах или в оформлении
            садовых дорожек.
          </li>
        </ul>
      </div>
    </section>
  );
}
