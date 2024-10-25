
// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Players from './components/Players/Players'


function App() {
  const [balance, setBalance] = useState(0) 
  const addCredit = () => {
      setBalance(count => count + 99999999);
  };

 
  return (
    <>
      
      <Header
      balance={balance}
      addCredit={addCredit}></Header>

      <Players 
      balance={balance}
      setBalance={setBalance}
      ></Players>




      <Footer></Footer>
      
      
    </>
  )
}

export default App
