import React from 'react'
import MainPage from './Pages/MainPage'
import RightTop from './components/RightTop'
import RightActions from './components/RightActions'
import Summary from './components/summary'
import AuthorizedSupplier from './components/AuthorizedSupplier'
function App() {
  return (
    <div>
 
<RightTop/>
<RightActions/>
<Summary/>
<AuthorizedSupplier/>
      
    </div>
  )
}

export default App