import { getImageUrl } from "../../utils";
import { email } from "./email.jsx";

export const Contact = () => {
  return (
    <footer id="contact" className="mb-5 mt-12 p-5 lg:mt-30">
      <h2 className="text-xs ">LET&apos;S TALK</h2>
      <address className="not-italic">
        <div className=" my-3 lg:my-6">
          <a className=" text-3xl font-black" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <p className="m-0 max-w-[670px] text-sm leading-[1.4] lg:text-lg">
          I&apos;m always open to nwe projects whenever I have the time. If you
          have a&nbsp; website, dashboard or mobile app in mind and need some
          help to&nbsp; make your ideas come to life, feel free to contact me.
        </p>
        <ul className=" mt-10 flex list-none gap-6 lg:mt-14">
          <li>
            <a href="https://github.com/AmandaChawinska">
              <img src={getImageUrl("contact/github.svg")} alt="Github icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/amanda-chawiñska-frontend-developer/">
              <img
                src={getImageUrl("contact/linkedin.svg")}
                alt="LinkedIn icon"
              />
            </a>
          </li>
        </ul>
      </address>
    </footer>
  );
};
