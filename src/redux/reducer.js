// 초기 State 값
export const INITIAL_STATE = {
  screenState : 'basic',
  menuDetailModalState : false,
  checkMenuModalState : false,
  paymentSelectModalState : false,
  cardPayModalState : false,
  receiptModalState : false,
  menuInfo : {

  },
  shoppingBagList : [

  ],
  totalPrice : 0,
  totalMenuCount : 0,

};

export const Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_SCREEN_STATE' : 
      return {
        ...state,
        screenState: action.content
      };
    case 'SET__MENU_DETAIL_MODAL' : 
      return {
        ...state,
        menuDetailModalState: action.content
      };
    case 'SET_TOTAL_MENU_MODAL' : 
      return {
        ...state,
        checkMenuModalState: action.content
      };
    case 'SET_PAYMENT_MODAL' : 
      return {
        ...state,
        paymentSelectModalState: action.content
      };
    case 'SET_CARD_PAY_MODAL' : 
      return {
        ...state,
        cardPayModalState: action.content
      };
    case 'SET_RECEIPT_MODAL' : 
      return {
        ...state,
        receiptModalState: action.content
      };
    case 'SET_MENU_INFO' : 
      return {
        ...state,
        menuInfo: action.content
      };
    case 'SET_PAY_LIST' : 
      return {
        ...state,
        shoppingBagList: action.content,
      };
    case 'SET_TOTAL_PRICE' : 
      return {
        ...state,
        totalPrice: action.content,
      };
    case 'SET_TOTAL_COUNT' : 
      return {
        ...state,
        totalMenuCount: action.content,
      };
    default: 
      return state;
  }
};