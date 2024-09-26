// 상세 메뉴 모달 여부 저장하는 action
export const SetScreenState = (content) => {
  return {
    type : 'SET_SCREEN_STATE',
    content
  }
}

// 상세 메뉴 모달 여부 저장하는 action
export const SetMenuDetailModal = (content) => {
  return {
    type : 'SET__MENU_DETAIL_MODAL',
    content
  }
}

// 상세 메뉴 정보 저장하는 action 
export const SetMenuInfo = (content) => {
  return {
    type : 'SET_MENU_INFO',
    content
  }
}

// 장바구니 메뉴 정보 저장하는 action 
export const SetPayListInfo = (content) => {
  return {
    type : 'SET_PAY_LIST',
    content
  }
}

// 최종 결제 가격 정보 저장하는 action 
export const SetTotalPrice = (content) => {
  return {
    type : 'SET_TOTAL_PRICE',
    content
  }
}

// 최종 메뉴 갯수 정보 저장하는 action 
export const SetTotalCount = (content) => {
  return {
    type : 'SET_TOTAL_COUNT',
    content
  }
}


// 메뉴 최종 확인 모달 여부 저장하는 action
export const SetTotalMenuModal = (content) => {
  return {
    type : 'SET_TOTAL_MENU_MODAL',
    content
  }
}
// 결제 방식 선택 모달 여부 저장하는 action
export const SetPaymentModal = (content) => {
  return {
    type : 'SET_PAYMENT_MODAL',
    content
  }
}
// 카드 결제 모달 여부 저장하는 action
export const SetCardPayModal = (content) => {
  return {
    type : 'SET_CARD_PAY_MODAL',
    content
  }
}
// 영수증 출력 확인 모달 여부 저장하는 action
export const SetReceiptModal = (content) => {
  return {
    type : 'SET_RECEIPT_MODAL',
    content
  }
}