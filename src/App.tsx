import { Provider } from 'react-redux';

import store from './store';

import Catalog from './components/Catalog';
import Cart from './components/Cart';


function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;

// o provider tem o objetivo de dispoibiliar toda a store para todas
// as paginas
// igual o context Api, a diferença é que no redux
// existe apenas 01 provider
// já no context api, a cada contexto criado
// deve englobar onde será acessível
