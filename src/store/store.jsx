import { createStore } from "redux";

const intialState = {
  cartState: {
    items: [],
    totalAmount: 0,
  },
  showCartModal: false,
};

const reduxCartReducer = (state, action) => {
  if (action.type === "AddItem") {
    const newTotalAmount =
      state.cartState.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.cartState.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.cartState.items[existingCartItemIndex];

    if (existingCartItem) {
      let UpdatedexistingCartItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      let UpdatedItems = [...state.cartState.items];
      UpdatedItems[existingCartItemIndex] = UpdatedexistingCartItem;
      return {
        cartState: {
          items: UpdatedItems,
          totalAmount: newTotalAmount,
        },
        showCartModal: state.showCartModal,
      };
    } else {
      return {
        cartState: {
          items: state.cartState.items.concat(action.item),
          totalAmount: newTotalAmount,
        },
        showCartModal: state.showCartModal,
      };
    }
  }
  if (action.type === "RemoveItem") {
    const existingCartItemIndex = state.cartState.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.cartState.items[existingCartItemIndex];
    let updatedAmount = state.cartState.totalAmount - existingCartItem.price;
    if (existingCartItem.amount === 1) {
      return {
        cartState: {
          items: state.cartState.items.filter((item) => item.id !== action.id),
          totalAmount: updatedAmount,
        },
        showCartModal: state.showCartModal,
      };
    } else {
      let updateditem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      let UpdatedItems = [...state.cartState.items];
      UpdatedItems[existingCartItemIndex] = updateditem;

      return {
        cartState: {
          items: UpdatedItems,
          totalAmount: updatedAmount,
        },
        showCartModal: state.showCartModal,
      };
    }
  }
  if (action.type === "showCart") {
    return {
      cartState: {
        items: state.cartState.items,
        totalAmount: state.cartState.totalAmount,
      },
      showCartModal: true,
    };
  }
  if (action.type === "hideCart") {
    return {
      cartState: {
        items: state.cartState.items,
        totalAmount: state.cartState.totalAmount,
      },
      showCartModal: false,
    };
  }
  if (action.type === "clearCart") {
    return {
      cartState: {
        items: [],
        totalAmount: 0,
      },
      showCartModal: state.showCartModal,
    };
  }

  return intialState;
};

const store = createStore(reduxCartReducer);

export default store;
