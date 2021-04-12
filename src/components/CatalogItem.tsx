import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC <CatalogItemProps> = ({ product }) => {

  // useDispatch é usado para manipular informações
  // adicionar, atualizar e deletar infos
  
  // useSelector serve apenas para trazer informações 

  // no useContext por padrão ele consegue fazer as 4 funções

  const dispatch = useDispatch();

  // useCallback foi utilizado para evitar recriar a todo momento
  // o botão q adiciona um novo produto
  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}

      <button 
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>
    </article>
  );
}

export default CatalogItem;