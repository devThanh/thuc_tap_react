import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const token = localStorage.getItem('access')

  const navigate = useNavigate()
  console.log('sdfds: ',token)
  const api = `https://thucannhanh-production.up.railway.app/admintoken`
axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
            navigate('/dashboard')
})
  // useEffect(()=>{
  //   const url = 'https://thucannhanh-production.up.railway.app/admintoken'
  //   fetch(url,{
  //     headers:{'Content-Type': 'application/json', Authorization:'Bearer' + localStorage.getItem('access')}
  //   })
  //     .then((data)=>{console.log('asd',data)})
  // })
  return (
    <div>Admin</div>
  )
}

export default Admin