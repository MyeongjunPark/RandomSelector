import "../css/marque.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ fontFamily: "anamone" }} className="jumbotron d-flex align-items-center min-vh-100">
      <div className="container text-center">
        <h2>
          뭐 먹지?
          <br />
          <small className="text-muted">RANDOM FOOD</small>
        </h2>

        <div className="marquee">
          <div className="outer">
            <div className="inner">
              <span className="content">뭐먹지?뭐먹지?뭐먹지?뭐먹지?뭐먹지?뭐먹지?뭐먹지?</span>
              <span className="content">뭐먹지?뭐먹지?뭐먹지?뭐먹지?뭐먹지?뭐먹지?뭐먹지?</span>
            </div>
          </div>
        </div>

        <Link to="/random" className="btn btn-success btn-lg">
          뭐 먹지?
        </Link>
      </div>
    </div>
  );
}

export default Home;
