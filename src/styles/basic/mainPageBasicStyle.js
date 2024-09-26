import styled from "styled-components";

export const KioskStartContainer = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    background-color : #BE9367;
    padding-top : 10rem;
    img {
      width : 60rem;
      border-radius : 5rem;
    }

    h1 {
      margin : 0 3rem;
      font-size : 7rem;
      line-height : 11rem;
      text-align: center;
      span {
        color : ${props => props.theme.colors.blue1};
      }
    }
    p {
      margin : 0 3rem;
      font-size : 4rem;
      line-height : 6rem;
      text-align: center;
      span {
        color : ${props => props.theme.colors.blue1};
      }
    }
    .info-test {
      margin : 0 3rem;
      font-size : 2.5rem;
      line-height : 5rem;
      text-align: center;
      span {
        color : ${props => props.theme.colors.blue1};
      }
    }
    button {
      width : 47.7rem;
      height : 27.4rem;
      font-size : 6rem;
      background : ${props => props.theme.colors.blue1};
      color : ${props => props.theme.colors.colorBg};
      border : none;
      border-radius : 3rem;
      cursor : pointer;
      margin-bottom : 20rem;
    }
`
export const KioskMainContainer = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    background-color : #BE9367;
    h1 {
      font-size : 10rem;
    }
`
export const startBtnContainer = styled.div `
    width : 100%;
    display : flex;
    justify-content : space-around;
    align-items: end;
    margin : 0 0 13rem 0;
    button {
      width : 47.7rem;
      height : 27.4rem;
      font-size : 6rem;
      background : ${props => props.theme.colors.blue1};
      color : ${props => props.theme.colors.colorBg};
      border : none;
      border-radius : 3rem;
      cursor : pointer;
    }
`
export const MenuHeader = styled.div`
    width : 100vw;
    height : 8rem;
    display : flex;
    justify-content : space-around;
    align-items: start;
    margin-top : 2rem;
`

export const ScreenBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 4rem;
  margin-top: 2rem;

  button {
    width: 15.9rem;
    height: 4.8rem;
    color: ${props => props.theme.colors.colorBg};
    background-color: ${props => props.theme.colors.gray6};
    font-size: 2.5rem;
    font-family : 'Pretendard-Medium';
    margin: 0 0.5rem;
    border: none;
    border-radius: 5rem;

    &.active {
      background-color: ${props => props.theme.colors.blue1};
    }
  }
`;
export const languageBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 4rem;
  margin-top: 2rem;

  button {
    width: 14.2rem;
    height: 4.8rem;
    color: ${props => props.theme.colors.colorBg};
    background-color: ${props => props.theme.colors.gray2};
    font-size: 2.5rem;
    font-family : 'Pretendard-Medium';
    margin: 0 0.5rem;
    border: none;
    border-radius: 5rem;

    &.active {
      background-color: ${props => props.theme.colors.blue1};
    }
  }
`;