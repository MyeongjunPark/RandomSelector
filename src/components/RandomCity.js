import styled from "styled-components";
import { useEffect, useState } from "react";
import Loading from "./LoadingCity";
import "../css/fadein.css";
import { Link } from "react-router-dom";
const FoodName = styled.span`
  font-size: 60px;
  font-family: "anamone";
`;
const SubName = styled.span`
  font-size: 40px;
  font-family: "anamone";
  color: #e84118;
`;
const SelectCity = styled.span`
  font-size: 24px;
  font-family: "anamone";
  color: #718093;
`;
const RefreshBtn = styled.button`
  margin-right: 10px;
  font-family: "anamone";
`;
const MentText = styled.h1`
  font-size: 18px;
  font-family: "anamone";
`;
const LinkWrap = styled.div``;

const cityArray = [
  "서울특별시",
  "부산광역시",
  "대구광역시",
  "인천광역시",
  "광주광역시",
  "대전광역시",
  "울산광역시",
  "세종특별자치시",
  "경기도",
  "강원도",
  "충청북도",
  "충청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주특별자치도",
];
const JeollaBukdo = [
  "전주시",
  "군산시",
  "익산시",
  "정읍시",
  "남원시",
  "김제시",
  "완주군",
  "진안군",
  "무주군",
  "장수군",
  "임실군",
  "순창군",
  "고창군",
  "부안군",
];
const JeollaNamdo = [
  "목포시",
  "여수시",
  "순천시",
  "나주시",
  "광양시",
  "담양군",
  "곡성군",
  "구례군",
  "고흥군",
  "보성군",
  "화순군",
  "장흥군",
  "강진군",
  "해남군",
  "영암군",
  "무안군",
  "함평군",
  "영광군",
  "장성군",
  "완도군",
  "진도군",
  "신안군",
];
const GyeongSangBukdo = [
  "포항시",
  "경주시",
  "김천시",
  "안동시",
  "구미시",
  "영주시",
  "영천시",
  "상주시",
  "문경시",
  "경산시",
  "군위군",
  "의성군",
  "청송군",
  "영양군",
  "영덕군",
  "청도군",
  "고령군",
  "성주군",
  "칠곡군",
  "예천군",
  "봉화군",
  "울진군",
  "울릉군",
];
const GyeongSangNamdo = [
  "창원시",
  "진주시",
  "통영시",
  "사천시",
  "김해시",
  "밀양시",
  "거제시",
  "양산시",
  "의령군",
  "함안군",
  "창녕군",
  "고성군",
  "남해군",
  "하동군",
  "산청군",
  "함양군",
  "거창군",
  "합천군",
];
const ChungcheongNamdo = [
  "천안시",
  "공주시",
  "보령시",
  "아산시",
  "서산시",
  "논산시",
  "계룡시",
  "당진시",
  "금산군",
  "부여군",
  "서천군",
  "청양군",
  "홍성군",
  "예산군",
  "태안군",
];
const ChungcheongBukdo = ["청주시", "충주시", "제천시", "보은군", "옥천군", "영동군", "증평군", "진천군", "괴산군", "음성군", "단양군"];
const GangwonCity = [
  "춘천시",
  "원주시",
  "강릉시",
  "동해시",
  "태백시",
  "속초시",
  "삼척시",
  "홍청군",
  "횡성군",
  "영월군",
  "평창군",
  "정선군",
  "철원군",
  "화천군",
  "양구군",
  "인제군",
  "고성군",
  "양양군",
];
const GyeonggiCity = [
  "수원시",
  "고양시",
  "용인시",
  "성남시",
  "부천시",
  "안산시",
  "화성시",
  "남양주시",
  "안양시",
  "평택시",
  "의정부시",
  "파주시",
  "시흥시",
  "김포시",
  "광명시",
  "광주시",
  "군포시",
  "이천시",
  "오산시",
  "하남시",
  "양주시",
  "구리시",
  "안성시",
  "포천시",
  "의왕시",
  "여주시",
  "양평군",
  "동두천시",
  "과천시",
  "가평군",
  "연천군",
];
const randomValue = cityArray[Math.floor(Math.random() * cityArray.length)];
const mentArray = ["여긴 어때요?", "가볼까요?", "좋을 것 같아요!", "여긴 뭐가 유명할까요?"];
const randomMent = mentArray[Math.floor(Math.random() * mentArray.length)];

