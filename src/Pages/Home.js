import React from 'react'
import Movies from './Movies'
import Search from './Search'
import { useGlobalContext } from './Context'
import Initial from './Initial'




const Home = () => {
    const {query} = useGlobalContext();
    
  return (
    <div className='Main-Container'>
        <Search/>
        {
          query === ""? <Initial/> : <Movies />
        }
        
    </div>
  )
}

export default Home