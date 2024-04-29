import { useFetchData } from "./utilities/fetchInfo";

export function Experiment() {
  const { data, isPending, error } = useFetchData(
    "https://paperback-vy73.onrender.com/api"
  );

  return <div> {isPending ? <p>Pending</p> : <p>Data</p>}</div>;
}
