
// import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Players from './components/Players/Players'
// import Selects from './components/selects/Selects'

function App() {
//   const [selected, setSelected] = useState([]);
//   const handleAddToSelected = player => {
    
//         const newSelected = [...selected, player];
//         setSelected(newSelected);
    
// };



  return (
    <>
      
      <Header></Header>

<Players ></Players>


{/* <Selects selected={selected}></Selects> */}


      <Footer></Footer>
      
      
    </>
  )
}

export default App
