import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className="container relative z-[1] mt-12 flex items-center justify-between gap-7">
      <img
        src={getImageUrl("hero/profile.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className="z-[1] flex flex-col items-start">
        <h1 className={styles.title}>Hi, I&apos;m Amanda</h1>
        <p className={styles.description}>
          I&apos;m a front end developer with 1 year of experience using React
          and NodeJS. Reach out if you&apos;d like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Hire Me
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
