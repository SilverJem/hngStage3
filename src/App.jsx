import { BrowserRouter ,Route, Routes} from 'react-router-dom'

import './App.css'

import Homepage from './Components/Homepage'
import FirebaseAuth from './Components/FirebaseAuth'

function App() {

  return (
    <BrowserRouter>
       <Routes>
    <Route path='/' element={<FirebaseAuth />}></Route>
    <Route path='/gallery' element={<Homepage />}></Route>
</Routes>
    </BrowserRouter>
  )
}

export default App
