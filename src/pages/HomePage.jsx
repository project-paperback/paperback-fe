import { useContext } from "react";
import { UserContext } from "../utilities_&_custom_hooks/General";
import axios from "axios";

export function HomePage(props) {
  const salutations = useContext(UserContext);

  return (
    <div>
      Home
      {salutations ? <p>User logged</p> : <p>User out</p>}
      <button
        onClick={() => {
          axios
            .post("https://paperback-vy73.onrender.com/api/sign_out")
            .then(() => {
              props.setUser(null);
              localStorage.clear();
            });
        }}
      >
        log Out
      </button>
    </div>
  );
}
