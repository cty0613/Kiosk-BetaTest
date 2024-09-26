import * as md from "../../../styles/low/modalLowStyle";
import nacho from '../../../assets/imgs/nacho.png'
import nacho_click from '../../../assets/imgs/nacho_click.png'
import ogamza from '../../../assets/imgs/ogamja.png'
import ogamza_click from '../../../assets/imgs/ogamza_click.png'
import cheetos from '../../../assets/imgs/chetos.png'
import cheetos_click from '../../../assets/imgs/cheetos_click.png'
import 양상추 from '../../../assets/imgs/cabb.png'
import 양상추_click from '../../../assets/imgs/cabb_click.png'
import onion from '../../../assets/imgs/onion.png'
import onion_click from '../../../assets/imgs/onion_click.png'
import tomato from '../../../assets/imgs/tomato.png'
import tomato_click from '../../../assets/imgs/tomato_click.png'
import cheeze from '../../../assets/imgs/cheese.png'
import cheeze_click from '../../../assets/imgs/cheeze_click.png'
import salsa from '../../../assets/imgs/salsa.png'
import salsa_click from '../../../assets/imgs/salsa_click.png'
import barbaque from '../../../assets/imgs/bbq.png'
import barbaque_click from '../../../assets/imgs/barbaque_click.png'
import hotsauce from '../../../assets/imgs/hot_sauce.png'
import hotsauce_click from '../../../assets/imgs/hotsauce_click.png'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetMenuDetailModal, SetPayListInfo } from "../../../redux/kioskAction";


