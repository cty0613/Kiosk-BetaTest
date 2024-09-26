import React, { useEffect, useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PrintComponent = React.forwardRef((props, ref) => {
  

  return (
    <div ref={ref}>
      <h1>주문 내역</h1>
      
        <p>주문 데이터를 불러오는 중...</p>
      
    </div>
  );
});

export default PrintComponent;