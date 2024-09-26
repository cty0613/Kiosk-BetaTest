import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import * as md from "../../styles/modalStyle";
import { SetPayListInfo, SetReceiptModal, SetTotalCount, SetTotalPrice } from "../../redux/kioskAction";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';

const ReceiptModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(8);
  const [receiptData, setReceiptData] = useState(null);
  const componentRef = useRef();

  // Fetch data from localStorage when component mounts
  useEffect(() => {
    // const data = localStorage.getItem('receiptData');
    // if (data) {
    //   setReceiptData(JSON.parse(data));
    // }

    const orderID = localStorage.getItem('orderID');
    const key_string = orderID;
    console.log("call key string: ", key_string);
    const storedData = localStorage.getItem(key_string);
    if (storedData) {
      setReceiptData(JSON.parse(storedData));
    }
  }, []);

  const NoReceipt = () => {
    dispatch(SetPayListInfo([]));
    dispatch(SetTotalPrice(0));
    dispatch(SetTotalCount(0));
    dispatch(SetReceiptModal(false));
    navigate('/');
  };

  const ReceiptPrint = () => {
    dispatch(SetPayListInfo([]));
    dispatch(SetTotalPrice(0));
    dispatch(SetTotalCount(0));
    dispatch(SetReceiptModal(false));
    navigate('/');
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
    @page {
      size: auto;
      margin: 1mm;
    }`,

  });

  // Automatically trigger print when receiptData is loaded
  useEffect(() => {
    if (receiptData) {
      handlePrint();
    }
  }, [receiptData]);

  // Countdown timer logic
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown -1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      NoReceipt();
    }
  }, [countdown]);

  // Component to display the receipt content
  const ReceiptContent = React.forwardRef((props, ref) => {
    const { data } = props;

    if (!data) {
      return null; // or a loading indicator
    }

    return (
      <div ref={ref} style={{ margin: '0 auto', padding: '0', fontFamily: 'Arial, sans-serif',  fontSize: '13px' }}>
        <h2>주문 번호: {data.orderNumber}</h2>
        <h3>주문 일시: {data.orderDateTime}</h3>
        <h3>포장 방식: {data.packaging}</h3>
        <br/>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '1px solid #000' }}>메뉴</th>
              <th style={{ borderBottom: '1px solid #000' }}>옵션</th>
              <th style={{ borderBottom: '1px solid #000' }}>수량</th>
              <th style={{ borderBottom: '1px solid #000' }}>가격</th>
            </tr>
          </thead>
          <tbody>
            {data.shoppingBagList.map((item, index) => (
              <tr style ={{height:'30px'}}key={index}>
                <td style={{verticalAlign: 'top'}}>{item.menuName}</td>
                <td style={{fontSize: '12px'}}>
                  {item.selectedChip && <p>{item.selectedChip}</p>}
                  {item.selectedVeg.length > 0 && <p>{item.selectedVeg.join(', ')}</p>}
                  {item.selectedSauce.length > 0 && <p>{item.selectedSauce.join(', ')}</p>}
                </td>
                <td>{item.quantity}</td>
                <td>{item.perPrice.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>


        <p>총 메뉴 수량: {data.TotalMenuCount}</p>
        <p>총 가격: {data.TotalPrice}원</p>
        <br/>
        <h4>주문서를 직원에게 제출해주세요!</h4>
        <br/>
      </div>
    );
  });

  return (
    <md.ReceiptModalContainer>
      <h1>[주문 완료]</h1>
      <br/>
      <h1>주문서 확인 후, 직원에게 제출해주세요!</h1>

      {/* Component to be printed */}
      <div style={{ display: 'none' }}>
        <ReceiptContent ref={componentRef} data={receiptData} />
      </div>

      <div className="btnBox">
        <p><span>{countdown}</span> 초 후 자동 초기화</p>
      </div>
    </md.ReceiptModalContainer>
  );
};

export default ReceiptModal;
