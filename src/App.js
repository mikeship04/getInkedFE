import './App.css';
import { useEffect, useState } from 'react'
import Signup from './Components/Signup';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import AboutUs from './Components/AboutUs';
import Prizes from './Components/Prizes';
import HomePage from './Components/HomePage';
import AuthLogin from './Components/AuthLogin';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/pro-theme'
import '@fontsource/inter/variable.css'
import { Routes, Route } from "react-router-dom"
const ENDPOINT = process.env.NODE_ENV === 'production' ? 'https://getinkedapp.herokuapp.com/' : 'http://localhost:9292/'

function App() {
  const [user, setUser] = useState('')
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.purple },
    },
    theme,
  )

  useEffect(() => {
    let token = localStorage.token
    if(typeof token !== "undefined" && token.length > 1) {
      tokenLogin(token)
    } else {
      console.log('no token found, try logging in!')
    }
  },[])

  function tokenLogin(token) {
    fetch(`${ENDPOINT}/auto_login`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ jwt: token}),
    })
    .then((res) => res.json())
    .then((u) => setUser(u.username))
  }

  function handleLogout() {
    setUser('')
    localStorage.removeItem('token')
  }

  return (
    <ChakraProvider theme={myTheme}>
      <NavBar handleLogout={handleLogout} user={user}/>
      <Routes>
        <Route path='/Signup' element={<Signup setUser={setUser} end={ENDPOINT} />}></Route>
        <Route path='/Login' element={<Login user={user} setUser={setUser} end={ENDPOINT} />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/Prizes' element={<Prizes end={ENDPOINT} />}></Route>
        <Route path='/HomePage' element={<HomePage user={user} end={ENDPOINT} />}></Route>
        <Route path='/AuthLogin' element={<AuthLogin end={ENDPOINT} />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
