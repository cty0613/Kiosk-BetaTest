import { useSelector, useDispatch } from "react-redux";
import * as m from "../../styles/low/menuPageLowStyle";
import { SetPayListInfo, SetTotalCount, SetTotalPrice } from "../../redux/kioskAction";
import delete_img from "../..//assets/imgs/delete.png";
import decrease_btn from "../../assets/imgs/decrease_btn.png";
import increase_btn from "../../assets/imgs/increase_btn.png";
import { useEffect, useState } from "react";

function ShoppingBag() {
  const dispatch = useDispatch();
  const shoppingBagList = useSelector((state) => state.shoppingBagList);

  const handleQuantityDecrement = (index) => {
    const updatedList = [...shoppingBagList];
    if (updatedList[index].quantity > 1) {
      updatedList[index].quantity--;
      updatedList[index].totalPrice = updatedList[index].perPrice * updatedList[index].quantity;

      const totalQuantity = shoppingBagList.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = shoppingBagList.reduce((acc, item) => acc + item.totalPrice, 0);
      dispatch(SetTotalPrice(totalPrice));
      dispatch(SetTotalCount(totalQuantity));
      dispatch(SetPayListInfo(updatedList));
    }
  };

  const handleQuantityIncrement = (index) => {
    const updatedList = [...shoppingBagList];
    if (updatedList[index].quantity >= 1) {
      updatedList[index].quantity++;
      updatedList[index].totalPrice = updatedList[index].perPrice * updatedList[index].quantity;

      const totalQuantity = shoppingBagList.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = shoppingBagList.reduce((acc, item) => acc + item.totalPrice, 0);
      dispatch(SetTotalPrice(totalPrice));
      dispatch(SetTotalCount(totalQuantity));
      dispatch(SetPayListInfo(updatedList));
    }
  };

  const handleDelete = (index) => {
    const updatedList = [...shoppingBagList];
    updatedList.splice(index, 1);
    dispatch(SetPayListInfo(updatedList));
  };
  useEffect(()=> {

  }, [])

  return (
    <m.SmallShoppingBag>
      {shoppingBagList.map((item, index) => (
        <m.SmallShoppingItem key={index}>
          <div className="menu-info">
            <span className="menu-name">{item.menuName}</span>
            <div className="quantity-info">
              <img className="updown-btn" src={decrease_btn} onClick={() => handleQuantityDecrement(index)} alt="감소" />
              <span className="quantity">{item.quantity}</span>
              <img className="updown-btn" src={increase_btn} onClick={() => handleQuantityIncrement(index)} alt="증가" />
            </div>
          </div>
          <span>{item.totalPrice.toLocaleString('ko-KR')}</span>
          <img src={delete_img} alt="메뉴 삭제 버튼" onClick={() => handleDelete(index)} />
        </m.SmallShoppingItem>
      ))}
    </m.SmallShoppingBag>
  );
}

export default ShoppingBag;
