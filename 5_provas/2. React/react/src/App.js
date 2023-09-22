import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import CEP from './pages/CEP';
import { DarkModeProvider } from './context/darkMode';
import { AlertProvider } from './context/alert';

function App() {
  return (
    <>
      <DarkModeProvider>
        <AlertProvider>
          <NavBar />
          <Routes>
            <Route path='/cep' element={< CEP />} />
            <Route path='/sobre' element={< About />} />
            <Route path='*' element={< NotFound />} />
          </Routes>
        </AlertProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;