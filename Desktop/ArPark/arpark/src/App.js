import styled from "styled-components";
import "./App.css";
import Webcam from "react-webcam";
import React, { useRef, useCallback } from "react";
import { useState } from "react";

// 헤더 스타일 정의
const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #9acd32;
  justify-content: space-around;
  height: 60px;
  border-radius: 15px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 630px;
`;
// 푸터 스타일 정의
const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9acd32;
  height: 60px;
  border-radius: 15px;
`;

const CameraApp = ({ webcamRef }) => {
  const [facingMode, setFacingMode] = useState("user"); // 초기값은 전면 카메라

  // 캡쳐 버튼을 클릭할 때 호출되는 함수
  const switchCamera = useCallback(() => {
    setFacingMode(facingMode === "user" ? "environment" : "user");
  }, [facingMode]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // 콘솔에 이미지 데이터 출력 (실제로 사용하려면 이 데이터를 다른 곳에 전달해야 함)
    console.log(imageSrc);
  }, [webcamRef]);

  return (
    <div>
      {/* 웹캠 화면 표시 */}
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      {/* 캡쳐 버튼 */}
      <button onClick={capture}>캡쳐</button>
    </div>
  );
};

function App() {
  const webcamRef = useRef(null); // webcamRef 선언
  return (
    <div className="App">
      <Header>
        <div className="place">어린이대공원</div>
        <div className="spec_place">어린이대공원 동물원</div>
      </Header>
      <Content>
        <div className="Content">
          {/* <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode: facingMode }}
        />
        {/* 캡쳐 버튼 */}
          <button onClick={webcamRef.capture}>캡쳐</button>
        </div>
      </Content>

      <Footer>
        <div className="Footer">푸터 내용</div>
      </Footer>
    </div>
  );
}

export default App;
