  import { useState } from 'react'
  import './App.css'
import HeadingComponent from "./components/HeadingComponent";
import Foodlist from "./components/Foodlist";

  function App() {


    return(
      <div>
        <HeadingComponent />
        <Foodlist />
      </div>
    )

    
  }

export default App
