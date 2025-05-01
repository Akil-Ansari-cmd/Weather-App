import { useState } from 'react'
import Weather from './Weather'
import Blinkit from './Blinkit'
import Practice1 from './Practices/Practice1'
import Practice2 from './Practices/Practice2'
import Practice3 from './Practices/Practice3'
import Practice4 from './Practices/Practice4'
import { PracticeApi } from '../Services/Practice'
import Practice5 from './Practices/Practice5'

function App() {

  

  return (
    <div>
      <Weather/>
      {/* <Blinkit/> */}
      {/* <Practice1/> */}
      {/* <Practice2/>
      <Practice3/>
      <Practice4/>
      <Practice5/> */}
    </div>
  )
}

export default App