function Random() {
  const [alert, alertSet] = useState(true);
  const [cityValue, setCityValue] = useState("");
  const [toggleBtn, setToggleBtn] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const randomCity = () => {
    setIsActive(false);
    if (randomValue === "경기도") {
      const randomCityChoose = GyeonggiCity[Math.floor(Math.random() * GyeonggiCity.length)];
      setCityValue(randomCityChoose);
    } else if (randomValue === "강원도") {
      const randomCityChoose = GangwonCity[Math.floor(Math.random() * GangwonCity.length)];
      setCityValue(randomCityChoose);
    } else if (randomValue === "충청북도") {
      const randomCityChoose = ChungcheongBukdo[Math.floor(Math.random() * ChungcheongBukdo.length)];
      setCityValue(randomCityChoose);
    } else if (randomValue === "충청남도") {
      const randomCityChoose = ChungcheongNamdo[Math.floor(Math.random() * ChungcheongNamdo.length)];
      setCityValue(randomCityChoose);
    } else if (randomValue === "전라북도") {
      const randomCityChoose = JeollaBukdo[Math.floor(Math.random() * JeollaBukdo.length)];
      setCityValue(randomCityChoose);
    } else if (randomValue === "전라남도") {
      const randomCityChoose = JeollaNamdo[Math.floor(Math.random() * JeollaNamdo.length)];
      setCityValue(randomCityChoose);
    } else if (randomValue === "경상북도") {
      const randomCityChoose = GyeongSangBukdo[Math.floor(Math.random() * GyeongSangBukdo.length)];
      setCityValue(randomCityChoose);
    } else if (randomValue === "경상남도") {
      const randomCityChoose = GyeongSangNamdo[Math.floor(Math.random() * GyeongSangNamdo.length)];
      setCityValue(randomCityChoose);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      alertSet(false);
    }, 3000);
    if (randomValue === "대구광역시") {
      setToggleBtn(false);
    } else if (randomValue === "광주광역시") {
      setToggleBtn(false);
    } else if (randomValue === "부산광역시") {
      setToggleBtn(false);
    } else if (randomValue === "울산광역시") {
      setToggleBtn(false);
    } else if (randomValue === "세종특별자치시") {
      setToggleBtn(false);
    } else if (randomValue === "서울특별시") {
      setToggleBtn(false);
    } else if (randomValue === "인천광역시") {
      setToggleBtn(false);
    } else if (randomValue === "대전광역시") {
      setToggleBtn(false);
    } else if (randomValue === "제주특별자치도") {
      setToggleBtn(false);
    }
  });
  const reloadFn = () => {
    window.location.reload();
  };

  return (
    <div>
      {alert === true ? (
        <Loading />
      ) : (
        <div className="fade-in-box">
          <div className="jumbotron d-flex align-items-center min-vh-100">
            <div className="container text-center">
              <MentText>{randomMent}</MentText>

              {isActive ? (
                <FoodName>{randomValue}</FoodName>
              ) : (
                <div className="fade-in-box">
                  <SelectCity>선택한 지역</SelectCity>
                  <br />
                  <SubName>{randomValue}</SubName>
                  <br />
                  <FoodName>{cityValue}</FoodName>
                </div>
              )}

              <br />
              <LinkWrap>
                <RefreshBtn style={{ backgroundColor: "#2c3e50", color: "#fff" }} className="btn btn-default btn-lg" onClick={reloadFn}>
                  다시 돌리기
                </RefreshBtn>
                {toggleBtn ? (
                  <RefreshBtn className="btn btn-danger btn-lg" onClick={randomCity}>
                    여기서 어디?
                  </RefreshBtn>
                ) : null}
                <Link style={{ color: "#fff", fontFamily: "anamone", backgroundColor: "#2c3e50" }} className="btn btn-default btn-lg" to="/">
                  홈
                </Link>
              </LinkWrap>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Random;
