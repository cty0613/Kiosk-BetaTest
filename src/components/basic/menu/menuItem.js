import { useDispatch } from 'react-redux';
import gray_color_bg from '../../../assets/imgs/gray_color_bg.png'
import * as m from "../../../styles/basic/menuPageBasicStyle"
import { SetMenuDetailModal, SetMenuInfo } from '../../../redux/kioskAction';
import { useEffect, useState } from 'react';

const imageMapping = {
  nachoPlater: require("../../../assets/imgs/nacho.png"),
  buldak: require("../../../assets/imgs/bdgt.png"),
  Premium_buldak: require("../../../assets/imgs/p_bdgt.png"),
  sunrise: require("../../../assets/imgs/sunrise.png"),
  cuba: require("../../../assets/imgs/cuba.png"),
  po_spark: require("../../../assets/imgs/sr_sparkle.png"),
  grape_spark: require("../../../assets/imgs/cpd_sparkle.png")// 예시로 같은 이미지를 사용
};

function MenuItem({ name, price, explain, photoUrl }) {
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState(gray_color_bg); // 기본 이미지로 초기화

  const formattedPrice = price.toLocaleString('ko-KR');

  useEffect(() => {
    // photoUrl에 따라 이미지를 설정
    const imgSrc = imageMapping[photoUrl] || gray_color_bg; // 매핑된 이미지가 없으면 기본 이미지 사용
    setImageSrc(imgSrc);
  }, [photoUrl]);

  const openDetailModal = () => {
    const menuInfo = {
      menuName : name,
      menuPrice : price,
      menuExplain : explain,
      menuPhotoUrl : imageSrc
    }
    dispatch(SetMenuInfo(menuInfo));
    dispatch(SetMenuDetailModal(true));

  }

  return (
    <m.MenuItemBox 
      onClick={openDetailModal}
    >
      <img 
        src={imageSrc} 
        alt="음료 사진"
      />
      <h1 >{name}</h1>
      <p>{formattedPrice} 원</p>
    </m.MenuItemBox>
  )
}
export default MenuItem;  