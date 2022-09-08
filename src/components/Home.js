import "../css/marque.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Copyright = styled.div`
  font-size: 11px;
  margin: 10px;
`;
const TabMenu = styled.a`
  margin: 5px;
  margin-bottom: 15px;
`;

function Home() {
  return (
    <div style={{ fontFamily: "anamone" }} className="jumbotron d-flex align-items-center min-vh-100">
      <div className="container text-center">
        <TabMenu style={{ color: "#fff" }} className="btn btn-primary" href="https://myeongjunpark.github.io/RandomFood/">
          뭐 먹지?
        </TabMenu>
        <TabMenu onClick={() => alert(`'어디 가지?'는 현재 개발중입니다. 감사합니다!`)} style={{ color: "#fff" }} className="btn btn-primary">
          어디 가지?
        </TabMenu>
        <h2>
          뭐 하지?
          <br />
          <small className="text-muted">What are you going to do?</small>
        </h2>

        <div className="marquee">
          <div className="outer">
            <div className="inner">
              <span className="content">뭐하지?뭐하지?뭐하지?뭐하지?뭐하지?뭐하지?뭐하지?</span>
              <span className="content">뭐하지?뭐하지?뭐하지?뭐하지?뭐하지?뭐하지?뭐하지?</span>
            </div>
          </div>
        </div>

        <Link style={{ color: "#fff" }} to="/random" className="btn btn-warning btn-lg">
          뭐 하지?
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
