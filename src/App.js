import { useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './reset.css';
import './style/header.css'

import Main from './page/main'
import Tree from './page/growing'
import About from './page/about'
import Project from './page/project'
import Aesop from './page/aesop'
import Porsche from './page/porsche'
import Contact from './page/contact'
import ScrollTop from './ScrollTop'

function App() {
  return (
    <div>
      <BrowserRouter>
      <ScrollTop />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/growing" element={<Tree />}></Route>
            <Route path="/project" element={<Project />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/aesop" element={<Aesop />}></Route>
            <Route path="/porsche" element={<Porsche />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
