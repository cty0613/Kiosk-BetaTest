import { useNavigate } from "react-router-dom";
import * as m from "../styles/basic/mainPageBasicStyle";
import LanguageSelect from "../components/languageSelect";
import reTUroBAR from "../assets/imgs/reTUroBAR_thumb.jpeg"
import wow_img from "../assets/imgs/wowImg.png";
import axios from "axios";
import ScreenSelect from "../components/screenSelect";
import { useState } from "react";

function KioskStart() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // 로딩 상태 관리

  const moveToMain = () => {
    navigate("/basic");
  };

  return (
    <m.KioskStartContainer>
      <img src={reTUroBAR} alt="썸네일"/>
      <h1>
        <span>reTUro BAR</span>에 오신 것을<br />진심으로 환영합니다.<br />
      </h1>
      <p>
      해당 키오스크는 현재 홍익대학교 컴퓨터공학과<br />
      2024년도 2학기 졸업프로젝트 'HOIKS'팀의<br />
      <span>베타테스트</span> 용도로 운영되고 있습니다.<br />
      <span>다양한 모드</span>가 있으니, 체험해보세요 :)
      </p>
      <p className="info-test">
        주문 정보는 통계 및 추천 시스템의 데이터로 활용될 예정입니다.<br />
        키오스크로 주문할 경우, 주문 정보 사용에 동의하는 것으로 간주됩니다.<br />
      </p>
      {loading ? ( // 로딩 상태에 따라 로더 또는 버튼 표시
        <div className="loader loader--style2" title="1">
          <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="40rem" height="40rem" viewBox="0 0 50 50" style={{ enableBackground: 'new 0 0 50 50' }} xmlSpace="preserve">
            <path fill="#9A4BFF" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
              <animateTransform attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      ) : (
        <button 
          onClick={moveToMain}
        >
          주문하기
        </button>
      )}
    </m.KioskStartContainer>
  );
}

export default KioskStart;
