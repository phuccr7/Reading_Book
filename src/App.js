import {Routes, Route} from 'react-router-dom'
import Header from "./components/header/Header";
import Home from "./pages/Home";
import User from "./pages/User";

import "./style/GlobalStyle.js"
import { StoreContext } from "./utils/Store";
function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>

        <Route path='/user' element={<User/>}/>

      </Routes>
    </>
  );
}

export default App;
