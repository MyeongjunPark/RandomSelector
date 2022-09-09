import styled from "styled-components";
import { useEffect, useState } from "react";
import LoadingFood from "./LoadingFood";
import "../css/fadein.css";
import { Link } from "react-router-dom";
const FoodName = styled.span`
  font-size: 60px;
  font-family: "anamone";
`;
const RefreshBtn = styled.button`
  margin-right: 10px;
`;

const foodArray = [
  "족발",
  "보쌈",
  "찜갈비",
  "낙곱새",
  "아구찜",
  "김치찜",
  "찜닭",
  "설렁탕",
  "닭볶음탕",
  "해물찜",
  "연탄갈비",
  "부대찌개",
  "돼지국밥",
  "순대국밥",
  "곱도리탕",
  "곱창",
  "닭도리탕",
  "감자탕",
  "돼지김치찌개",
  "찜갈비",
  "소고기해장국",
  "짜글이",
  "닭갈비",
  "낙곱새",
  "카레",
  "돈까스",
  "함박스테이크",
  "무침회",
  "회덮밥",
  "초밥",
  "육회 비빔밥",
  "텐동",
  "가츠동",
  "사케동",
  "규동",
  "라멘",
  "물회",
  "피자",
  "제육볶음",
  "삼겹살",
  "쪽갈비",
  "쭈꾸미볶음",
  "낙지볶음",
  "콩나물불고기",
  "국수",
  "파스타",
  "소고기",
  "리조또",
  "샐러드",
  "햄버거",
  "짜장면",
  "짬뽕",
  "중화비빔밥",
  "중화볶음밥",
  "마라탕",
  "탕수육",
  "야끼우동",
  "쌀국수",
  "밀면",
  "냉면",
  "우동",
  "한정식",
  "칼국수",
  "떡볶이",
  "충무김밥",
  "김밥",
  "타코야끼",
  "샌드위치",
  "토스트",
  "감바스",
  "돼지불백",
  "고갈비",
  "야끼소바",
  "메밀소바",
  "막창",
  "곱창",
  "대창",
  "순대",
  "오뎅",
  "양갈비",
  "양꼬치",
  "월남쌈",
  "샤브샤브",
  "나베",
  "스키야끼",
  "오코노미야끼",
];
const randomValue = foodArray[Math.floor(Math.random() * foodArray.length)];
const mentArray = ["이거 드세요.", "진짜 드실거죠?", "이건 어때요?", "이거 먹자!"];
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
        <LoadingFood />
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
