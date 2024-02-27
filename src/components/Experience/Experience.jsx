import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className="mt-20" id="experience">
      <h2 className=" mb-9 text-4xl font-bold uppercase">Experience</h2>
      <div className="">
        <ul className="flex flex-col gap-10">
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  className="size-25 rounded-[50%]"
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3 className=" text-3xl font-medium">{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p className=" text-xl font-light">{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul className=" list-disclosureClosed ml-4 mt-2 list-inside text-2xl">
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
