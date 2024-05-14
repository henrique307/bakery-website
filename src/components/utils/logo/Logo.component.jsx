import { Link } from "react-router-dom";
import "./logo.scss";

export function Logo() {
  return (
    <h1 className="logo text-2xl">
      <Link to="/">
        Cakes<span className="text-red-500">&</span>Sweets
      </Link>
    </h1>
  );
}
