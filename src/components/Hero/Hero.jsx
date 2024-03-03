import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <header className="relative z-[1] mt-12 flex items-center justify-around gap-7">
      <img
        src={getImageUrl("hero/profile.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className="z-[1] flex flex-col items-start">
        <div className="text-xs font-bold uppercase">This is</div>
        <h1 className={styles.title}>Amanda Chawinska</h1>
        <p className={styles.description}>
          I have been programming since 2020. I have more than one year
          experience in commercial projects. I actively engage in projects and
          try to deliver the best quality code possible. I am constantly
          educating myself more towards frontend, but I am also considering the
          fullstack path. My favorite technologies are React and Tailwind CSS,
          so I write projects with a component approach, even in Wordpress.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          <img src={getImageUrl("hero/emailIcon.png")} alt="Email icon" />
          Hire Me
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </header>
  );
};
