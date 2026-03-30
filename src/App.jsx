
import { Suspense } from 'react'
import './App.css'
import Banner from './Banner/Banner'
import ProcessCard from './HeroSection/ProcessCard'
import NavBar from './NavBar/NavBar'
import TransparentSubscription from './TransparentSubscription/TransparentSubscription'
import ExploreProducts from './ExploreProducts/ExploreProducts'
import Footer from './Footer/Footer'
import ToolsSection from './PremiumTools/ToolsSection'


const subscriptionPromise = fetch('ProcessData.json').then( res => res.json())

const ToolsPromise = fetch('ToolsData.json' ).then(res => res.json());


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar></NavBar>
        <Banner></Banner>
        
        <Suspense fallback={"Loading..."}> 

          <ToolsSection ToolsPromise = {ToolsPromise} > </ToolsSection>

        </Suspense>

        <ProcessCard></ProcessCard>

        <Suspense fallback={"Loading..."}>
          <TransparentSubscription subscriptionPromise={subscriptionPromise}></TransparentSubscription>
        </Suspense>

        <ExploreProducts></ExploreProducts>
        <Footer></Footer>
        
      </div>
    </>
  )
}

export default App
