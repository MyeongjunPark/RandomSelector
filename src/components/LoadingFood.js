import styled from "styled-components";

const LoadingImg = styled.div`
  font-family: "anamone";
  font-size: 30px;
  img {
    width: 300px;
    height: 200px;
    border-radius: 50px;
  }
`;

function Loading() {
  return (
    <div className="jumbotron d-flex align-items-center min-vh-100">
      <LoadingImg className="container text-center">
        <img src="img/FoodloadingImg.gif" alt="loadingImg" className="img-circle" />
        <div>음식 고르는 중...</div>
      </LoadingImg>
    </div>
  );
}

export default Loading;
