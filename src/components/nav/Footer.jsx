import { Link } from "react-router-dom";

import { IconGithub } from "../Icons";

export function Footer() {
  return (
    <footer className={`flex gap-14 p-10 bg-[#023047] text-[white]`}>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link className="link link-hover" to={"aboutUs"}>
          About us
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>

        <Link to={"https://github.com/project-paperback"} target="_blank">
          <IconGithub width={"2rem"} height={"2rem"} />
        </Link>
      </nav>
    </footer>
  );
}
