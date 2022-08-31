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

function AuthLogin({end}) {
    const [data, setData] = useState('')

    function fetchAuthorized(url) {
        return fetch(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((res) => res.json())
    }

    function fetchData() {
        fetchAuthorized(`${end}/me`).then((json) =>
        setData(JSON.stringify(json))
        )
        setData('whatever we get back')
    }

  return (
    <div>
    <button onClick={fetchData}>fetch</button>
    <div>{data}</div>
    </div>
  )
}

export default AuthLogin
