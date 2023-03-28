import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './index.css';


const API = "https://dummyjson.com/posts"

function App() {

const [posts, setPosts] = useState([]);

useEffect(() => {
   const apiData = async (url) =>{
    try {
      const res  = await axios.get(url)
  setPosts(res.data.posts)   
    } catch (error) {
      console.error();
    }
  
} 
   apiData(`${API}`);
 
}, [])

 
return (
  <div >
    <section>
      <div className='container'>
    <h1>List of Posts</h1>
    <div className='cards'>
    {posts.map((post) => {
  const {id, title, body} = post
  return(
  <div className='card' key={id}>
    <h3 className='title'>{id} . {title}</h3>
    <p>{body}</p>
  </div>
  )
})}
</div>
</div>
</section>
  </div>


)
}
export default App;