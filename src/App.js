import './App.css';
import Home from './components/Home';
import Explore from './components/Explore/Explore'
import { Switch, Route, useLocation } from 'react-router-dom';
import TravelInfo from './components/TravelInfo/TravelInfo';
import Contact from './components/Contact/Contact';
import { AnimatePresence } from 'framer-motion';
import Aos from 'aos';
import { useEffect } from 'react'

function App() {
  const location = useLocation();
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/explore'>
            <Explore />
          </Route>
          <Route exact path='/travelinfo'>
            <TravelInfo />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
