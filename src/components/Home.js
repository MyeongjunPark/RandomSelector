import "../css/marque.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Copyright = styled.div`
  font-size: 11px;
  margin: 10px;
`;

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
        <hr />
        <a className="btn btn-default" href="https://github.com/MyeongjunPark" target="_blank">
          깃허브
        </a>
        <a className="btn btn-default" href="https://mjooon.tistory.com/" target="_blank">
          블로그
        </a>
        <a className="btn btn-default" href="https://bit.ly/3Q2Miuo" target="_blank">
          포트폴리오
        </a>
        <Copyright>이 페이지에는 카페24(주)이 제공한 "카페24 아네모네"가 적용되어 있습니다.</Copyright>
      </div>
    </div>
  );
}

export default Home;
