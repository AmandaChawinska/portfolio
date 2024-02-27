import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section
      className="bg-bg-light relative z-[1] mt-30 rounded-lg p-10"
      id="skills"
    >
      <h2 className=" mb-9 text-4xl font-bold uppercase">
        My skillset includes
      </h2>
      <div className="flex flex-wrap gap-10">
        {skills.map((skill, id) => {
          return (
            <div key={id} className="flex flex-col items-center gap-3">
              <div className="flex size-[120px] items-center justify-center rounded-full bg-secondary">
                <img
                  className="w-[75px]"
                  src={getImageUrl(skill.imageSrc)}
                  alt={skill.title}
                />
              </div>
              <p className=" text-2xl font-medium">{skill.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
