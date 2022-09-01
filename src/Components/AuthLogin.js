//state setstate ('')
//button to do a fetch?
//set data to whatever we get back
//we have our token, send with request
// functin fetchAuthorized(url) { do all the stuff} 
// headers: {
//  Authorization: `Bearer ${localStorage.getItem('token')}`
//}.then(res => res.json())
//logout onclick={e => localStorage.removeItem('token')}
//gh-pages github.com/gitname/react-gh-pages
import React, {useState} from 'react'
import useFetchAuth from './lib/useFetchAuth'

function AuthLogin({end}) {
    const [data, setData] = useState('')
    const fetchData = useFetchAuth(`${end}/me`)
    // const fetchUSer = useFetchAuth(`#{end}/whatever you wanna get)

    function handleFetchData() {
        fetchData().then((json) => setData(json.user.username))
    }

return (
    <div>
    <button onClick={handleFetchData}>fetch</button>
    <div>{data}</div>
    </div>
)
}

export default AuthLogin
