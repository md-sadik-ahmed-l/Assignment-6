
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Banner/Banner'
import ProcessCard from './HeroSection/ProcessCard'
import NavBar from './NavBar/NavBar'
import TransparentSubscription from './TransparentSubscription/TransparentSubscription'
import ExploreProducts from './ExploreProducts/ExploreProducts'
import Footer from './Footer/Footer'
import ToolsSection from './PremiumTools/ToolsSection'
import { ToastContainer } from 'react-toastify'


const subscriptionPromise = fetch('ProcessData.json').then( res => res.json())

const ToolsPromise = fetch('ToolsData.json' ).then(res => res.json());


function App() {
  // const [count, setCount] = useState(0)
  // ❌ remove this

  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <>
      <div>
        <NavBar selectedProducts = {selectedProducts}></NavBar>
        <Banner></Banner>
        
        <Suspense fallback={"Loading..."}> 

          <ToolsSection 
          ToolsPromise = {ToolsPromise} 
          selectedProducts = {selectedProducts} 
          setSelectedProducts = {setSelectedProducts} > 
          
          </ToolsSection>

        </Suspense>

        <ProcessCard></ProcessCard>

        <Suspense fallback={"Loading..."}>
          <TransparentSubscription subscriptionPromise={subscriptionPromise}></TransparentSubscription>
        </Suspense>

        <ExploreProducts></ExploreProducts>
        <Footer></Footer>

        <ToastContainer></ToastContainer>
        
      </div>
    </>
  )
}

export default App
