import styled from "styled-components";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import "../css/fadein.css";
import { Link } from "react-router-dom";
const FoodName = styled.span`
  font-size: 72px;
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
];
const randomValue = foodArray[Math.floor(Math.random() * foodArray.length)];
const mentArray = ["이거 드세요.", "진짜 드실거죠?", "그냥 먹자...", "와 이거 개존맛;"];
const randomMent = mentArray[Math.floor(Math.random() * mentArray.length)];

function Random() {
  const [alert, alertSet] = useState(true);
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      alertSet(false);
    }, 3000);
  });
  const reloadFn = () => {
    window.location.reload();
    const result = count + 1;
    setCount(result);
  };
  console.log(count);
  return (
    <div>
      {alert === true ? (
        <Loading />
      ) : (
        <div className="fade-in-box">
          <div className="jumbotron d-flex align-items-center min-vh-100">
            <div className="container text-center">
              <h3>{randomMent}</h3>
              <FoodName>{randomValue}</FoodName>
              <br />
              <RefreshBtn className="btn btn-success btn-lg" onClick={reloadFn}>
                찐막?
              </RefreshBtn>
              <Link className="btn btn-warning btn-lg" to="/">
                홈으로
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Random;