function DetailMenuModal() {
  const dispatch = useDispatch();

  let menuInfoList = useSelector( (state)=>{ return state.menuInfo } );
  let shoppingBagList = useSelector( (state)=>{ return state.shoppingBagList } );
  const formattedPrice = menuInfoList.menuPrice.toLocaleString('ko-KR');
  const isNachoPlatter = menuInfoList?.menuName === "나쵸 플래터";


  const [quantity, setQuantity] = useState(1); // 수량 상태 추가
  const [totalPrice, setTotalPrice] = useState(formattedPrice); // 수량 상태 추가
  const [selectedChip, setSelectedChip] = useState('');
  const [selectedVeg, setSelectedVeg] = useState([]); // 배열로 변경
  const [selectedSauce, setSelectedSauce] = useState([]); // 배열로 변경

  const handleChipClick = (chip) => {
    if (selectedChip === chip) {
      setSelectedChip('');
    } else {
      setSelectedChip(chip);
    }
  };

  const handleVegClick = (veg) => {
    if (selectedVeg.includes(veg)) {
      setSelectedVeg(selectedVeg.filter(item => item !== veg)); // 이미 선택된 경우 제거
    } else if (selectedVeg.length < 3) {
      setSelectedVeg([...selectedVeg, veg]); // 최대 3개까지 추가
    }
  };

  const handleSauceClick = (sauce) => {
    if (selectedSauce.includes(sauce)) {
      setSelectedSauce(selectedSauce.filter(item => item !== sauce)); // 이미 선택된 경우 제거
    } else if (selectedSauce.length < 3) {
      setSelectedSauce([...selectedSauce, sauce]); // 최대 3개까지 추가
    }
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };

  const AddCartClick = () => {
    // const addMenu = {
    //   menuName: menuInfoList.menuName,
    //   quantity: quantity,
    //   perPrice : menuInfoList.menuPrice,
    //   totalPrice: totalPrice
    // };
  
    // dispatch(SetPayListInfo([...shoppingBagList, addMenu]));
    // dispatch(SetMenuDetailModal(false));

    const addMenu = {
      menuName: menuInfoList.menuName,
      selectedChip: selectedChip, // 선택한 과자 추가
      selectedVeg: selectedVeg, // 선택한 야채 추가
      selectedSauce: selectedSauce, // 선택한 소스 추가
      quantity: quantity,
      perPrice: menuInfoList.menuPrice,
      totalPrice: totalPrice
    };
  
    // 나쵸 플래터인지 확인
    const isNachoPlatter = menuInfoList.menuName === "나쵸 플래터";
  
    // 현재 장바구니에 같은 메뉴가 있는지 확인
    const existingMenuIndex = shoppingBagList.findIndex(item => item.menuName === menuInfoList.menuName);
  
    if (existingMenuIndex !== -1) {
      if (isNachoPlatter) {
        // 나쵸 플래터인 경우, 새로운 항목으로 추가
        dispatch(SetPayListInfo([...shoppingBagList, addMenu]));
      } else {
        // 나쵸 플래터가 아닌 경우, 수량 증가
        const updatedShoppingBagList = shoppingBagList.map((item, index) => {
          if (index === existingMenuIndex) {
            return {
              ...item,
              quantity: item.quantity + quantity, // 기존 수량에 추가
              totalPrice: (item.quantity + quantity) * item.perPrice // 총 가격 업데이트
            };
          }
          return item;
        });
        dispatch(SetPayListInfo(updatedShoppingBagList));
      }
    } else {
      // 장바구니에 같은 메뉴가 없는 경우
      dispatch(SetPayListInfo([...shoppingBagList, addMenu]));
    }
  
    dispatch(SetMenuDetailModal(false));
  };

  useEffect(()=> {
    const totalPrice = quantity*menuInfoList.menuPrice;
    setTotalPrice(totalPrice);
  }, [quantity]);

  return (
    <div>
      <md.DetailMenuContainer>
          <h2>세부사항을 선택해주세요.</h2>
          <div className="drink-detail">
            <img 
              src={menuInfoList.menuPhotoUrl} 
              alt="임시 사진"
            />
            <div className="drink-text">
              <h1>{menuInfoList.menuName}</h1>
              <p>{menuInfoList.menuExplain}</p>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <h3>수량</h3>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <button onClick={handleQuantityDecrement}>-</button>
                  <p className="count">{quantity}</p>
                  <button onClick={handleQuantityIncrement}>+</button>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          {isNachoPlatter ? (
            <>
              <h2>과자 선택 (택 1)</h2>
              <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
                <button 
                  className={`drink-option nacho active`}
                  onClick={() => handleChipClick('nacho_click')}
                >나쵸</button>
                <button 
                  className={`drink-option ogamza ${selectedChip === '오감자' ? 'active' : ''}`}
                  onClick={() => handleChipClick('오감자')}
                >오감자</button>
                <button 
                  className={`drink-option cheetos ${selectedChip === '치토스' ? 'active' : ''}`}
                  onClick={() => handleChipClick('치토스')}
                >치토스</button>
              </div>
              <h2>야채 선택 (택 3)</h2>
              <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
                {/* <button 
                  className={`drink-option onion ${selectedVeg === 'onion' ? 'active' : ''}`}
                  onClick={() => handleVegClick('onion')}
                ><img src={selectedVeg === 'onion' ? onion_click : onion} alt="작은 음료"/>양파</button> */}
                <button 
                  className={`drink-option onion ${selectedVeg.includes('양파') ? 'active' : ''}`}
                  onClick={() => handleVegClick('양파')}
                >양파</button>
                <button 
                  className={`drink-option tomato ${selectedVeg.includes('토마토') ? 'active' : ''}`}
                  onClick={() => handleVegClick('토마토')}
                >토마토</button>
                <button 
                  className={`drink-option 할라피뇨 ${selectedVeg.includes('할라피뇨') ? 'active' : ''}`}
                  onClick={() => handleVegClick('할라피뇨')}
                >할라피뇨</button>
                <button 
                  className={`drink-option 양상추 ${selectedVeg.includes('양상추') ? 'active' : ''}`}
                  onClick={() => handleVegClick('양상추')}
                >양상추</button>
              </div>
              <h2>소스 선택 (택 2~3)</h2>
              <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
                <button 
                  className={`drink-option cheeze ${selectedSauce.includes('치즈') ? 'active' : ''}`}
                  onClick={() => handleSauceClick('치즈')}
                >치즈</button>
                <button 
                  className={`drink-option salsa ${selectedSauce.includes('살사') ? 'active' : ''}`}
                  onClick={() => handleSauceClick('살사')}
                >살사</button>
                <button 
                  className={`drink-option barbaque ${selectedSauce.includes('바비큐') ? 'active' : ''}`}
                  onClick={() => handleSauceClick('바비큐')}
                >바비큐</button>
                {/* <button 
                  className={`drink-option hotsauce ${selectedSauce.includes('핫소스') ? 'active' : ''}`}
                  onClick={() => handleSauceClick('핫소스')}
                >핫소스</button> */}
              </div>
            </>
          ) : (
            <div style={{height:'50rem'}}>
              
            </div>
          )}
          <hr/>
          <h1 className="total-price">총 금액<p className="total-price-focus">{totalPrice.toLocaleString('ko-KR')}</p>원</h1>
          <div className="btnBox">
            <button 
              className="cancel" 
              onClick={() => dispatch(SetMenuDetailModal(false))}
              >취소</button>
            <button 
              className="order"
              onClick={AddCartClick}
            >주문하기</button>
          </div>

      </md.DetailMenuContainer>
    </div>
  )
}
export default DetailMenuModal;