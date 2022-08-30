import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
