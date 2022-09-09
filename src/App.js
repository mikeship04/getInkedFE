import './App.css';
import { useEffect } from 'react'
import Signup from './Components/Signup';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import AboutUs from './Components/AboutUs';
import Prizes from './Components/Prizes';
import HomePage from './Components/HomePage';
import AddArtist from './Components/AddArtist';
import Profile from './Components/Profile';
import ProfileEdit from './Components/ProfileEdit';
import BuyTicketPage from './Components/BuyTicketPage';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/pro-theme'
import '@fontsource/inter/variable.css'
import { Routes, Route, useNavigate } from "react-router-dom"
import { userState } from './Components/atom';
import {
  useSetRecoilState,
} from 'recoil';
const ENDPOINT = process.env.NODE_ENV === 'production' ? 'https://getinkedapp.herokuapp.com/' : 'http://localhost:9292/'

function App() {
  let navigate = useNavigate()
  const setUserState = useSetRecoilState(userState)
  const myTheme = extendTheme(
    {
      colors: { ...theme.colors, brand: theme.colors.purple },
    },
    theme,
  )

  useEffect(() => {
    let token = localStorage.token
    if(typeof token !== 'undefined' && token.length > 1) {
      tokenLogin(token)
    } else {
      console.log('no token found, try logging in!')
    }
    // eslint-disable-next-line
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
    .then((u) => setUserState(u))
  }

  function handleLogout() {
    setUserState('')
    localStorage.removeItem('token')
    navigate('/Login')
  }

  return (
    <ChakraProvider theme={myTheme}>
      <NavBar handleLogout={handleLogout}/>
      <Routes>
        <Route path='/Signup' element={<Signup end={ENDPOINT} />}></Route>
        <Route path='/Login' element={<Login end={ENDPOINT} />}></Route>
        <Route path='/Profile' element={<Profile end={ENDPOINT} />}></Route>
        <Route path='/ProfileEdit' element={<ProfileEdit end={ENDPOINT} />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/BuyTickets' element={<BuyTicketPage end={ENDPOINT} />}></Route>
        <Route path='/Prizes' element={<Prizes end={ENDPOINT} />}></Route>
        <Route path='/HomePage' element={<HomePage end={ENDPOINT} />}></Route>
        <Route path='/AddArtist' element={<AddArtist end={ENDPOINT} />}></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
