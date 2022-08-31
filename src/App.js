import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import AboutUs from './Components/AboutUs';
import Prizes from './Components/Prizes';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/pro-theme'
import '@fontsource/inter/variable.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.purple },
    },
    theme,
  )

  return (
    <ChakraProvider theme={myTheme}>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/Signup' element={<Signup theme={myTheme}/>}></Route>
        <Route path='/Login' element={<Login theme={myTheme}/>}></Route>
        <Route path='/AboutUs' element={<AboutUs theme={myTheme}/>}></Route>
        <Route path='/Prizes' element={<Prizes theme={myTheme}/>}></Route>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
