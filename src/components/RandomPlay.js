import styled from "styled-components";
import { useEffect, useState } from "react";
import LoadingPlay from "./LoadingPlay";
import "../css/fadein.css";
import { Link } from "react-router-dom";
const FoodName = styled.span`
  font-size: 60px;
  font-family: "anamone";
`;
const RefreshBtn = styled.button`
  margin-right: 10px;
`;

const playArray = [
  "보드게임",
  "카페 가기",
  "맛집투어",
  "공원 산책",
  "넷플릭스",
  "피크닉",
  "캠핑",
  "등산",
  "트래킹",
  "맛집 웨이팅",
  "아이쇼핑",
  "놀이공원",
  "방탈출 카페",
  "아이스링크",
  "드라이브",
  "보드게임 카페",
  "그림 그리기",
  "독서",
  "기차여행",
  "피시방",
  "스냅사진 찍기",
  "인생네컷",
  "연극 관람",
  "뮤지컬 관람",
  "전시 관람",
  "옷 구경",
  "야구 직관",
  "축제 가기",
  "여행 계획 짜기",
];
const randomValue = playArray[Math.floor(Math.random() * playArray.length)];
const mentArray = ["이건 어때요?", "재밌겠네요!", "이런 것도 한 번쯤...", "색다른데요?"];
const randomMent = mentArray[Math.floor(Math.random() * mentArray.length)];

function Random() {
  const [alert, alertSet] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      alertSet(false);
    }, 3000);
  });
  const reloadFn = () => {
    window.location.reload();
  };

  return (
    <div>
      {alert === true ? (
        <LoadingPlay />
      ) : (
        <div className="fade-in-box">
          <div className="jumbotron d-flex align-items-center min-vh-100">
            <div className="container text-center">
              <h3>{randomMent}</h3>
              <FoodName>{randomValue}</FoodName>
              <br />
              <RefreshBtn style={{ backgroundColor: "#2c3e50", color: "#fff" }} className="btn btn-default btn-lg" onClick={reloadFn}>
                다시 돌리기
              </RefreshBtn>
              <Link style={{ backgroundColor: "#2c3e50", color: "#fff" }} className="btn btn-default btn-lg" to="/">
                홈
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Random;
