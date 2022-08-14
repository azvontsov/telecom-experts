import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Подбери свое решение <br className="sm:block hidden" /> за несколько
        простых шагов.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Комплексная реализация от разработки концепции до ввода объекта в
        эксплуатацию.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
