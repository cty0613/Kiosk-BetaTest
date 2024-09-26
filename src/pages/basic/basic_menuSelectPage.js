import ShoppingBag from "../../components/basic/shoppingBag";
import MenuCategory from "../../components/basic/menu/menuCategory";
import LanguageSelect from "../../components/languageSelect";
import * as main from "../../styles/basic/mainPageBasicStyle";
import * as m from "../../styles/basic/menuPageBasicStyle";
import * as md from "../../styles/modalStyle";
import DetailMenuModal from "../../components/basic/menu/detailMenuModal";
import MenuCheckModal from "../../components/basic/menu/menuCheckModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetPayListInfo, SetTotalCount, SetTotalMenuModal, SetTotalPrice } from "../../redux/kioskAction";
import ReceiptModal from "../../components/basic/receiptModal";
import ScreenSelect from "../../components/screenSelect";


function BasicMenuSelect() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let menuDetailModalState = useSelector( (state)=>{ return state.menuDetailModalState } );
  let checkMenuModalState = useSelector( (state)=>{ return state.checkMenuModalState } );
  let receiptModalState = useSelector( (state)=>{ return state.receiptModalState } );
  let totalMenuCount = useSelector((state) => state.totalMenuCount);
  let totalPrice = useSelector((state) => state.totalPrice);
  const shoppingBagList = useSelector((state) => state.shoppingBagList);

  useEffect(() => {
    const updateTotalInfo = () => {
      const totalQuantity = shoppingBagList.reduce((acc, item) => acc + item.quantity, 0);
      const totalPriceValue = shoppingBagList.reduce((acc, item) => acc + item.totalPrice, 0);
      dispatch(SetTotalCount(totalQuantity));
      dispatch(SetTotalPrice(totalPriceValue));
    };
    updateTotalInfo();
  }, [shoppingBagList, dispatch]);

  

  const moveToCheckMenu = () => {
    dispatch(SetTotalMenuModal(true));
  }

  const moveToMain = () => {
    dispatch(SetPayListInfo([]));
    dispatch(SetTotalPrice(0));
    dispatch(SetTotalCount(0));
    navigate('/');

  }
  

  return (
      <div>
        {
          menuDetailModalState &&
          <md.ModalBackgroundContainer>
            <DetailMenuModal/>
          </md.ModalBackgroundContainer>
        }
        {
          checkMenuModalState &&
          <md.ModalBackgroundContainer>
            <MenuCheckModal/>
          </md.ModalBackgroundContainer>
        }
        {
          receiptModalState && 
          <md.ModalTopBackgroundContainer>
            <ReceiptModal />
          </md.ModalTopBackgroundContainer>
        }
        <m.MenuSelectContainer>
          <main.MenuHeader>
            <ScreenSelect/>
          </main.MenuHeader>
          <MenuCategory/>
          <div className="go_to_credit">
              <ShoppingBag/>
              <m.CurrentBagContainer>
              <h3 >선택 메뉴<p className="selected-menu">{totalMenuCount}</p>개</h3>
                <h3 >총 주문 금액 <p>{totalPrice.toLocaleString('ko-KR')}</p>원</h3>
                <button 
                  className="payBtn"
                  onClick={moveToCheckMenu}
                >
                  결제하기
                </button>
                <button 
                  className="backBtn"
                  onClick={moveToMain}
                >
                  처음부터 다시하기
                </button>
              </m.CurrentBagContainer>
          </div>
        </m.MenuSelectContainer>
      </div>
  )
}

export default BasicMenuSelect;