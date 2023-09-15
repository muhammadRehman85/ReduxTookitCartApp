import  Home  from './pages/Home';
import  Cart  from './pages/Cart';
import './App.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
   
     <BrowserRouter>
     <Provider store={store}>
     <Routes>
      <Route path='/'element={<Home></Home>}></Route>
      <Route path='/cart'element={<Cart/>}></Route>
      </Routes>
      </Provider>
     </BrowserRouter>
  );
}

export default App;
