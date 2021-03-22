import React, { useEffect, useState } from 'react';
import axios from 'axios'

import RandomList from './RandomList';
import AnotherComponent from './AnotherComponent';
import './stylesheet.css'

const App = () => {

  const [response, setResponse] = useState([])

  useEffect(() => {
    posts()
  }, [])

  const posts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
   setResponse(res.data)
  }
    
    
    const renderPosts = () => {
      return response.map(post => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>

          </div>
        )
      })
    }
    

    return (
    <div>
      Application
      <RandomList />  
      <AnotherComponent />
      <AnotherComponent />
      {renderPosts()}
    </div>
  )
}

export default App