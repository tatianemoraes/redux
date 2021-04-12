// os reducers são as partes lógicas

import { Reducer } from "redux";
import produce from 'immer';
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: []
};

// função carrinho que retorna array vazio 
const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  // console.log(state); - retorna o estado inicial, []
  // console.log(action); - retorna o que vem em actions

  // produce é como se fosse armazenar todo o estado 
  // e repassar para outras páginas/components
  // é como se fosse propriedade de estado do context api
  // como se fosse apenas o provedor e não value
  // manipular sempre o draft (rascunho), pq é alterável (mutável)
  // já o estado é imutável
  return produce(state, draft => {
    switch(action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload; 

        const productInCartIndex = draft.items.findIndex(item =>
          item.product.id === product.id
        );

        if(productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product, 
            quantity: 1,
          });
        }

        break;
      }
      default: {
        return state;
      }
    }
  }); 
}

export default cart;

  //   return {
    //     ...state, 
    //     items: [
    //       ...state.items,
    //       {
    //         product, 
    //         quantity: 1,
    //       }
    //     ]
    //   };
    // }