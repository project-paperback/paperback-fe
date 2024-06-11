import { Link } from "react-router-dom";
import { IconGithub, IconLinkedin } from "../components/Icons";
export function AboutUs() {
  return (
    <div className="flex flex-col gap-10   text-center text-[1.2rem] px-2 lg:px-0">
      <div>
        <p>Thank you for visiting our project</p>
        <p>
          For more information about how you can get a copy, access the{" "}
          <Link
            className="underline"
            to={"https://github.com/project-paperback/paperback-fe"}
            target="_blank"
          >
            repository
          </Link>{" "}
          and follow the notes we left on the{" "}
          <Link
            className="underline"
            to={
              "https://github.com/project-paperback/paperback-fe?tab=readme-ov-file#readme"
            }
            target="_blank"
          >
            readme
          </Link>{" "}
          file
        </p>
      </div>
      <div className="lg:flex justify-center gap-[4rem]">
        <div className="">
          <h2>Riccardo Foti/ Software & Data Engineer</h2>
          <div className="flex gap-5 justify-center my-5">
            <Link
              to={"https://www.linkedin.com/in/riccardo-foti/"}
              target="_blank"
            >
              <IconLinkedin width={"2rem"} height={"2rem"} />
            </Link>
            <Link to={"https://github.com/Piggun"} target="_blank">
              <IconGithub width={"2rem"} height={"2rem"} />
            </Link>
          </div>
        </div>
        <div className="">
          <h2>Alfredo Galvez/ Software Developer</h2>
          <div className="flex gap-5 justify-center my-5">
            <Link
              to={"https://www.linkedin.com/in/alfredo-galvez-984047266/"}
              target="_blank"
            >
              <IconLinkedin width={"2rem"} height={"2rem"} />
            </Link>
            <Link to={"https://github.com/AlfredoGvz"} target="_blank">
              <IconGithub width={"2rem"} height={"2rem"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
