// as actions são como se fossem as propriedades acessíveis
// nas páginas/components
// conteudo enviado

import { IProduct } from './types';

export function addProductToCart(product: IProduct) {
  return {
    // o type é o case do switch do reducer
    // q deseja enviar
    // quando for chamar a lógica, chama o type
    type: 'ADD_PRODUCT_TO_CART',
    // payload é como se fosse o retorno 
    payload: {
      product,
    }
  };
}