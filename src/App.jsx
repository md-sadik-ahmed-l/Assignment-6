
import { Suspense } from 'react'
import './App.css'
import Banner from './Banner/Banner'
import ProcessCard from './HeroSection/ProcessCard'
import NavBar from './NavBar/NavBar'
import TransparentSubscription from './TransparentSubscription/TransparentSubscription'


const subscriptionPromise = fetch('ProcessData.json').then( res => res.json())


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar></NavBar>
        <Banner></Banner>
        <ProcessCard></ProcessCard>

        <Suspense fallback={"Loading..."}>
          <TransparentSubscription subscriptionPromise={subscriptionPromise}></TransparentSubscription>
        </Suspense>
        
      </div>
    </>
  )
}

export default App
