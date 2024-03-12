import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.projectCard}>
      <div className=" mb-6 overflow-hidden rounded-md ">
        {" "}
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className="max-h-[248px] min-h-[248px] w-full hover:scale-110"
        />
      </div>

      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-2xl">{description}</p>
      <ul className=" mt-4 flex flex-wrap gap-4">
        {skills.map((skill, id) => {
          return (
            <li
              key={id}
              className=" rounded-[100px] bg-dark px-6 py-1 text-2xl"
            >
              {skill}
            </li>
          );
        })}
      </ul>
      <div className=" mt-7 flex flex-wrap justify-around gap-5">
        {demo && (
          <a href={demo} className={styles.link} target="_blank">
            Demo
          </a>
        )}
        {source && (
          <a href={source} className={styles.link} target="_blank">
            Source
          </a>
        )}
      </div>
    </div>
  );
};
