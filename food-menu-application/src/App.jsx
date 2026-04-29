import { useState } from 'react'

import './App.css'

function App() {
  return(
    <div>
      <h1 id='heading'>Our Food Application</h1>
      <h3>Our Menu</h3>
      <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ipsum harum deserunt facere neque commodi iusto quasi laborum rerum cupiditate.</p>
      <ul id='FoodList'>
        <li>
          <div id='ImageArea'>
            <img src="https://hamariweb.com/recipes/images/recipeimages/3464.jpg" alt="" />
          </div>
          <h4>Title</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, voluptatem.</p>
          <p>Quantity : 0</p>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )

  
}

export default App
