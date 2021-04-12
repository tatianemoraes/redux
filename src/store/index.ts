import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ICartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer';

export interface IState {
  cart: ICartState; 
}

// o store é o ato de pegar todos os reducers que já  
// estão combinados dentro de rootReducer
// após isso, crio  minha store 
// e para deixar acessível para todas as paginas de minha aplicação
// tenho q entrar no App, englobar o provider e receber store
const store = createStore(
  rootReducer, 
  composeWithDevTools()  
);

export default store;