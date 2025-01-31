import {BrowserRouter,Routes,Route, Outlet} from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import MainSection from './Components/MainSection/MainSection'
import TensionMember from './Components/TensionMember/TensionMember'

function App() {


  return (
    <>
    <TensionMember/>
       <MainSection/>
       
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<RootComponent/>}>
            <Route/>
          </Route>
            
         </Routes>
      </BrowserRouter>

    </>
  )
}

const RootComponent=()=>{
  return (
    <>
    <div>
      <Sidebar/>
    </div>
    <div>
      <Outlet/>
    </div>
    </>
  )
}

export default App
