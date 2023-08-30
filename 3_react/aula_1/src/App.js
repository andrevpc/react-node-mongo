import React from 'react';
import './App.css';
//#region aula 1 até 3
// import FirstComponent from './components/FirstComponent';
import Counter from './components/Counter';
import Calculator from './components/Calculator';
import Inputs from './components/Inputs';
import PageNameChange from './components/PageNameChange';
import ConditionalRender from './components/ConditionalRender';
import UsingSass from './components/UsingSass';
import HeaderSass from './components/Header';
import UseCounter from './components/UseCounter';
import TodoApp from './components/TodoApp';
//#endregion

//#region aula 4
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ClassesPage from './pages/ClassesPage'
//#endregion

//#region aula 5
import { CounterProvider } from './context/counter';
import CounterPage from './pages/CounterPage'

//#region desafio
import { StatementProvider } from './context/statement';
import StatementPage from './pages/StatementPage'
import AddPayment from './components/AddPayment';
//#endregion

//#endregion

function App() {
  return (
    <>
      <CounterProvider>
        <StatementProvider>
          <NavBar />
          <Routes>
            <Route path='/counter' element={<Counter />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/inputs' element={<Inputs />} />
            <Route path='/page' element={<PageNameChange />} />
            <Route path='/conditional' element={<ConditionalRender />} />
            <Route path='/saas' element={<UsingSass />} />
            <Route path='/header' element={<HeaderSass />} />
            <Route path='/useCounter' element={<UseCounter />} />
            <Route path='/todo' element={<TodoApp />} />
            <Route path='/aulas' element={<ClassesPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/sobre' element={<AboutPage />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/counter-page' element={<CounterPage />} />
            <Route path='/extrato' element={<StatementPage />} />
            <Route path='/add-payment' element={<AddPayment />} />
          </Routes>
        </StatementProvider>
      </CounterProvider>
    </>
  );
}

export default App;