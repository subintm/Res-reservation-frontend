import React from 'react'
import {data} from '../restApi.json'
import { useNavigate } from 'react-router-dom'

function Menu  ()  {
const navigate=useNavigate()



const handleorder = async (e) => {
  e.preventDefault();

  navigate('/onlineorder')
}
  return (
    <>
      <section className='menu' id='menu'>

     x
        <div className="container">
        
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>

    </>
  )
}

export default Menu
