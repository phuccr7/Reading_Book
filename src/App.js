import { Routes, Route } from 'react-router-dom'
import Header from "./components/header/Header";
import Admin from './pages/Admin';
import Home from "./pages/Home";
import User from "./pages/User";
import SidebarAdmin from './components/sidebar/SidebarAdmin';
import BookDetail from "./pages/BookDetail";
import Comment from "./components/comment/Comment"
import ReadBook from './components/readBook/readbook';
import "./style/GlobalStyle.js"
import { StoreContext } from "./utils/Store";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (



    <>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/user/*' element={<User />} />
        {/* <Route path='/ad' element={<SidebarAdmin />} /> */}
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/read' element={<ReadBook />} />

      </Routes>
    </>
  );
}

export default App;
