
// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Players from './components/Players/Players'
import {  Flip, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'



function App() {
  const [balance, setBalance] = useState(0) 

  const addCredit = () => {
    toast.success('credit added successfully', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Flip,
      });
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
      >
        
      </Players>


      <Footer></Footer>
      <div className='text-2xl '>
                        <ToastContainer
                            
                            position="top-center"
                            autoClose={2000}
                            limit={1}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                            transition: Flip
                            
                        />
                </div>
      
      
    </>
  )
}

export default App
