import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={() => navigate('/login')}>login</button>
    </div>
  )
}

export default Home