import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Error404 from './components/Error/Error404'

const App = () => {
  return (
    <div>
      <Navbar /><Error404 />
      <Hero />
      
    </div>
  )
}

export default App