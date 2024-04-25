
import "./slide.css";
import { Link } from "react-router-dom";


const Slide = (props) => {
  return (
    <div className="card">
      <div className="background-image">
        <img src={props.url} className="product--image " alt="product" />
      </div>
      <div className="foreground-text">

        <Link to={`/${props.link}`}style={{ textDecoration: "none" }}>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </Link>
      </div>
    </div>
  );
};
export default Slide;