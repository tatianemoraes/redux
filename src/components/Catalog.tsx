import React, { useEffect, useState } from 'react';
import { IProduct } from '../store/modules/cart/types';
import api from '../services/api';
import CatalogItem from './CatalogItem';

const Catalog: React.FC = () => {
  // useDispatch para fazer alterações
  // const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
  }, [])
  
  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
}

export default Catalog;

// useSeletor para pegar estado dentro do redux
// é parecido com useContext 
// ele chama o contexto
// const catalog = useSelector(state => state);
// console.log(catalog);