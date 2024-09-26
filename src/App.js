import { Route, Routes, BrowserRouter } from 'react-router-dom'
import KioskMain from './pages/basic/basic_kioskMain'
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from './styles/globalStyle';
import BasicMenuSelect from './pages/basic/basic_menuSelectPage';
import LowVersionKioskMain from './pages/low/low_kioskMain';
import LowVersionMenuSelect from './pages/low/low_menuSelectPage';
import KioskStart from './pages/kioskStart';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>  
          <Routes>       
            <Route path='/' element={<KioskStart />} />
            <Route path='/basic' element={<KioskMain />} />
            <Route path='/basic/menu' element={<BasicMenuSelect />} />
            <Route path='/low' element={<LowVersionKioskMain />} />
            <Route path='/low/menu' element={<LowVersionMenuSelect />} />
          </Routes>
      </ThemeProvider> 
    </BrowserRouter>
  );
}

export default App;
