import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found page">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>THE ROAD<br /><em>ENDS HERE.</em></h1>
      <Link className="button button--light" to="/">Return home</Link>
    </div>
  );
}