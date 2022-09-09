import "../css/marque.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Copyright = styled.div`
  font-size: 11px;
  margin: 10px;
`;
const BodyWarp = styled.div`
  position: relative;
`;
const LinkWrap = styled.div``;
const Wrap = styled.div`
  h1 {
    margin-bottom: 30px;
  }
  a {
    display: flex;
    margin: 10px;
    padding: 20px;
  }
`;
const BackgroundBox = styled.div`
  width: 100vw;
  height: 330px;
  background-color: #1abc9c;
  z-index: -1;
  position: absolute;
  left: 0px;
  top: 0px;
`;

function Home() {
  return (
    <BodyWarp>
      <Wrap style={{ fontFamily: "anamone" }} className="jumbotron d-flex align-items-center min-vh-100">
        <div className="container text-center">
          <BackgroundBox></BackgroundBox>
          <h1>
            RANDOM SELECTION
            <br />
            <span style={{ color: "#ecf0f1" }}>선택장애 파이팅!</span>
          </h1>

          <LinkWrap>
            <Link style={{ color: "#fff", backgroundColor: "#2c3e50" }} to="/city" className="btn btn-default btn-lg">
              어디 가지? Where shall we go?
            </Link>
            <Link style={{ color: "#fff", backgroundColor: "#2c3e50" }} to="/food" className="btn btn-default btn-lg">
              뭐 먹지? What do you eat?
            </Link>
            <Link style={{ color: "#fff", backgroundColor: "#2c3e50" }} to="/play" className="btn btn-default btn-lg">
              뭐 하지? What should we do?
            </Link>
          </LinkWrap>
          <hr />
          <a style={{ color: "#fff", backgroundColor: "#bdc3c7" }} className="btn btn-default" href="https://github.com/MyeongjunPark" target="_blank">
            깃허브 GitHub
          </a>
          <a style={{ color: "#fff", backgroundColor: "#bdc3c7" }} className="btn btn-default" href="https://mjooon.tistory.com/" target="_blank">
            블로그 Blog
          </a>
          <a style={{ color: "#fff", backgroundColor: "#bdc3c7" }} className="btn btn-default" href="https://bit.ly/3Q2Miuo" target="_blank">
            포트폴리오 Portfolio
          </a>
          <Copyright>이 페이지에는 카페24(주)이 제공한 "카페24 아네모네"가 적용되어 있습니다.</Copyright>
        </div>
      </Wrap>
    </BodyWarp>
  );
}

export default Home;
