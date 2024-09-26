import {createGlobalStyle} from "styled-components";
import Pretendard_Black from "../assets/fonts/Pretendard-Black.woff"
import Pretendard_Bold from "../assets/fonts/Pretendard-Bold.woff"
import Pretendard_ExtraBold from "../assets/fonts/Pretendard-ExtraBold.woff"
import Pretendard_ExtraLight from "../assets/fonts/Pretendard-ExtraLight.woff"
import Pretendard_Light from "../assets/fonts/Pretendard-Light.woff"
import Pretendard_Medium from "../assets/fonts/Pretendard-Medium.woff"
import Pretendard_Regular from "../assets/fonts/Pretendard-Regular.woff"
import Pretendard_SemiBold from "../assets/fonts/Pretendard-SemiBold.woff"
import Pretendard_Thin from "../assets/fonts/Pretendard-Thin.woff"

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Pretendard-Black';
    src: url(${Pretendard_Black}) format('woff');
}   
@font-face {
    font-family: 'Pretendard-Bold';
    src: url(${Pretendard_Bold}) format('woff');
}
@font-face {
    font-family: 'Pretendard-ExtraBold';
    src: url(${Pretendard_ExtraBold}) format('woff');
}
@font-face {
    font-family: 'Pretendard-ExtraLight';
    src: url(${Pretendard_ExtraLight}) format('woff');
}
@font-face {
    font-family: 'Pretendard-Light';
    src: url(${Pretendard_Light}) format('woff');
}
@font-face {
    font-family: 'Pretendard-Medium';
    src: url(${Pretendard_Medium}) format('woff');
}
@font-face {
    font-family: 'Pretendard-Regular';
    src: url(${Pretendard_Regular}) format('woff');
}
@font-face {
    font-family: 'Pretendard-SemiBold';
    src: url(${Pretendard_SemiBold}) format('woff');
}
@font-face {
    font-family: 'Pretendard-Thin';
    src: url(${Pretendard_Thin}) format('woff');
}

*, *::before, *::after {
  margin : 0;
  padding : 0;
  box-sizing : border-box;

}
@media (min-width: 800px) {
  html {
    font-size : 62.5% // 1rem = 10px
  }
}
@media (min-width: 600px) and (max-width : 799px) {
  html {
    font-size : 45.5%;  // 1rem = 10px
  }
}

body {
  font-family : 'Pretendard-Medium';
	display: flex;
  margin : auto;
  background : ${props => props.theme.colors.colorMain};
  color : ${props => props.theme.colors.colorMain};
  list-style : none;
  height : 100vh;
  align-items : end;
  
  &::-webkit-scrollbar {
    display: none;
  }
}
`;

export default GlobalStyle;