import React from 'react';
import './App.css';
//#region aula 1 até 3
// import FirstComponent from './components/FirstComponent';
// import Counter from './components/Counter';
// import Calculator from './components/Calculator';
// import Inputs from './components/Inputs';
// import PageNameChange from './components/PageNameChange';
// import ConditionalRender from './components/ConditionalRender';
// import UsingSass from './components/UsingSass';
// import HeaderSass from './components/Header';
// import UseCounter from './components/UseCounter';
// import TodoApp from './components/TodoApp';
//#endregion

//#region aula 4
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
// import NotFoundPage from './pages/notFound';
//#endregion

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sobre' element={<AboutPage />} />
        {/* <Route path='*' element={<NotFoundPage />} /> */}
      </Routes>
    </>
  );
}

export default App;