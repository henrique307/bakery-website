import { Link } from "react-router-dom";
import "./logo.scss";

export function Logo() {
  return (
    <h1 className="logo text-xl w-40 flex">
      <Link to="/">
        Cakes<span className="text-red-500">&</span>Sweets
      </Link>
    </h1>
  );
}
